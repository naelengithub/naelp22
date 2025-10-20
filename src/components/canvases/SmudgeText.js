"use client";

import { useEffect, useRef } from "react";

export default function SmudgeText() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let p5Instance;
    (async () => {
      const p5Module = await import("p5");
      const p5 = p5Module.default;

      const sketch = (p) => {
        let shaderCanvas, shader, textGraphics;
        const CANVAS_SIZE = 220; // smaller
        const HALF_CANVAS = CANVAS_SIZE / 2;
        const TEXT_SCALE = 2;
        let intensity = 0;

        const vertexShader = `
          precision highp float;
          attribute vec3 aPosition;
          attribute vec2 aTexCoord;
          uniform mat4 uModelViewMatrix;
          uniform mat4 uProjectionMatrix;
          varying vec2 vTexCoord;
          void main() {
            vTexCoord = aTexCoord;
            gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition,1.0);
          }`;

        const fragmentShader = `
          precision highp float;
          uniform vec2 u_resolution;
          uniform vec2 u_mouse;
          uniform float u_time;
          uniform float u_intensity;
          uniform sampler2D u_texture;
          varying vec2 vTexCoord;

          void main() {
            vec2 uv = gl_FragCoord.xy / u_resolution.xy;
            vec2 mousePos = u_mouse / u_resolution.xy;
            float dist = distance(uv, mousePos);

            float maxDistortion = 0.05;
            float timeSpeed = 2.0;
            float effect = smoothstep(0.35, 0.0, dist);
            float pulse = 0.5 + 0.5 * sin(u_time * 0.8);
            float distortionStrength = maxDistortion * effect * pulse * u_intensity;

            vec2 distortion = vec2(
              sin(uv.y * 20.0 + u_time * timeSpeed) * distortionStrength,
              cos(uv.x * 20.0 + u_time * timeSpeed) * distortionStrength
            );

            vec2 distortedUV = vTexCoord + distortion;

            vec4 texColor = vec4(0.0);
            float total = 0.0;
            float step = 0.0015;
            for(float x=-1.0;x<=1.0;x+=1.0){
              for(float y=-1.0;y<=1.0;y+=1.0){
                vec2 offset=vec2(x,y)*step;
                float weight=1.0-length(offset)*0.5;
                texColor+=texture2D(u_texture,distortedUV+offset)*weight;
                total+=weight;
              }
            }
            texColor/=total;

            float gamma=1.8;
            texColor.rgb=pow(texColor.rgb,vec3(1.0/gamma));
            if(texColor.a<0.01) discard;
            gl_FragColor=texColor;
          }`;

        p.setup = () => {
          const c = p.createCanvas(CANVAS_SIZE, CANVAS_SIZE);
          p.pixelDensity(2);
          c.elt.style.background = "transparent";

          shaderCanvas = p.createGraphics(CANVAS_SIZE, CANVAS_SIZE, p.WEBGL);
          shader = shaderCanvas.createShader(vertexShader, fragmentShader);

          textGraphics = p.createGraphics(
            CANVAS_SIZE * TEXT_SCALE,
            CANVAS_SIZE * TEXT_SCALE
          );
          textGraphics.pixelDensity(2);
          textGraphics.clear();
          textGraphics.textFont("Satoshi");
          textGraphics.textSize(36 * TEXT_SCALE); // smaller text
          textGraphics.textAlign(p.CENTER, p.CENTER);
          textGraphics.fill(0);
          textGraphics.noStroke();
          textGraphics.text(
            "BCN © 2025",
            textGraphics.width / 2,
            textGraphics.height / 2
          );
        };

        p.draw = () => {
          p.clear();

          const inside =
            p.mouseX >= 0 &&
            p.mouseY >= 0 &&
            p.mouseX <= CANVAS_SIZE &&
            p.mouseY <= CANVAS_SIZE;

          const targetIntensity = inside ? 1 : 0;
          intensity = p.lerp(intensity, targetIntensity, 0.05);

          shaderCanvas.shader(shader);
          shader.setUniform("u_resolution", [CANVAS_SIZE, CANVAS_SIZE]);
          shader.setUniform("u_time", p.millis() / 1000.0);
          shader.setUniform("u_texture", textGraphics);
          shader.setUniform("u_intensity", intensity);

          const mouseX = p.constrain(p.mouseX, 0, CANVAS_SIZE);
          const mouseY = p.constrain(p.mouseY, 0, CANVAS_SIZE);
          const mousePos = {
            x: mouseX / CANVAS_SIZE,
            y: 1.0 - mouseY / CANVAS_SIZE,
          };
          shader.setUniform("u_mouse", [
            mousePos.x * CANVAS_SIZE * TEXT_SCALE,
            mousePos.y * CANVAS_SIZE * TEXT_SCALE,
          ]);

          shaderCanvas.noStroke();
          shaderCanvas.rect(
            -HALF_CANVAS,
            -HALF_CANVAS,
            CANVAS_SIZE,
            CANVAS_SIZE
          );
          p.image(shaderCanvas, 0, 0);
        };
      };

      p5Instance = new p5(sketch, containerRef.current);
    })();

    return () => {
      if (p5Instance) p5Instance.remove();
    };
  }, []);

  // 👇 bottom-left corner position
  return (
    <div
      ref={containerRef}
      className="w-[220px] h-[220px] flex justify-center items-center pointer-events-none"
    />
  );
}

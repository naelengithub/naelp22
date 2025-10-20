"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

// Dynamically import react-p5 (client only)
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function InkCrystalShader({ className = "" }) {
  const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 });

  // 🧠 Update size responsively
  useEffect(() => {
    if (typeof window === "undefined") return;
    const updateSize = () => {
      const w = window.innerWidth;
      const h = Math.min(window.innerHeight * 0.35, 400);
      setCanvasSize({ w, h });
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // ✳️ Prevent SSR execution entirely
  if (typeof window === "undefined" || !canvasSize.w) return null;

  const vert = `
    attribute vec3 aPosition;
    attribute vec2 aTexCoord;
    varying vec2 vTexCoord;
    void main() {
      vTexCoord = aTexCoord;
      vec4 positionVec4 = vec4(aPosition, 1.0);
      positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
      gl_Position = positionVec4;
    }
  `;

  const frag = `
    #ifdef GL_ES
    precision mediump float;
    #endif

    varying vec2 vTexCoord;
    uniform sampler2D texture;
    uniform vec2 mouse;
    uniform vec2 resolution;
    uniform float time;

    vec2 fade(vec2 t) { return t*t*t*(t*(t*6.0-15.0)+10.0); }

    float noise(vec2 P) {
      vec2 Pi = floor(P);
      vec2 Pf = P - Pi;
      vec2 w = fade(Pf);
      float a = fract(sin(dot(Pi, vec2(127.1, 311.7))) * 43758.5453123);
      float b = fract(sin(dot(Pi + vec2(1.0, 0.0), vec2(127.1, 311.7))) * 43758.5453123);
      float c = fract(sin(dot(Pi + vec2(0.0, 1.0), vec2(127.1, 311.7))) * 43758.5453123);
      float d = fract(sin(dot(Pi + vec2(1.0, 1.0), vec2(127.1, 311.7))) * 43758.5453123);
      return mix(mix(a, b, w.x), mix(c, d, w.x), w.y);
    }

    void main() {
      vec2 uv = vTexCoord;
      uv.y = 1.0 - uv.y;
      vec2 mouseUV = (mouse + 1.0) * 0.5;
      float dist = distance(uv, mouseUV);
      float strength = smoothstep(0.5, 0.0, dist);

      float n1 = noise(uv * 2.5 + time * 0.1);
      float n2 = noise(uv * 5.0 - time * 0.12);
      float n = n1 * 0.6 + n2 * 0.4;

      vec2 dir = normalize(mouseUV - uv);
      vec2 offset = dir * n * strength * 0.15;
      offset += vec2(
        sin(time * 0.3 + n * 6.2831) * 0.015,
        cos(time * 0.3 + n * 6.2831) * 0.015
      ) * strength;

      vec3 base = texture2D(texture, uv + offset).rgb;
      gl_FragColor = vec4(base, 1.0);
    }
  `;

  const setup = (p5, canvasParentRef) => {
    // ✅ Abort if no browser environment
    if (typeof window === "undefined" || !canvasParentRef) {
      p5.noLoop();
      return;
    }

    const w = canvasSize.w || window.innerWidth;
    const h = canvasSize.h || 300;
    p5.createCanvas(w, h, p5.WEBGL).parent(canvasParentRef);

    // Limit frame rate
    p5.frameRate(30);
    p5.clear();

    let inkShader;
    try {
      inkShader = p5.createShader(vert, frag);
    } catch (err) {
      console.warn("Shader skipped (no GL context)", err);
      p5.noLoop();
      return;
    }

    const screen = p5.createGraphics(w, h);
    const mousePos = p5.createVector(0, 0);

    screen.background(252, 252, 250);
    screen.fill(0);
    screen.textFont("Satoshi, sans-serif");
    const text = "selected work";
    const textSize = Math.min(w * 0.1, 180);
    screen.textSize(textSize);
    screen.textAlign(p5.CENTER, p5.CENTER);
    screen.text(text, w / 2, h / 2);

    p5.shader(inkShader);

    p5.draw = () => {
      if (!p5.canvas) {
        p5.noLoop();
        return;
      }

      p5.background(252, 252, 250);
      mousePos.x = (p5.mouseX / p5.width) * 2 - 1;
      mousePos.y = (p5.mouseY / p5.height) * 2 - 1;

      inkShader.setUniform("texture", screen);
      inkShader.setUniform("time", p5.millis() / 1000.0);
      inkShader.setUniform("mouse", [mousePos.x, mousePos.y]);
      inkShader.setUniform("resolution", [p5.width, p5.height]);

      p5.rect(-p5.width / 2, -p5.height / 2, p5.width, p5.height);
    };
  };

  return (
    <div className={`w-fit flex justify-center ${className}`}>
      <Sketch setup={setup} className="w-fit" />
    </div>
  );
}

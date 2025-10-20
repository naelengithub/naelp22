"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

// Dynamically import react-p5 (client only)
const Sketch = dynamic(() => import("react-p5").then((mod) => mod.default), {
  ssr: false,
});

export default function InkCrystalShader({ className = "" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") setMounted(true);
  }, []);

  // ⛔ prevent SSR execution
  if (!mounted) return null;

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

    vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x,289.0);}
    vec2 fade(vec2 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}

    float perlin(vec2 P){
      vec4 Pi=floor(P.xyxy)+vec4(0.0,0.0,1.0,1.0);
      vec4 Pf=fract(P.xyxy)-vec4(0.0,0.0,1.0,1.0);
      Pi=mod(Pi,289.0);
      vec4 ix=Pi.xzxz;
      vec4 iy=Pi.yyww;
      vec4 fx=Pf.xzxz;
      vec4 fy=Pf.yyww;
      vec4 i=permute(permute(ix)+iy);
      vec4 gx=2.0*fract(i*0.0243902439)-1.0;
      vec4 gy=abs(gx)-0.5;
      vec4 tx=floor(gx+0.5);
      gx=gx-tx;
      vec2 g00=vec2(gx.x,gy.x);
      vec2 g10=vec2(gx.y,gy.y);
      vec2 g01=vec2(gx.z,gy.z);
      vec2 g11=vec2(gx.w,gy.w);
      vec4 norm=1.79284291400159-0.85373472095314*
        vec4(dot(g00,g00),dot(g10,g10),dot(g01,g01),dot(g11,g11));
      g00*=norm.x;g10*=norm.y;g01*=norm.z;g11*=norm.w;
      float n00=dot(g00,vec2(fx.x,fy.x));
      float n10=dot(g10,vec2(fx.y,fy.y));
      float n01=dot(g01,vec2(fx.z,fy.z));
      float n11=dot(g11,vec2(fx.w,fy.w));
      vec2 fade_xy=fade(Pf.xy);
      vec2 n_x=mix(vec2(n00,n01),vec2(n10,n11),fade_xy.x);
      return 2.3*mix(n_x.x,n_x.y,fade_xy.y);
    }

    float crystalEdges(vec2 uv){
      float scale=1.0;
      float noise1=perlin(uv*scale+time*0.2);
      float noise2=perlin(uv*scale*2.0-time*0.1);
      return (noise1*0.5+noise2*0.5)*0.5+0.5;
    }

    void main(){
      vec2 uv=vTexCoord;
      uv.y=1.0-uv.y;
      vec2 mouseUV=(mouse+1.0)*0.5;
      float dist=distance(uv,mouseUV);
      float strength=smoothstep(0.22,0.02,dist);

      vec2 offset=vec2(0.0);
      float pattern=0.0;
      float edges=0.0;

      if(strength>0.0){
        vec2 noiseUV=uv*4.5+vec2(time*0.2);
        pattern=perlin(noiseUV);
        edges=crystalEdges(noiseUV);
        vec2 crystalForce=vec2(
          pattern*sin(edges*3.14159),
          pattern*cos(edges*3.14159)
        );
        offset=crystalForce*strength*0.02;
        float angle=pattern*3.14159;
        offset+=vec2(cos(angle),sin(angle))*strength*0.03;
      }

      float aberrationStrength=0.0075*strength;
      vec2 aberrationOffset=normalize(offset+vec2(0.0001));

      float r=texture2D(texture,uv+offset+aberrationOffset*aberrationStrength).r;
      float g=texture2D(texture,uv+offset).g;
      float b=texture2D(texture,uv+offset-aberrationOffset*aberrationStrength).b;

      vec4 color=vec4(r,g,b,1.0);
      gl_FragColor=color;
    }
  `;

  const setup = (p5, canvasParentRef) => {
    // ✅ skip if no canvas parent (server)
    if (typeof window === "undefined" || !canvasParentRef) {
      p5.noLoop();
      return;
    }

    const w = 850;
    const h = 250;
    p5.createCanvas(w, h, p5.WEBGL).parent(canvasParentRef);
    p5.frameRate(30); // ⏱ limit frame rate
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

    screen.textFont("Satoshi, sans-serif");
    screen.background(252, 252, 250);
    screen.fill(0);
    screen.textSize(200);
    screen.textAlign(p5.CENTER, p5.CENTER);
    screen.text("Hit me up", w / 2, h / 2);

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
    <div className={className}>
      <Sketch setup={setup} />
    </div>
  );
}

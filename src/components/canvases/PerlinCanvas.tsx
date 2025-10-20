"use client";

import { useEffect, useRef } from "react";
import fragmentShader from "../../lib/shader/PerlinShader.glsl";

export default function PerlinCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    // --- vertex shader ---
    const vertexShaderSource = `
      attribute vec2 aPosition;
      varying vec2 vTexCoord;
      void main() {
        vTexCoord = (aPosition + 1.0) * 0.5;
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    // --- shader compile helper ---
    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type)!;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
      }
      return shader;
    };

    const vert = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const frag = createShader(gl.FRAGMENT_SHADER, fragmentShader);

    const program = gl.createProgram()!;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
    }

    gl.useProgram(program);

    // --- fullscreen quad ---
    const vertices = new Float32Array([
      -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
    ]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    // --- uniforms ---
    const noiseOffsetLoc = gl.getUniformLocation(program, "noiseOffset");
    const thresholdLoc = gl.getUniformLocation(program, "uThreshold");
    const timeLoc = gl.getUniformLocation(program, "uTime");
    const seedALoc = gl.getUniformLocation(program, "uSeedA");
    const seedBLoc = gl.getUniformLocation(program, "uSeedB");
    const morphLoc = gl.getUniformLocation(program, "uMorph");

    if (
      !noiseOffsetLoc ||
      !thresholdLoc ||
      !timeLoc ||
      !seedALoc ||
      !seedBLoc ||
      !morphLoc
    ) {
      console.warn("Some uniforms are missing; check shader variable names.");
    }

    gl.uniform1f(thresholdLoc, 0.5);

    // --- state ---
    let t = 0;
    let morph = 0;
    let seedA = { x: Math.random() * 10.0, y: Math.random() * 10.0 };
    let seedB = { x: Math.random() * 10.0, y: Math.random() * 10.0 };
    const morphSpeed = 0.002; // smaller = slower morph (≈20s cycle)

    // --- mouse handler ---
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // --- resize handler ---
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    };
    resize();
    window.addEventListener("resize", resize);

    // --- render loop ---
    const render = () => {
      t += 0.003; // was 0.01 → slower time evolution

      // update morph over time
      morph += 0.0005; // was 0.002 → much slower morph transition
      if (morph >= 1.0) {
        morph = 0.0;
        seedA = seedB;
        seedB = { x: Math.random() * 10.0, y: Math.random() * 10.0 };
      }

      // send uniforms
      gl.uniform1f(timeLoc, t);
      gl.uniform1f(morphLoc, morph);
      gl.uniform2f(seedALoc, seedA.x, seedA.y);
      gl.uniform2f(seedBLoc, seedB.x, seedB.y);
      gl.uniform2f(
        noiseOffsetLoc,
        mouse.current.x * 2.0 - 1.0,
        (1.0 - mouse.current.y) * 2.0 - 1.0
      );

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      requestAnimationFrame(render);
    };

    render();

    // --- cleanup ---
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen block -z-10"
    />
  );
}

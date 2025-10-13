"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// Import react-p5-wrapper dynamically (avoids SSR issues)
const ReactP5Wrapper = dynamic(
  () => import("react-p5-wrapper").then((mod) => mod.ReactP5Wrapper),
  { ssr: false }
);

// --- OpenSimplexNoise implementation ---
class OpenSimplexNoise {
  private perm: number[];

  constructor(seed = Date.now()) {
    this.perm = new Array(512);
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const n = Math.floor(seed % (i + 1));
      [p[i], p[n]] = [p[n], p[i]];
      seed = (seed * 16807) % 2147483647;
    }
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255];
  }

  // Simple 3D OpenSimplex Noise approximation
  noise3D(x: number, y: number, z: number) {
    const floorX = Math.floor(x);
    const floorY = Math.floor(y);
    const floorZ = Math.floor(z);

    const X = floorX & 255;
    const Y = floorY & 255;
    const Z = floorZ & 255;

    x -= floorX;
    y -= floorY;
    z -= floorZ;

    const u = this.fade(x);
    const v = this.fade(y);
    const w = this.fade(z);

    const A = this.perm[X] + Y;
    const B = this.perm[X + 1] + Y;

    return this.lerp(
      this.lerp(
        this.lerp(
          this.grad(this.perm[A + Z], x, y, z),
          this.grad(this.perm[B + Z], x - 1, y, z),
          u
        ),
        this.lerp(
          this.grad(this.perm[A + 1 + Z], x, y - 1, z),
          this.grad(this.perm[B + 1 + Z], x - 1, y - 1, z),
          u
        ),
        v
      ),
      this.lerp(
        this.lerp(
          this.grad(this.perm[A + Z + 1], x, y, z - 1),
          this.grad(this.perm[B + Z + 1], x - 1, y, z - 1),
          u
        ),
        this.lerp(
          this.grad(this.perm[A + 1 + Z + 1], x, y - 1, z - 1),
          this.grad(this.perm[B + 1 + Z + 1], x - 1, y - 1, z - 1),
          u
        ),
        v
      ),
      w
    );
  }

  private fade(t: number) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  private lerp(a: number, b: number, t: number) {
    return a + t * (b - a);
  }

  private grad(hash: number, x: number, y: number, z: number) {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }
}

// --- React Component ---
export default function OpenSimplexCanvas() {
  const [seed] = useState(Date.now());

  const sketch = (p5: any) => {
    let noise: OpenSimplexNoise;
    let zoff = 0;
    const increment = 0.03;

    p5.setup = () => {
      p5.createCanvas(400, 400);
      noise = new OpenSimplexNoise(seed);
      p5.noStroke();
    };

    p5.draw = () => {
      p5.background(0);

      const uoff = p5.map(p5.mouseX, 0, p5.width, 0, 2);
      const voff = p5.map(p5.mouseY, 0, p5.height, 0, 2);

      let xoff = 0;
      for (let x = 0; x < p5.width; x++) {
        let yoff = 0;
        for (let y = 0; y < p5.height; y++) {
          const n = noise.noise3D(xoff + uoff, yoff + voff, zoff);
          const bright = p5.map(n, -1, 1, 0, 255);
          p5.stroke(bright);
          p5.point(x, y);
          yoff += increment;
        }
        xoff += increment;
      }

      zoff += 0.02;
    };
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-black">
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
}

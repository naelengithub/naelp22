import React, { useRef, useEffect } from "react";
import Sketch from "react-p5";

function P5Sketch() {
  const numBalls = 4;
  const spring = 0.4;
  const gravity = 0.03;
  const friction = -0.9;
  const balls = [];
  const images = [];
  const p5Instance = useRef(null);

  const setup = (p5, canvasParentRef) => {
    p5Instance.current = p5;
    p5.createCanvas(
      window.innerWidth,
      document.documentElement.clientHeight
    ).parent(canvasParentRef);

    for (let i = 0; i < numBalls; i++) {
      images[i] = p5.loadImage(`/images/imp${i + 1}.png`);
    }

    const minSpacing = 200;
    for (let i = 0; i < numBalls; i++) {
      const isMobile = window.innerWidth < 768;
      const ballSize = isMobile ? p5.random(75, 150) : p5.random(200, 350);
      let x, y;
      let overlapping = true;
      while (overlapping) {
        x = p5.random(window.innerWidth);
        y = p5.random(document.documentElement.clientHeight);
        overlapping = false;
        for (let j = 0; j < i; j++) {
          const distX = x - balls[j].x;
          const distY = y - balls[j].y;
          const distance = Math.sqrt(distX * distX + distY * distY);
          const minDist = balls[j].diameter / 2 + ballSize / 2;
          if (distance < minDist) {
            overlapping = true;
            break;
          }
        }
      }

      balls[i] = new Ball(x, y, ballSize, i, balls, images[i]);
    }
    p5.noStroke();
  };

  const draw = (p5) => {
    p5.background(252, 252, 250);
    balls.forEach((ball) => {
      ball.collide();
      ball.move(p5);
      ball.display(p5);
    });
  };

  const windowResized = () => {
    updateCanvasSize(p5Instance.current);
  };

  const updateCanvasSize = (p5) => {
    const width = window.innerWidth;
    const height = document.documentElement.clientHeight;
    p5.resizeCanvas(width, height);
  };

  useEffect(() => {
    window.addEventListener("resize", windowResized);
    return () => {
      window.removeEventListener("resize", windowResized);
    };
  }, []);

  class Ball {
    constructor(xin, yin, din, idin, oin, img) {
      this.x = xin;
      this.y = yin;
      this.vx = 0;
      this.vy = 0;
      this.diameter = din;
      this.id = idin;
      this.others = oin;
      this.img = img;
    }

    collide() {
      for (let i = this.id + 1; i < numBalls; i++) {
        let dx = this.others[i].x - this.x;
        let dy = this.others[i].y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let minDist = this.others[i].diameter / 2 + this.diameter / 2;

        if (distance < minDist) {
          let angle = Math.atan2(dy, dx);
          let targetX = this.x + Math.cos(angle) * minDist;
          let targetY = this.y + Math.sin(angle) * minDist;
          let ax = (targetX - this.others[i].x) * spring;
          let ay = (targetY - this.others[i].y) * spring;
          this.vx -= ax;
          this.vy -= ay;
          this.others[i].vx += ax;
          this.others[i].vy += ay;
        }
      }
    }

    move(p5) {
      this.vy += gravity;
      this.x += this.vx;
      this.y += this.vy;

      const canvasWidth = window.innerWidth;
      const canvasHeight = document.documentElement.clientHeight;

      if (this.x + this.diameter / 2 > canvasWidth) {
        this.x = canvasWidth - this.diameter / 2;
        this.vx *= friction;
      } else if (this.x - this.diameter / 2 < 0) {
        this.x = this.diameter / 2;
        this.vx *= friction;
      }

      if (this.y + this.diameter / 2 > canvasHeight) {
        this.y = canvasHeight - this.diameter / 2;
        this.vy *= friction;
      } else if (this.y - this.diameter / 2 < 0) {
        this.y = this.diameter / 2;
        this.vy *= friction;
      }
    }

    display(p5) {
      p5.fill(255);
      p5.ellipse(this.x, this.y, this.diameter, this.diameter);
      p5.image(
        this.img,
        this.x - this.diameter / 2,
        this.y - this.diameter / 2,
        this.diameter,
        this.diameter
      );
    }
  }

  return <Sketch setup={setup} draw={draw} />;
}

export default P5Sketch;

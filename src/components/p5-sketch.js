import React, { useEffect } from "react";
import Sketch from "react-p5";

function P5Sketch() {
  const numBalls = 13;
  const spring = 0.05;
  const gravity = 0.03;
  const friction = -0.9;
  const balls = [];

  const setup = (p5, canvasParentRef) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    p5.createCanvas(windowWidth, windowHeight).parent(canvasParentRef);

    for (let i = 0; i < numBalls; i++) {
      balls[i] = new Ball(
        p5.random(windowWidth),
        p5.random(windowHeight),
        p5.random(30, 70),
        i,
        balls
      );
    }
    p5.noStroke();
    p5.fill(0);
  };

  const draw = (p5) => {
    p5.background(255, 247, 237);
    balls.forEach((ball) => {
      ball.collide();
      ball.move(p5); // Pass the p5 object
      ball.display(p5);
    });
  };

  const windowResized = (p5) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    p5.resizeCanvas(windowWidth, windowHeight);

    balls.forEach((ball) => {
      ball.x = p5.random(windowWidth);
      ball.y = p5.random(windowHeight);
    });
  };

  useEffect(() => {
    window.addEventListener("resize", windowResized);
    return () => {
      window.removeEventListener("resize", windowResized);
    };
  }, []);

  class Ball {
    constructor(xin, yin, din, idin, oin) {
      this.x = xin;
      this.y = yin;
      this.vx = 0;
      this.vy = 0;
      this.diameter = din;
      this.id = idin;
      this.others = oin;
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

      const canvasWidth = p5.width;
      const canvasHeight = p5.height;

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
      p5.ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    display(p5) {
      p5.ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }

  return <Sketch setup={setup} draw={draw} />;
}

export default P5Sketch;

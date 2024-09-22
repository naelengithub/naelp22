import React, { useRef, useEffect } from "react";
import Sketch from "react-p5";

function P5Sketch() {
  const numBalls = 4;
  const spring = 0.05;
  const gravity = 0.03;
  const friction = -0.9;
  const balls = [];
  const images = []; // To store images for each ball
  const p5Instance = useRef(null); // Use a ref for the p5 instance

  const setup = (p5, canvasParentRef) => {
    p5Instance.current = p5; // Save the p5 instance reference to the ref
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );

    // Load images
    for (let i = 0; i < numBalls; i++) {
      images[i] = p5.loadImage(`/images/imp${i + 1}.png`); // Adjust image paths
    }

    // Create balls with bigger diameters
    for (let i = 0; i < numBalls; i++) {
      balls[i] = new Ball(
        p5.random(window.innerWidth),
        p5.random(window.innerHeight),
        p5.random(200, 300), // Larger ball diameters
        i,
        balls,
        images[i] // Pass corresponding image
      );
    }
    p5.noStroke();
  };

  const draw = (p5) => {
    p5.background(255, 247, 237);
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
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
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
      this.img = img; // Store the image for this ball
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
      const canvasHeight = window.innerHeight;

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
      // Draw a solid ellipse background before drawing the image
      p5.fill(255);
      p5.ellipse(this.x, this.y, this.diameter, this.diameter);

      // Display the image on top of the ellipse, clipped by the round background
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

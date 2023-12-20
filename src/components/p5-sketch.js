import React, { useState, useEffect } from "react";
import Sketch from "react-p5";

function P5Sketch() {
  const [speed, setSpeed] = useState(2);
  const [x, setX] = useState(50);

  useEffect(() => {
    const handleAnimation = () => {
      // Animation logic here
      if (speed > 0) {
        if (x + 50 < 500) {
          setX(x + speed);
        } else {
          setSpeed(-speed);
        }
      } else {
        if (x - 50 > 0) {
          setX(x + speed);
        } else {
          setSpeed(-speed);
        }
      }
    };

    const intervalId = setInterval(handleAnimation, 1000 / 30); // 30 frames per second

    return () => {
      clearInterval(intervalId);
    };
  }, [x, speed]);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 400).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(255, 120, 20);
    p5.ellipse(x, 100, 100);
  };

  return <Sketch setup={setup} draw={draw} />;
}

export default P5Sketch;

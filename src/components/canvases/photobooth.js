import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Sketch from "react-p5";

function P5Sketch({ onClose }) {
  const captureRef = useRef(null);

  const setup = async (p5, canvasParentRef) => {
    // Set canvas size based on the video size
    const canvasWidth = 320;
    const canvasHeight = 240;

    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);

    captureRef.current = p5.createCapture(p5.VIDEO);
    captureRef.current.size(canvasWidth, canvasHeight);
    // Uncomment the next line if you want to hide the original video
    captureRef.current.hide();
  };

  const draw = (p5) => {
    p5.background(255, 193, 182);

    // Set the margin for the video
    const videoMargin = 20;

    // Display the video with a margin
    p5.image(
      captureRef.current,
      videoMargin,
      videoMargin,
      320 - 2 * videoMargin,
      240 - 2 * videoMargin
    );
    p5.filter(p5.THRESHOLD);
  };

  useEffect(() => {
    // Cleanup function when component is unmounted or camera is no longer needed
    const cleanup = () => {
      if (captureRef.current) {
        captureRef.current.stop();
        captureRef.current.remove();
      }
    };

    // Attach cleanup function to the window's beforeunload event
    window.addEventListener("beforeunload", cleanup);

    return () => {
      // Remove the cleanup function from the window's beforeunload event
      window.removeEventListener("beforeunload", cleanup);
      cleanup();
    };
  }, []);

  return (
    <div>
      <Sketch setup={setup} draw={draw} />
      <button onClick={onClose} className="absolute right-0">
        x
      </button>
    </div>
  );
}

P5Sketch.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default P5Sketch;

import React, { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ProjectItem } from "../home/featArchitecture/details/desktop/ProjectItem";

import dynamic from "next/dynamic";

const P5Sketch = dynamic(() => import("../canvases/photobooth"), {
  ssr: false, // Disable server-side rendering
});

const Photoautomat = () => {
  const size = useWindowSize();
  const screenWidth = size.width;
  const screenHeight = size.height;
  const [showCanvas, setShowCanvas] = useState(false);

  const handleClick = () => {
    setShowCanvas(true);
  };

  if (!screenWidth || screenWidth <= 0) {
    return null;
  } else {
    return (
      <div
        style={{
          position: "absolute",
          bottom: screenHeight / 10,
          left: screenWidth / 3.15,
          width: screenWidth / 10,
        }}
      >
        <ProjectItem
          alt="Berliner Photoautomat"
          src="/images/city-sketch/photobooth.png"
          width={screenWidth}
          height={screenHeight}
        >
          <div
            style={{
              position: "absolute",
              bottom: screenWidth / 10,
              left: screenWidth / 14,
              width: screenWidth / 3,
            }}
          >
            <button
              onClick={handleClick}
              className="bg-blossom focus:outline-none focus:ring focus:border-r-slate-grey text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 transform hover:scale-105"
            >
              3, 2, 1...
            </button>
          </div>
        </ProjectItem>
        {showCanvas && (
          <div style={{ position: "absolute", top: -screenHeight / 2 }}>
            <P5Sketch onClose={() => setShowCanvas(false)} />
          </div>
        )}
      </div>
    );
  }
};

export default Photoautomat;

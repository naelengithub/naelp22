import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ProjectItem } from "../home/featArchitecture/details/desktop/ProjectItem";
import Image from "next/image";

export const BroadwayChambers = () => {
  const size = useWindowSize();
  const screenWidth = size.width;
  const screenHeight = size.height;

  if (!screenWidth || screenWidth <= 0) {
    return null;
  } else {
    return (
      <div
        style={{
          position: "absolute",
          bottom: screenHeight / 10,
          left: screenWidth / 10,
          width: screenWidth / 4.5,
        }}
      >
        <ProjectItem
          alt="Sketch of an imaginary city"
          src="/images/city-sketch/broadway-sketch.png"
          width={screenWidth}
          height={screenHeight}
        >
          <div
            style={{
              position: "absolute",
              bottom: -screenWidth / 15,
              left: -screenWidth / 20,
              width: screenWidth / 3,
            }}
          >
            <Image
              src="/images/city-sketch/broadway-chambers.jpeg"
              alt="Broadway Chambers"
              width={800}
              height={1200}
              layout="responsive"
            />
          </div>
        </ProjectItem>
      </div>
    );
  }
};

export default BroadwayChambers;

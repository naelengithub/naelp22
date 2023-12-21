import { useWindowSize } from "../src/hooks/useWindowSize";
import { ProjectItem } from "../src/components/home/featArchitecture/details/desktop/ProjectItem";
import Image from "next/image";
import Head from "next/head";

export default function Home() {
  const size = useWindowSize();
  const screenWidth = size.width;
  const screenHeight = size.height;

  if (!screenWidth || screenWidth <= 0) {
    return null;
  } else {
    return (
      <div className="bg-floral-white min-h-screen flex items-center relative overflow-x-auto">
        <Head>
          <title>Walkin&apos; around</title>
        </Head>
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
        <div
          style={{
            position: "absolute",
            bottom: screenHeight / 10,
            left: screenWidth / 25,
            width: screenWidth,
          }}
        >
          <Image
            src="/images/city-sketch/earth-line.png"
            alt="Soil"
            width={800}
            height={1200}
            layout="responsive"
          />
        </div>
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
              <button className="bg-blossom focus:outline-none focus:ring focus:border-r-slate-grey text-white font-bold py-2 px-4 rounded-md shadow-md transition duration-300 transform hover:scale-105">
                3, 2, 1...
              </button>
            </div>
          </ProjectItem>
        </div>
        <p className="absolute bottom-0 right-0 text-right m-4">
          Designed & developed with &hearts; in NYC
          <br />© Ana Elisa 2023
        </p>
      </div>
    );
  }
}

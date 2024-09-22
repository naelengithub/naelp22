import { useWindowSize } from "../src/hooks/useWindowSize";
import { ProjectItem } from "../src/components/home/featArchitecture/details/desktop/ProjectItem";
import Image from "next/image";
import Head from "next/head";
import BroadwayChambers from "../src/components/city-vibes/broadway-chambers";
import Photoautomat from "../src/components/city-vibes/photoautomat";
import Clock from "../src/components/common/clock";

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
        <BroadwayChambers />
        <Photoautomat />
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
        <div className="absolute bottom-0">
          <Clock startFrom={25200} />
        </div>
        <p className="absolute bottom-0 right-0 text-right m-4">
          Designed & developed with &hearts; in NYC
          <br />© Ana Elisa 2023
        </p>
      </div>
    );
  }
}

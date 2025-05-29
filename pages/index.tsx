import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { timeState } from "../src/components/games/rockPaperScissors/atoms";
import DynamicShadowText from "../src/components/DynamicShadowText";

// Import P5Sketch dynamically
const DynamicP5Sketch = dynamic(
  () => import("../src/components/canvases/bubbles"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [timer, setTimer] = useState(null);
  const [time, setTime] = useRecoilState(timeState);

  const startTimer = () => {
    setTimer(0);
  };

  useEffect(() => {
    let interval;
    if (timer !== null) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
        setTime((prevTime) => prevTime + 10); // Update the global time state
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer, setTime]);

  return (
    <div className="min-h-screen flex relative flex-col items-center justify-center overflow-hidden">
      <Head>
        <title>
          Ana Elisa Vargas | Designing Digital Spaces for Small Brands That
          Dream Big
        </title>
        <meta
          name="description"
          content="Digital studio founded by Ana Elisa Vargas. Building intentional brands, efficient websites, and clear digital strategies for small businesses — one purposeful project at a time."
        />
        <meta
          property="og:title"
          content="Ana Elisa Vargas | Intentional Design & Digital Autonomy"
        />
        <meta
          property="og:description"
          content="Explore the work of Ana Elisa Vargas: branding, web design and development, and digital strategy for small businesses. A studio focused on clarity, autonomy, and creative growth."
        />
        <meta property="og:url" content="https://anaelisavargas.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/im1.jpg" />
      </Head>
      <div className="text-center gap-4 mx-4 z-[100]">
        <h1>ana elisa</h1>
        <div className="flex flex-col gap-2">
          <Link href="/about">about</Link>
          <Link href="/portfolio">works</Link>
          <Link href="https://other-side.net" target="_blank">
            otherside
          </Link>
          <Link href="/wishlist">adquisitions</Link>
        </div>
        <h3 className="mt-6">coming soon...</h3>
        <div className="flex flex-col">
          <Link href="https://eina.info" target="_blank">
            eina
          </Link>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-screen h-screen z-0">
        <DynamicP5Sketch />
      </div>
    </div>
  );
}

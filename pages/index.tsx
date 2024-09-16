import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { timeState } from "../src/components/games/rockPaperScissors/atoms";

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
    <div className="min-h-screen flex relative flex-col items-center justify-center">
      <Head>
        <title>Ana Elisa Vargas</title>
      </Head>
      <div className="pt-8 text-center gap-4 mx-4 z-[100]">
        <h2>Welcome</h2>
        <div className="flex flex-col">
          <Link href="/takeawalkwithme">Start</Link>
          <Link href="/portfolio">Portfolio</Link>
        </div>
      </div>
      <div className="absolute w-full h-full">
        {/* Render the DynamicP5Sketch component */}
        <DynamicP5Sketch />
      </div>
    </div>
  );
}

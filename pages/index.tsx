import { Footer } from "../src/components/footer/footer";
import { NavBar } from "../src/components/navbar/navbar";
import Head from "next/head";
import dynamic from "next/dynamic";

// Import P5Sketch dynamically
const DynamicP5Sketch = dynamic(() => import("../src/components/p5-sketch"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen flex relative flex-col">
      <Head>
        <title>Ana Elisa Vargas</title>
      </Head>
      {/* <NavBar /> */}
      <div className="pt-8 text-center text-charcoal gap-4 z-[100]">
        <h2>Stay tuned...</h2>
        <h3>
          This site is under renovation <br />
          Feb 2024
        </h3>
      </div>
      <div className="absolute">
        {/* Render the DynamicP5Sketch component */}
        <DynamicP5Sketch />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

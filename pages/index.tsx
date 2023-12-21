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
      <div className="pt-36 text-center gap-4 mx-4 z-[100]">
        <h2>Stay Tuned...</h2>
        <p>
          This site is being renovated.
          <br />
          Check out the experience in 2024!
        </p>
      </div>
      <div className="absolute w-full h-full">
        {/* Render the DynamicP5Sketch component */}
        <DynamicP5Sketch />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

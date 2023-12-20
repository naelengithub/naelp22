import { Footer } from "../src/components/footer/footer";
import { NavBar } from "../src/components/navbar/navbar";
import Head from "next/head";
import P5Sketch from "../src/components/p5-sketch";

export default function Home() {
  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">
      <Head>
        <title>Ana Elisa Vargas</title>
      </Head>
      {/* <NavBar /> */}
      <div className="pt-8 text-center gap-4">
        <h2>Stay tuned...</h2>
        <h3>
          This site is under renovation <br />
          Feb 2024
        </h3>
      </div>
      <div className="sketch">{/* <P5Sketch /> */}</div>
      {/* <Footer /> */}
    </div>
  );
}

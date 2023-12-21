import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";

// Import P5Sketch dynamically
const DynamicP5Sketch = dynamic(() => import("../src/components/p5-sketch"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen flex relative flex-col items-center justify-center">
      <Head>
        <title>Ana Elisa Vargas</title>
      </Head>
      {/* <NavBar /> */}
      <div className="pt-8 text-center gap-4 mx-4 z-[100]">
        <h2>Welcome</h2>
        <Link href="/takeawalkwithme">Start</Link>
      </div>
      <div className="absolute w-full h-full">
        {/* Render the DynamicP5Sketch component */}
        <DynamicP5Sketch />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

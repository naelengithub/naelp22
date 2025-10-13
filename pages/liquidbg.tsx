import PerlinCanvas from "../src/components/canvases/PerlinCanvas";

import ScrollTobleroneText from "../src/components/SlidingTextSection";

export default function HomePage() {
  return (
    <>
      <main className="relative h-screen">
        <PerlinCanvas />
        <div className="absolute bottom-0 w-full px-6 text-right font-mono">
          <span className="text-[13vw]">anae studio</span>
        </div>
      </main>
    </>
  );
}

import Link from "next/link";
import PerlinCanvas from "../src/components/canvases/PerlinCanvas";
import SmudgeText from "../src/components/canvases/SmudgeText";

export default function HomePage() {
  return (
    <>
      <main className="relative h-screen">
        <PerlinCanvas />
        <SmudgeText />
        <div className="absolute bottom-0 w-full px-6 text-right font-mono">
          <span className="text-[13vw]">anae studio</span>
        </div>
      </main>
    </>
  );
}

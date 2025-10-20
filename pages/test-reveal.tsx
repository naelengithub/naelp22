import Link from "next/link";

export default function TestReveal() {
  return (
    <main className="relative min-h-screen text-white">
      {/* 🖤 1️⃣ Footer layer (BEHIND everything) */}
      <div className="fixed inset-0 bg-gradient-to-b from-red-500  to-black via-black flex items-center justify-center text-4xl z-0">
        <Link
          href="https://google.com"
          target="_blank"
          className="absolute bottom-10"
        >
          Footer revealed ✨
        </Link>
      </div>

      {/* ❤️ 2️⃣ Scrollable front section */}
      <section className="relative z-10 h-[300vh]">
        {/* sticky content that reveals footer */}
        <div className="sticky top-0 h-screen bg-red-500 flex items-center justify-center text-5xl font-bold rounded-xl">
          Front Section
        </div>

        {/* 👇 spacer that moves it fully off screen so footer is clickable */}
        <div className="h-[200px]" />
      </section>
      <div className="h-[200px]"></div>
    </main>
  );
}

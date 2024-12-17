import { useEffect, useState } from "react";
import { Wishlist } from "../src/components/common/wishlist/Wishlist";
import Head from "next/head";
import Link from "next/link";
import ProtectedPage from "../src/components/ProtectedPage";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const correctCodes = ["alohomora"];

  useEffect(() => {
    // Check the screen width to determine if it's mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ProtectedPage correctCodes={correctCodes}>
      <div className="bg-floral-white bg-cover bg-center min-h-screen">
        <Head>
          <title>merry xmas</title>
        </Head>
        {isMobile ? (
          <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-center text-white text-lg">
              This feature is currently only available on desktop.
            </p>
            <Link
              className="border-2 border-dotted border-blossom p-1 px-3 m-2"
              href="/"
            >
              <span>Back to home</span>
            </Link>
          </div>
        ) : (
          <Wishlist />
        )}
      </div>
    </ProtectedPage>
  );
}

import * as React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import Link from "next/link";
import InkCrystalShader from "../canvases/InkCrystalShader2Dark";
import InkCrystalShader3 from "../canvases/InkCrystalShader3Dark";

export interface FooterProps {
  className?: string;
}

/**
 * @name Footer
 * @description Footer component.
 */
export const Footer = (props: FooterProps) => {
  const { className } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;
  const isMobile = screenWidthSize < 768;
  console.log(JSON.stringify(screenWidthSize));

  return (
    <div className="bg-charcoal flex flex-col justify-center text-floral-white items-end w-full p-6 border-t mt-24 md:mt-32">
      <div className="flex flex-col md:flex-row justify-between w-full">
        <div className="md:mb-20">
          <Link href="mailto:hello@anaelisavargas.com" target="_blank">
            {/* <p className="text-[20vw] sm:text-[15vw] md:text-[10vw]">
              Let&apos;s Talk.
            </p> */}
            {isMobile ? <InkCrystalShader3 /> : <InkCrystalShader />}
          </Link>
          <span>
            Reach out if you&apos;d like to chat, collaborate, or grab coffee.
          </span>
        </div>
        <div className="flex flex-col gap-2 py-12 text-right">
          <Link href="/">Index</Link>
          <Link href="mailto:hello@anaelisavargas.com" target="_blank">
            Contact
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/anaelisavargas"
          >
            Linked In
          </Link>
          <Link target="_blank" href="https://other-side.net">
            Otherside
          </Link>
          <Link target="_blank" href="https://other-side.net/the-others">
            The Others
          </Link>
        </div>
      </div>
      <div className="flex justify-between font-thin w-full">
        <p className="md:hidden">
          Made w &hearts; in
          <br />
          Barcelona © 2025
        </p>
        <p className="hidden md:block">Made w &hearts; in Barcelona © 2025</p>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          scroll to top &uarr;
        </button>
      </div>
    </div>
  );
};

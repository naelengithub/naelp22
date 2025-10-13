import * as React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import Link from "next/link";

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
  console.log(JSON.stringify(screenWidthSize));

  return (
    <div className="flex flex-col justify-center w-full p-6 border-t mt-24 md:mt-32">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:mb-20">
          <Link href="mailto:hello@anaelisavargas.com" target="_blank">
            <p className="text-[20vw] sm:text-[15vw] md:text-[10vw]">
              Let&apos;s Talk.
            </p>
          </Link>
          <span>
            Feel free to reach out if you&apos;d like to chat, collaborate, or
            grab coffee.
          </span>
        </div>
        <div className="flex flex-col gap-2 py-12 text-right">
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
      <div className="flex justify-between font-thin">
        <p className="text-slate-grey md:hidden">
          Made w &hearts; in
          <br />
          Barcelona © 2025
        </p>
        <p className="text-slate-grey hidden md:block">
          Made w &hearts; in Barcelona © 2025
        </p>
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

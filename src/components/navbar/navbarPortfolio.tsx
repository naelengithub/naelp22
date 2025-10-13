import * as React from "react";
import Link from "next/link";
import Clocks from "../common/Clocks";

export interface NavBarPortfolioProps {
  className?: string;
}

/**
 * @name NavBarPortfolio
 * @description Portfolio page navbarPortfolio.
 */
export const NavBarPortfolio = (props: NavBarPortfolioProps) => {
  const { className } = props;

  return (
    <nav className="fixed flex justify-end p-6 w-full font-extrabold">
      <div className="text-right text-white mix-blend-difference">
        <span>
          <Link href="/">Index</Link>
        </span>
        <p>
          <Link href="mailto:hello@anaelisavargas.com" target="_blank">
            Contact
          </Link>
          {/* /
        <Link className="pl-2" href="">
          the old relic
        </Link> */}
        </p>
      </div>
    </nav>
  );
};

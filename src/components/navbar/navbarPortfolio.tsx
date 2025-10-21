import * as React from "react";
import Link from "next/link";

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
    <nav className="fixed flex justify-end p-6 w-full z-50">
      <ul className="list-none text-right text-slate-grey mix-blend-difference space-y-1">
        <li>
          <Link href="/portfolio">Work</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="mailto:hello@anaelisavargas.com" target="_blank">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

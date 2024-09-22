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
    <nav className="p-6 text-right">
      <span>
        <Link href="/">anaelisa</Link>
      </span>
      <p>
        <Link className="pr-2" href="/portfolio" target="_blank">
          thisisanaelisa@gmail.com
        </Link>{" "}
        /{" "}
        <Link
          className="pl-2"
          href="https://www.linkedin.com/in/anaelisavargas/"
        >
          linked.in
        </Link>
        {/* /{" "}
        <Link className="pl-2" href="">
          the old relic
        </Link> */}
      </p>
      <span>© 2024</span>
    </nav>
  );
};

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
      <div>anaelisa</div>
      <div>
        <Link className="pr-2" href="/portfolio">
          thisisanaelisa@gmail.com
        </Link>{" "}
        /{" "}
        <Link
          className="pr-2 pl-2"
          href="https://www.linkedin.com/in/anaelisavargas/"
        >
          linked.in
        </Link>{" "}
        /{" "}
        <Link className="pl-2" href="">
          the old relic
        </Link>
      </div>
      <div className="pt-2">© 2024</div>
    </nav>
  );
};

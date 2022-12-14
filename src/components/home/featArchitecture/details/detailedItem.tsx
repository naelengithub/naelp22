import * as React from "react";
import Link from "next/link";
import { NavBar } from "../../../navbar/navbar";
import { Footer } from "../../../footer/footer";

export interface DetailedItemProps {
  className?: string;
  children: React.ReactNode;
  title: string;
  date: string;
  location: string;
}

/**
 * @name DetailedItem
 * @description FAQs feature component.
 */
export const DetailedItem = (props: DetailedItemProps) => {
  const { className, children, title, date, location } = props;

  return (
    <div>
      <NavBar />
      <div style={{ marginTop: "60px" }}>
        <div style={{ padding: "1rem", paddingTop: 0 }}>
          <h1>{title}</h1>
          <span>
            __{date}_{location}
          </span>
        </div>
        <div>{children}</div>
        <div style={{ backgroundColor: "#B38BFA" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "2rem",
            }}
          >
            <Link href="/about">about</Link>
            <Link href="/">home</Link>
            <Link href="/contact">contact</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

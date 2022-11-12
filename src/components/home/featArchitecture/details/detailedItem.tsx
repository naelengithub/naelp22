import * as React from "react";
import Link from "next/link";

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
      <div style={{ padding: "1rem" }}>
        <h1>{title}</h1>
        <span>
          __{date}_{location}
        </span>
      </div>
      <div>{children}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <span>nael</span>
        <span>© 2022</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link href="/about">About</Link>
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

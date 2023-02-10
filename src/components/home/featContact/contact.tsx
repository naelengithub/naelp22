import * as React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Link from "next/link";
import Image from "next/image";

export interface ContactProps {
  className?: string;
}

/**
 * @name Contact
 * @description FAQs feature component.
 */
export const Contact = (props: ContactProps) => {
  const { className } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;

  return (
    <div>
      <div
        style={{
          backgroundColor: "#C9D6FF",
          display: "flex",
          height: screenWidthSize / 1.8,
          position: "relative",
        }}
      >
        <h1
          style={{
            fontSize: screenWidthSize / 5.75,
            height: screenWidthSize / 5.75,
          }}
        >
          contact
        </h1>
        <div
          style={{
            position: "absolute",
            top: screenWidthSize / 3.3,
            left: screenWidthSize / 100,
          }}
        >
          <h1
            style={{
              margin: "0",
              fontSize: screenWidthSize / 13,
            }}
          >
            anaelisa@mailmasker.com
          </h1>
          <p
            style={{
              margin: "0",
              fontSize: screenWidthSize / 40,
            }}
          >
            Feel free to reach out if you&apos;d like to chat, collaborate, or
            grab coffee.
          </p>
          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <Link href="https://www.linkedin.com/in/ana-elisa-vargas-1bb436145/">
              <Image
                src="/logo.linkedin.png"
                alt="Linked In profile"
                width="40"
                height="40"
              />
            </Link>
            <Link href="https://github.com/naelengithub">
              <Image
                src="/logo.github.png"
                alt="Github profile"
                width="40"
                height="40"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

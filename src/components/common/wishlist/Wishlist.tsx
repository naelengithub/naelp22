import * as React from "react";

import { useWindowSize } from "../../../hooks/useWindowSize";
import { Gifts } from "./data";

import { MiddleSpacedRight } from "./MiddleSpacedRight";
import { Gift } from "./Gift";
import { TopToRight } from "./TopToRight";
import { MiddleToRight } from "./MiddleToRight";
import { BottomToLeft } from "./BottomToLeft";
import { MiddleToLeft } from "./MiddleToLeft";
import styles from "./wishlist.module.css";
import Head from "next/head";

export interface WishlistProps {
  className?: string;
}

/**
 * @name Wishlist
 * @description Arq feature component.
 */
export const Wishlist = (props: WishlistProps) => {
  const { className } = props;

  // Handlers
  const size = useWindowSize();
  const screenWidthSize = size.width;
  console.log(JSON.stringify(screenWidthSize));

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div className={styles.container}>
        <Head>
          <title>merry xmas</title>
        </Head>
        <div
          style={{
            paddingTop: "3rem",
            height: screenWidthSize / 1.2,
          }}
        >
          <div style={{ backgroundColor: "tomato" }}>
            <div
              style={{
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: (screenWidthSize / 10) * 2,
                  left: (screenWidthSize / 10) * 2,
                  width: screenWidthSize / 10,
                }}
              >
                <div>
                  <Gift
                    alt="Book"
                    src="/Gifts/book.gif"
                    width={screenWidthSize / 14}
                    height={screenWidthSize / 22}
                  >
                    <div style={{}}>
                      <TopToRight
                        author={Gifts[0].author}
                        goodFor={Gifts[0].goodFor}
                        image={Gifts[0].image}
                        title={Gifts[0].title}
                      />
                    </div>
                  </Gift>
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: screenWidthSize / 10,
                  left: (screenWidthSize / 10) * 6,
                  width: screenWidthSize / 10,
                  height: (screenWidthSize / 10) * 0.5,
                  margin: "0",
                }}
              >
                <Gift
                  alt={Gifts[2].title}
                  src="/Gifts/vinyl3.gif"
                  width={screenWidthSize / 12}
                  height={screenWidthSize / 20}
                >
                  <BottomToLeft
                    author={Gifts[2].author}
                    goodFor={Gifts[2].goodFor}
                    image={Gifts[2].image}
                    title={Gifts[2].title}
                  />
                </Gift>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: (screenWidthSize / 10) * 3.5,
                  left: (screenWidthSize / 10) * 3,
                  width: screenWidthSize / 10,
                }}
              >
                <Gift
                  alt={Gifts[3].title}
                  src="/Gifts/negacion.jpg"
                  width={screenWidthSize / 12}
                  height={screenWidthSize / 20}
                >
                  <MiddleToRight
                    author={Gifts[3].author}
                    goodFor={Gifts[3].goodFor}
                    image={Gifts[3].image}
                    title={Gifts[3].title}
                  />
                </Gift>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: (screenWidthSize / 10) * 4.5,
                  left: screenWidthSize / 10,
                  width: screenWidthSize / 10,
                }}
              >
                <Gift
                  alt="Matlaltik project."
                  src="/images/001/pokemon.webp"
                  width={screenWidthSize / 12}
                  height={screenWidthSize / 20}
                >
                  <MiddleSpacedRight
                    author={Gifts[4].author}
                    goodFor={Gifts[4].goodFor}
                    image={Gifts[4].image}
                    title={Gifts[4].title}
                  />
                </Gift>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: (screenWidthSize / 10) * 3,
                  left: (screenWidthSize / 10) * 8,
                  width: screenWidthSize / 10,
                }}
              >
                <Gift
                  alt="Boots"
                  src="/Gifts/nancy.webp"
                  width={screenWidthSize / 10}
                  height={screenWidthSize / 20}
                >
                  <MiddleToLeft
                    goodFor={Gifts[1].goodFor}
                    title={Gifts[1].title}
                    image={Gifts[1].image}
                    className="bg-floral-white"
                  />
                </Gift>
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: (screenWidthSize / 10) * 5,
                right: 25,
              }}
            >
              <h1
                style={{
                  margin: "0",
                  fontSize: screenWidthSize / 40,
                  position: "absolute",
                  right: 0,
                  zIndex: 1,
                }}
              >
                [but tbh just]
              </h1>
              <h1
                style={{
                  margin: "0",
                  fontSize: screenWidthSize / 5.75,
                }}
              >
                a good laugh
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

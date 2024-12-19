import Image from "next/image";
import { useWindowSize } from "../src/hooks/useWindowSize";
import DynamicShadowText from "../src/components/DynamicShadowText";
import Link from "next/link";

export default function Contact() {
  const size = useWindowSize();
  const widthSize = size.width;

  return (
    <div
      style={{
        backgroundImage: "url('/images/bg2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <p className="p-4 text-right text-xs">
        made by urs truly, with &hearts; in Berlin © 2024
      </p>
      <div>
        <div className="block pt-80 w-1/4 p-4 min-w-[360px] md:m-auto">
          <div className="float-left w-48 mr-4">
            <Link href="/">
              <Image
                alt="Ana Elisa Vargas"
                src="/images/ss.png"
                width="300"
                height={300}
              />
            </Link>
          </div>
          <div className="mt-20 ml-28 mb-14">
            <p>
              <span className="text-4xl">
                <DynamicShadowText text="Hi." />
              </span>
              <span>
                I&apos;m Ana Elisa, a digital project designer and developer
                with a presence between Mexico City and Berlin.
              </span>
            </p>
            <p className="mt-4">
              With extensive freelance experience in web design and front-end
              development (Typescript, React, low/no-code platforms), I
              specialize in managing end-to-end client projects—from initial
              concept to the launch of{" "}
              <strong>
                fully functional, live websites and ecommerce stores
              </strong>
              . My approach is hands-on and comprehensive, ensuring digital
              experiences that are are both aesthetically compelling and highly
              functional.
            </p>
            <p className="mt-4">
              I believe creating tailored, scalable solutions empower small
              businesses to excel in the digital space, because businesses
              thrive when their digital strategies are customized to meet the
              unique needs of their target market.
            </p>
            <p className="mt-4">
              I tend to work with{" "}
              <strong>
                entrepreneurs seeking to digitalize their products/services{" "}
              </strong>
              and startups seeking scalable solutions to support their growth.
              Does that sound like you? Hit me up, I am always up to chatting
              about collaborations.
            </p>
            <p className="mt-4">
              Above all, I am driven by projects that inspire and motivate their
              creators, believing the most fulfilling work aligns with both
              business goals and a deeper sense of purpose or social impact.
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="p-4 w-full text-right text-base"
        >
          <DynamicShadowText text="scroll to top &uarr;" />
        </button>
      </div>
    </div>
  );
}

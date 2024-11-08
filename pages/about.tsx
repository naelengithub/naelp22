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
                <DynamicShadowText text="ana elisa" />
              </span>
              <span>
                is a seasoned project developer and designer with a presence in
                Berlin, Mexico City, and San Francisco. Although initially
                trained as an architect, she has successfully transitioned into
                leading a diverse range of projects, including the production of
                a short film, alongside her extensive work in web design and
                development.
              </span>
            </p>
            <p className="mt-4">
              In addition to her freelance expertise in design and Front-End
              development{" "}
              <strong>(Typescript, React, low/no-code platforms)</strong>, she
              excels in operating end-to-end client projects. From the
              conceptualization phase to delivering fully functional, live
              websites, she offers a comprehensive, hands-on approach that
              ensures every project is executed to the highest standard. This
              website serves as a prime example of her ability to design,
              develop, and launch integrated digital experiences that are both
              aesthetically compelling and highly functional.
            </p>
            <p className="mt-4">
              With experience in designing complex data flows, automation, and
              system integration using API calls and webhooks, she provides
              tailored, scalable solutions that enable businesses to excel in
              the digital space. Her expertise is especially valuable for
              <strong>startups seeking scalable solutions</strong> to support
              their growth and for entrepreneurs seeking to digitalize their
              products and/or services.
            </p>
            <p className="mt-4">
              Ana Elisa is driven by projects that inspire and motivate their
              teams, believing the most fulfilling work aligns with both
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

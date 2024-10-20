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
      <p className="p-4 text-right">
        designed and built by urs truly, with &hearts; in Berlin © 2024
      </p>
      <div>
        <div className="block pt-80 w-1/4 p-4 min-w-[360px] md:m-auto">
          <div className="float-left w-48 mr-4">
            <Link href="/">
              <Image
                alt="Ana Elisa Vargas"
                src="/images/ss.frame.png"
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
                Berlin, Mexico City, and San Francisco. Although originally
                trained as an architect, she has transitioned into operating a
                diverse range of projects.
              </span>
            </p>
            <p className="mt-4">
              In addition to her freelance work in graphic design and full-stack
              development (typescript and low/no-code), she excels at overseeing
              end-to-end client projects. From initial sketches to delivering
              fully functional, hosted websites, she offers a comprehensive full
              service.
            </p>
            <p className="mt-4">
              With experience in designing data flows, automating processes, and
              integrating systems through API calls and webhooks, she provides
              tailored, robust solutions that help businesses thrive in the
              digital landscape. Her expertise is especially valuable for
              startups needing scalable solutions as they grow, as well as
              entrepreneurs seeking to digitalize their products.
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

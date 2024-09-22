import Image from "next/image";
import { useWindowSize } from "../src/hooks/useWindowSize";

export default function Contact() {
  const size = useWindowSize();
  const widthSize = size.width;

  return (
    <div
      style={{
        backgroundImage: "url('/images/test.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <p className="p-4 text-right">
        designed and built by urs truly, with &hearts; in Berlin © 2024
      </p>
      <div>
        <div className="block w-1/4 pt-80 p-4 min-w-[360px md:m-auto">
          <div className="float-left w-48 mr-4">
            <Image
              alt="Ana Elisa Vargas"
              src="/images/ss.frame.png"
              width="300"
              height={300}
            />
          </div>
          <div className="mt-20 ml-28">
            <p>
              She is a seasoned project lead with a presence in Berlin, Mexico
              City, and San Francisco. Although originally trained as an
              architect, she has transitioned into managing a diverse range of
              projects. In addition to her freelance work in graphic design and
              full-stack development, she excels at overseeing end-to-end client
              projects. From initial sketches to delivering fully functional,
              hosted websites, she offers a comprehensive service. Her expertise
              is especially valuable for entrepreneurs seeking to digitalize
              their products, as well as small startups needing scalable
              solutions as they grow. With experience in designing data flows,
              automating processes, and integrating systems through API calls
              and webhooks, she provides tailored, robust solutions that help
              businesses thrive in the digital landscape.
            </p>
          </div>
        </div>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="p-4 w-full text-right"
        >
          scroll to top &uarr;
        </button>
      </div>
    </div>
  );
}

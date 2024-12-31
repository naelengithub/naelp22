import Image from "next/image";
import { useWindowSize } from "../src/hooks/useWindowSize";
import DynamicShadowText from "../src/components/DynamicShadowText";
import Link from "next/link";
import { jobExperience } from "../src/components/web/experience";
import { education } from "../src/components/web/education";

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
        <div className="block pt-80 w-1/3 p-4 min-w-[360px] md:m-auto">
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
                I&apos;m Ana Elisa, a hands-on digital project designer and
                developer with a proven track record of 4+years, specializing in
                managing and operating end-to-end client projects—from initial
                concept to the launch of fully functional, live websites and
                ecommerce stores.
              </span>
              <span>
                &nbsp;My approach ensures digital experiences that are are both
                aesthetically compelling and highly functional.
              </span>
            </p>
            <p className="mt-4">
              I’m a self-starter with a knack for adapting and problem-solving,
              honed through my experiences as a third-culture kid. I design and
              develop digital products that not only scale businesses but also
              help transmit their message and evoke the right emotions. My role
              spans across operations, from setting up new projects and
              responding to briefs and RFPs to co-creating pitches, treatments,
              and proposals. I handle the entire project lifecycle, from design
              and development to scoping, quoting, and planning, ensuring
              everything runs smoothly, is profitable, and meets deadlines.
            </p>
            <p className="mt-4">
              I mostly work with entrepreneurs digitizing their products and
              startups scaling for growth (though I somehow ended up producing a
              short film this summer—who knew?). Does that sound like you? Hit
              me up, I am always up to chatting about collaborations.
            </p>
            <p className="mt-4">
              Side note - I am driven by projects that inspire and motivate
              their creators, believing the most fulfilling work aligns with
              both business goals and a deeper sense of purpose or social
              impact.
            </p>
          </div>
        </div>
        <section className="flex flex-col p-4 min-w-[360px] m-auto w-2/3 md:w-5/6">
          <span className="text-4xl md:ml-52">
            <DynamicShadowText text="Experience" />
          </span>
          {jobExperience.map((job, index) => (
            <div key={index} className="flex justify-center gap-6 mt-12">
              <div className="flex-col w-36 md:w-48">
                <h3>
                  {job.title} - {job.company}, {job.location}
                </h3>
                <p>{job.year}</p>
              </div>
              <p className="w-1/2 md:w-1/3">{job.description}</p>
            </div>
          ))}
        </section>
        <section className="flex flex-col p-4 min-w-[360px] mx-auto mt-20 mb-40 w-2/3 md:w-5/6">
          <span className="text-4xl md:ml-52">
            <DynamicShadowText text="Education" />
          </span>
          {education.map((school, index) => (
            <div key={index} className="flex justify-center gap-6 mt-12">
              <div className="flex-col w-36 md:w-48">
                <h3>{school.title}</h3>
                <p>{school.year}</p>
              </div>
              <p className="w-1/2 md:w-1/3">{school.description}</p>
            </div>
          ))}
        </section>
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

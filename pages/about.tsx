import { useWindowSize } from "../src/hooks/useWindowSize";
import DynamicShadowText from "../src/components/DynamicShadowText";
import { jobExperience } from "../src/components/web/experience";
import { education } from "../src/components/web/education";
import { NavBarPortfolio } from "../src/components/navbar/navbarPortfolio";
import Clocks from "../src/components/common/Clocks";
import { Footer } from "../src/components/footer/footer";

export default function Contact() {
  const size = useWindowSize();
  const widthSize = size.width;

  return (
    <div className="bg-floral-white">
      <NavBarPortfolio />
      <Clocks />

      <div>
        <div className="block p-4 px-12 m-auto md:w-1/2 lg:w-2/3 md:pt-40">
          <div className="flex flex-col gap-6 text-center">
            <p>Independent designer & creative developer</p>
            <p className="text-2xl md:text-5xl lg:text-7xl">
              Exploring the intersections of visual design, motion, and
              technology. I translate ideas into immersive and emotionally
              resonant digital experiences.
            </p>
          </div>
        </div>
        {/* <section>
          <ProjectsShowcase />
        </section> */}
        <section className="flex flex-col md:flex-row text-sm items-start w-full gap-24 pt-40 md:pl-60">
          {/* <Image
            src="/images/ss.png"
            alt="anaelisa in blue"
            width={300}
            height="300"
            className="pt-28"
          /> */}
          <div className="flex flex-col p-4">
            <span className="text-4xl">
              <DynamicShadowText text="Experience" />
            </span>
            {jobExperience.map((job, index) => (
              <div key={index} className="flex gap-6 mt-12">
                <div className="flex-col">
                  <span className="text-slate-grey">
                    {job.company && `${job.company}/`}
                    {job.year}
                  </span>
                  <p className="text-xl">{job.title}</p>
                  <span className="text-slate-grey">{job.location}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col p-4">
            <span className="text-4xl">
              <DynamicShadowText text="Education" />
            </span>
            {education.map((school, index) => (
              <div key={index} className="flex gap-6 mt-12">
                <div className="flex-col">
                  <span className="text-slate-grey">
                    {school.sede && `${school.sede}/`}
                    {school.year}
                  </span>
                  <p className="text-xl">{school.title}</p>
                  <p className="text-slate-grey max-w-lg text-sm">
                    {school.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

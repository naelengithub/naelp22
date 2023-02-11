import { Footer } from "../src/components/footer/footer";
import { NavBar } from "../src/components/navbar/navbar";
import { FeatArch } from "../src/components/home/featArchitecture/Overview/overview";
import { FeatDesign } from "../src/components/home/featDesign/design";
import { FeatSoftware } from "../src/components/home/featSoftware/FeatSoftware";
import { Contact } from "../src/components/home/featContact/contact";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ana Elisa Vargas</title>
      </Head>
      <NavBar />
      <FeatArch />
      <FeatDesign />
      <FeatSoftware />
      <Contact />
      <Footer />
    </div>
  );
}

import { NavBar } from "../src/components/navbar/navbar";
import { FeatArch } from "../src/components/home/featArchitecture/Overview/overview";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>A Past Life</title>
      </Head>
      <NavBar />
      <FeatArch />
    </div>
  );
}

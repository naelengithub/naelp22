import Head from "next/head";
import { RecoilRoot } from "recoil";
import { RPS } from "../src/components/games/rockPaperScissors/RockPaperScissors";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rock Paper Scissors</title>
      </Head>
      <main>
        <RecoilRoot>
          <RPS />
        </RecoilRoot>
      </main>
    </>
  );
}

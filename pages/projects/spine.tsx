import * as React from "react";
import Head from "next/head";
import { DetailedSpine } from "../../src/components/home/featArchitecture/details/mobile/detailedSpine";

export interface IndexProps {}

/**
 * @name Index
 * @description Simple about page
 */
export const Index = (_props: IndexProps) => {
  return (
    <>
      <Head>
        <title>NAEL | Spine </title>
      </Head>

      <main>
        <DetailedSpine />
      </main>
    </>
  );
};

export default Index;

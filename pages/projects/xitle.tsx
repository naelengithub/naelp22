import * as React from "react";
import Head from "next/head";
import { DetailedXitle } from "../../src/components/home/featArchitecture/details/mobile/detailedXitle";

export interface IndexProps {}

/**
 * @name Index
 * @description Simple about page
 */
export const Index = (_props: IndexProps) => {
  return (
    <>
      <Head>
        <title>NAEL | Xitle </title>
      </Head>

      <main>
        <DetailedXitle />
      </main>
    </>
  );
};

export default Index;

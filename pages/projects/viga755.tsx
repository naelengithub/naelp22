import * as React from "react";
import Head from "next/head";
import { DetailedViga } from "../../src/components/home/featArchitecture/details/detailedViga";

export interface IndexProps {}

/**
 * @name Index
 * @description Simple about page
 */
export const Index = (_props: IndexProps) => {
  return (
    <>
      <Head>
        <title>NAEL | Viga755 </title>
      </Head>

      <main>
        <DetailedViga />
      </main>
    </>
  );
};

export default Index;

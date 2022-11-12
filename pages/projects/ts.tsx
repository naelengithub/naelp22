import * as React from "react";
import Head from "next/head";
import { DetailedTs } from "../../src/components/home/featArchitecture/details/detailedTs";

export interface IndexProps {}

/**
 * @name Index
 * @description Simple about page
 */
export const Index = (_props: IndexProps) => {
  return (
    <>
      <Head>
        <title>NAEL | TS</title>
      </Head>

      <main>
        <DetailedTs />
      </main>
    </>
  );
};

export default Index;

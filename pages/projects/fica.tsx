import * as React from "react";
import Head from "next/head";
import { DetailedFica } from "../../src/components/home/featArchitecture/details/detailedFica";

export interface IndexProps {}

/**
 * @name Index
 * @description Simple about page
 */
export const Index = (_props: IndexProps) => {
  return (
    <>
      <Head>
        <title>NAEL | FICA</title>
      </Head>

      <main>
        <DetailedFica />
      </main>
    </>
  );
};

export default Index;

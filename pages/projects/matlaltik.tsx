import * as React from "react";
import Head from "next/head";
import { DetailedMatlaltik } from "../../src/components/home/featArchitecture/details/mobile/detailedMatlaltik";

export interface IndexProps {}

/**
 * @name Index
 * @description Simple about page
 */
export const Index = (_props: IndexProps) => {
  return (
    <>
      <Head>
        <title>NAEL | Matlaltik </title>
      </Head>

      <main>
        <DetailedMatlaltik />
      </main>
    </>
  );
};

export default Index;

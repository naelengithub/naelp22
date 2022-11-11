import * as React from "react";
import Head from "next/head";
import { DetailedEstuario } from "../../src/components/home/featArchitecture/details/detailedEstuario";

export interface IndexProps {}

/**
 * @name Index
 * @description Simple about page
 */
export const Index = (_props: IndexProps) => {
  return (
    <>
      <Head>
        <title>NAEL | Estuario </title>
      </Head>

      <main>
        <DetailedEstuario />
      </main>
    </>
  );
};

export default Index;

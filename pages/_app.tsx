import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon.png"
        />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Ana Elisa</title>
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;

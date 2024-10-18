import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        {/* You can also add larger icons or different formats */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon.png"
        />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Ana Elisa</title> {/* You can also set a custom title */}
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;

import { Wishlist } from "../src/components/common/wishlist/Wishlist";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-[url('/images/trippy-pink.jpg')] bg-cover bg-center">
      <Head>
        <title>merry xmas</title>
      </Head>
      <Wishlist />
    </div>
  );
}

import { Footer } from "../src/components/footer/footer";
import { NavBar } from "../src/components/navbar/navbar";
import { useWindowSize } from "../src/hooks/useWindowSize";
import { FeatArch } from "../src/components/home/featArchitecture/Overview/overview";

export default function Home() {
  const size = useWindowSize();
  const widthSize = size.width;
  console.log(JSON.stringify(widthSize));

  return (
    <div>
      <NavBar />
      <FeatArch />
      <Footer />
    </div>
  );
}

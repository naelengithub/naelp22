import { Footer } from "../src/components/footer/footer";
import { NavBar } from "../src/components/navbar/navbar";
import { useWindowSize } from "../src/hooks/useWindowSize";
import { FeatArch } from "../src/components/home/featArchitecture/Overview/overview";
import { FeatDesign } from "../src/components/home/featDesign/design";
import { FeatSoftware } from "../src/components/home/featSoftware/FeatSoftware";

export default function Home() {
  const size = useWindowSize();
  const widthSize = size.width;
  console.log(JSON.stringify(widthSize));

  return (
    <div>
      <NavBar />
      <FeatArch />
      <FeatDesign />
      <FeatSoftware />
      <Footer />
    </div>
  );
}

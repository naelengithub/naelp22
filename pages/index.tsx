import { Footer } from "../src/components/footer/footer";
import { FeatArchitecture } from "../src/components/home/featArchitecture/featArchitecture";
import { NavBar } from "../src/components/navbar/navbar";
import styles from "../styles/Home.module.css";
import { useWindowSize } from "../src/hooks/useWindowSize";
import { HomeGrid } from "../src/components/home/featArchitecture/homeGrid";
import { FeatArch } from "../src/components/home/featArchitecture/Overview/overview";

export default function Home() {
  const size = useWindowSize();
  const widthSize = size.width;
  console.log(JSON.stringify(widthSize));

  return (
    <div className={styles.container}>
      <NavBar />

      <FeatArch />
      <Footer />
    </div>
  );
}

import { FeatArchitecture } from "../src/components/home/featArchitecture/featArchitecture";
import { NavBar } from "../src/components/navbar/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <FeatArchitecture />
    </div>
  );
}

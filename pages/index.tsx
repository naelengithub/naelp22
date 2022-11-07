import { Header } from "../src/components/Header/Header";
import { FeatArchitecture } from "../src/components/home/Architecture/architecture";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <FeatArchitecture />
    </div>
  );
}

import { Collapsing } from "../src/components/common/collapsingComponent/collapsing";
import { Footer } from "../src/components/footer/footer";
import { NavBar } from "../src/components/navbar/navbar";
import { useWindowSize } from "../src/hooks/useWindowSize";

export default function Contact() {
  const size = useWindowSize();
  const widthSize = size.width;

  return (
    <div>
      <NavBar />
      <div style={{ margin: "4rem", width: widthSize / 3 }}>
        <h1>about me</h1>
        <div>
          <p>
            Hi! I&apos;m Ana Elisa (pronouns: she/her). Currently based in
            Berlin, I have strong interpersonal communication skills, develop
            creative strategic solutions, and work experience in different
            creative fields; a digital skincare company and two architecture
            firms.
          </p>
        </div>
        <Collapsing />
      </div>
      <Footer />
    </div>
  );
}

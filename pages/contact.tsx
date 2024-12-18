import { Footer } from "../src/components/footer/footer";
import { NavBar } from "../src/components/navbar/navbar";
import { useWindowSize } from "../src/hooks/useWindowSize";
import Link from "next/link";

export default function Contact() {
  const size = useWindowSize();
  const widthSize = size.width;

  return (
    <div>
      <NavBar />
      <div
        style={{
          marginTop: "10rem",
          marginLeft: widthSize / 2,
          marginBottom: "5rem",
          width: widthSize / 3.5,
          minWidth: "200px",
        }}
      >
        <h1>Contact</h1>
        <div></div>
        <p>
          Feel free to reach out in any way convenient to you if you&apos;d like
          to chat, collaborate, or grab coffee.
        </p>
        <form action="submit" style={{ marginBottom: "1rem" }}>
          <div
            style={{
              width: "100%",
              height: "1.5rem",
              border: ".1rem solid #B38BFA",
              borderRadius: "5px",
            }}
          >
            <input
              style={{ border: 0, width: "100%" }}
              placeholder="Name"
              type="text"
            />
          </div>
          <div
            style={{
              height: "7rem",
              border: ".1rem solid #B38BFA",
              borderRadius: "5px",
            }}
          >
            <input
              style={{ border: 0, width: "100%" }}
              placeholder="Message"
              type="text"
            />
          </div>
          <div
            style={{
              height: "1.5rem",
              width: "100%",
              backgroundColor: "#B38BFA",
              borderRadius: "5px",
            }}
          >
            <input
              style={{
                backgroundColor: "#B38BFA",
                border: 0,
              }}
              type="submit"
              value="Send"
            />
          </div>
        </form>
        <div>
          <div style={{ borderTop: "solid 1px #B38BFA" }}>
            <p>contact@anaelisavargas.com</p>
          </div>
          <div style={{ borderTop: "solid 1px #B38BFA" }}>
            <p>TG naelentransito</p>
          </div>
          <div
            style={{
              borderTop: "solid 1px #B38BFA",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link
              href="https://www.linkedin.com/in/ana-elisa-vargas-1bb436145/"
              style={{ marginTop: "1rem" }}
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.linkedin.com/in/ana-elisa-vargas-1bb436145/"
              style={{ marginTop: "1rem" }}
            >
              CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

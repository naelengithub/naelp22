import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ProtectedPage = ({ children }: { children: React.ReactNode }) => {
  const [accessCode, setAccessCode] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();
  type CorrectCode = "fauxfurcoat" | "alohomora";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const correctCodes: CorrectCode[] = ["fauxfurcoat", "alohomora"];

    if (correctCodes.includes(accessCode as CorrectCode)) {
      setIsAuthorized(true);
    } else {
      alert(
        "Curiosity killed the cat, will satisfaction bring it back? Try again."
      );
    }
  };

  if (isAuthorized) {
    return <>{children}</>;
  }
  return (
    <div className="relative">
      <div className="bg-floral-white flex h-screen w-screen items-center justify-center">
        <span className="absolute right-0 top-0 text-sm p-2">
          designed & gated by urs truly, with &hearts; in Berlin © 2024
        </span>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center text-lg"
        >
          <input
            type="password"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            placeholder="Enter access code"
            className="bg-floral-white text-center border-2 border-dotted border-blossom"
          />
          <button type="submit">Submit</button>
          <div className="mt-4 text-sm">
            <span>No luck?&nbsp;</span>
            <Link href="/">
              <span className="text-bonito-brown">Back to home</span>.
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProtectedPage;

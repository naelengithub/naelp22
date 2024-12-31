import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface ProtectedPageProps {
  correctCodes: string[]; // Array of correct codes passed from the parent
  children?: React.ReactNode;
}

const ProtectedPage = ({ children, correctCodes }: ProtectedPageProps) => {
  const [accessCode, setAccessCode] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (correctCodes.includes(accessCode)) {
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
        <span className="absolute bottom-0 left-0 text-xs p-2">
          made by urs truly, with &hearts;. Berlin © 2024
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

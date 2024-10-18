import { useState } from "react";
import { useRouter } from "next/router";

const ProtectedPage = ({ children }: { children: React.ReactNode }) => {
  const [accessCode, setAccessCode] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctCode = "fauxfurcoat";
    if (accessCode === correctCode) {
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
    <div className="bg-floral-white flex h-screen w-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="password"
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
          placeholder="Enter access code"
          className="bg-floral-white text-center border-2 border-dotted border-blossom"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProtectedPage;

import React, { useEffect, useState } from "react";

// Helper: returns a formatted local time string for a given time zone
function getTimeForZone(timeZone) {
  return new Date().toLocaleTimeString("en-GB", {
    timeZone,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Clocks() {
  const [timeBerlin, setTimeBerlin] = useState(getTimeForZone("Europe/Berlin"));
  const [timeNYC, setTimeNYC] = useState(getTimeForZone("America/New_York"));
  const [timeCDMX, setTimeCDMX] = useState(
    getTimeForZone("America/Mexico_City")
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeBerlin(getTimeForZone("Europe/Berlin"));
      setTimeNYC(getTimeForZone("America/New_York"));
      setTimeCDMX(getTimeForZone("America/Mexico_City"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-xs sm:text-base text-slate-grey font-light p-6">
      <p>Berlin / {timeBerlin}</p>
      <p>NYC / {timeNYC}</p>
      <p>CDMX / {timeCDMX}</p>
    </div>
  );
}

export default Clocks;

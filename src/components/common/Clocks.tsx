import React, { useEffect, useState } from "react";

// Helper: returns a formatted local time string for a given time zone
function getTimeForZone(timeZone) {
  return new Date().toLocaleTimeString("en-GB", {
    timeZone,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

function Clocks() {
  const [timeBerlin, setTimeBerlin] = useState(getTimeForZone("Europe/Berlin"));
  const [timeBarcelona, setTimeBarcelona] = useState(
    getTimeForZone("Europe/Madrid")
  );
  // Barcelona uses same zone as Madrid (Central European Time / Central European Summer Time)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeBerlin(getTimeForZone("Europe/Berlin"));
      setTimeBarcelona(getTimeForZone("Europe/Madrid"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-base text-slate-grey font-light p-6">
      <p>Berlin/{timeBerlin}</p>
      <p>Barcelona/{timeBarcelona}</p>
    </div>
  );
}

export default Clocks;

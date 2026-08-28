import { useEffect, useState } from "react";

function calc(target) {
  const diff = Math.max(0, target - Date.now());
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor(diff / 3600000) % 24,
    m: Math.floor(diff / 60000) % 60,
    s: Math.floor(diff / 1000) % 60,
  };
}

export default function Countdown() {
  const [target] = useState(() => Date.now() + ((2 * 24 + 6) * 60 + 5) * 60 * 1000 + 30 * 1000);
  const [t, setT] = useState(() => calc(target));

  useEffect(() => {
    const id = setInterval(() => setT(calc(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    ["Days", t.d],
    ["Hr", t.h],
    ["Mins", t.m],
    ["Sec", t.s],
  ];

  return (
    <div className="d-flex gap-3">
      {units.map(([label, val]) => (
        <div key={label}>
          <div className="countdown-box">{String(val).padStart(2, "0")}</div>
          <div className="countdown-label">{label}</div>
        </div>
      ))}
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

export default function DealsCarousel({ deals }) {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  function scrollToIndex(i) {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(deals.length - 1, i));
    const slide = track.children[clamped];
    if (slide) slide.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    setActive(clamped);
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    function onScroll() {
      const slideWidth = track.children[0]?.offsetWidth || 1;
      const gap = 12;
      const idx = Math.round(track.scrollLeft / (slideWidth + gap));
      setActive(Math.max(0, Math.min(deals.length - 1, idx)));
    }
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [deals.length]);

  return (
    <div>
      <div className="deals-track" ref={trackRef}>
        {deals.map((d, i) => (
          <div className="deal-slide" key={i}>
            <img src={d.img} alt="" />
            <span className="deal-chip">{d.chip}</span>
          </div>
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-between mt-3">
        <div className="d-flex gap-2">
          <button className="deal-nav-btn" aria-label="Previous" onClick={() => scrollToIndex(active - 1)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button className="deal-nav-btn" aria-label="Next" onClick={() => scrollToIndex(active + 1)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
        <div className="d-flex gap-2">
          {deals.map((_, i) => (
            <button
              key={i}
              className={"deal-dot" + (i === active ? " active" : "")}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => scrollToIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

export function LifeActivityIcons() {
  const activities = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = activities.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={activities}
      className="life-beyond__activities"
      data-visible={visible}
      aria-hidden="true"
    >
      <svg className="life-beyond__activity" viewBox="0 0 24 24">
        <path d="M5 6v12M2 9v6m3-3h14m0-6v12m3-9v6" />
      </svg>
      <svg className="life-beyond__activity" viewBox="0 0 24 24">
        <path d="M12 3a9 9 0 1 0 0 18c2 0 3-1 2-3-1-2 0-3 2-3h2c2 0 3-2 3-4 0-5-4-8-9-8Z" />
        <path d="M7 12h.01M10 7h.01M15 7h.01M18 11h.01" />
      </svg>
      <svg className="life-beyond__activity" viewBox="0 0 24 24">
        <path d="M12 22V11m0 4C6 15 3 12 3 6c5 0 9 3 9 9Zm0-4c0-5 4-8 9-8 0 5-3 8-9 8ZM8 21c2 2 6 2 8 0" />
      </svg>
      <svg className="life-beyond__activity" viewBox="0 0 24 24">
        <circle cx="8" cy="8" r="3" />
        <circle cx="17" cy="7" r="3" />
        <path d="M2 20v-1a6 6 0 0 1 12 0v1m1-7a5 5 0 0 1 7 5v1" />
      </svg>
      <svg className="life-beyond__activity" viewBox="0 0 24 24">
        <path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Zm0 0v14" />
      </svg>
      <svg className="life-beyond__activity" viewBox="0 0 24 24">
        <path d="M3 7h5l2-3h4l2 3h5v13H3Z" />
        <circle cx="12" cy="13" r="3.5" />
      </svg>
    </div>
  );
}

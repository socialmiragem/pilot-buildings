import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./Hero";

gsap.registerPlugin(ScrollTrigger);

const HorizontalSections = () => {
  const containerRef = useRef();

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (window.innerWidth > 1025) {
      const sections = gsap.utils.toArray(".scroll-section");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => "+=" + container.offsetWidth,
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  return (
    <div className="horizontal-scroll-wrapper" ref={containerRef}>
      <div className="scroll-section"><Hero /></div>
      <div className="scroll-section"><Hero /></div>
    </div>
  );
};

export default HorizontalSections;

import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./Hero";
import VerticalScrollIndicator from "./VerticalScrollIndicator";

gsap.registerPlugin(ScrollTrigger);

const HorizontalSections = () => {
  const containerRef = useRef();
  const sectionRefs = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (window.innerWidth > 1025) {
      const sections = gsap.utils.toArray(".scroll-section");
      sectionRefs.current = sections;

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => "+=" + container.offsetWidth,
          onUpdate: self => {
            const sectionIndex = Math.round(self.progress * (sections.length - 1));
            setCurrentSection(sectionIndex);
          }
        },
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  const scrollToSection = (index) => {
    const container = containerRef.current;
    const scrollAmount = index * window.innerWidth;
    window.scrollTo({
      top: container.offsetTop + scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <>
      <div className="aboveTab">
        <VerticalScrollIndicator current={currentSection} scrollTo={scrollToSection} />
      </div>
      <div className="horizontal-scroll-wrapper" ref={containerRef}>
        <div className="scroll-section" ><Hero currentSection={currentSection} scrollToSection={scrollToSection}/></div>
        <div className="scroll-section section2"><Hero currentSection={currentSection} scrollToSection={scrollToSection}/></div>
      </div>
    </>
  );
};

export default HorizontalSections;
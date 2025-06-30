import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./Hero";
import VerticalScrollIndicator from "./VerticalDataIndicator";
import BuildingTypes from "./BuildingTypes";

gsap.registerPlugin(ScrollTrigger);

const DynamicWidthSections = () => {
  const containerRef = useRef();
  const sectionRefs = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);

  useLayoutEffect(() => {
    let ctx;

    const setupScroll = () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (ctx) ctx.revert();

      const container = containerRef.current;

      if (window.innerWidth > 1025) {
        const sections = gsap.utils.toArray("section.scroll-section");
        sectionRefs.current = sections;

        ctx = gsap.context(() => {
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
            }
          });
        }, container);
      }
    };

    setupScroll();

    const handleResize = () => {
      setupScroll();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (ctx) ctx.revert();
    };
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
    <main className="horizontal-scroll-wrapper" ref={containerRef}>
      
      <section className="scroll-section" aria-label="Hero Section">
        <Hero currentSection={currentSection} scrollToSection={scrollToSection} />
      </section>
      <section className="scroll-section" aria-label="Building Types Section">
        <BuildingTypes currentSection={currentSection} scrollToSection={scrollToSection} />
      </section>
    </main>
  );
};

export default DynamicWidthSections;

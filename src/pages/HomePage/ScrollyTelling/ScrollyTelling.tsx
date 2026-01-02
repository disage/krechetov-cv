import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useGSAP } from '@gsap/react';
import './ScrollyTelling.scss';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

interface ScrollyTellingProps {
  children: React.ReactNode;
}

const ScrollyTelling: React.FC<ScrollyTellingProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const slides = gsap.utils.toArray<HTMLElement>('.scrolly-slide');
    const sphere = sphereRef.current;

    if (!slides.length) return;

    // Simple fixed scroll distance per slide - no dynamic calculations
    const scrollPerSlide = 100; // vh
    const totalScrollDistance = slides.length * scrollPerSlide;

    // Initial state setup
    slides.forEach((slide, i) => {
      if (i === 0) {
        gsap.set(slide, { autoAlpha: 1, scale: 1, yPercent: 0, zIndex: 10, pointerEvents: 'auto' });
      } else {
        gsap.set(slide, { autoAlpha: 0, scale: 0.8, yPercent: 100, zIndex: 1, pointerEvents: 'none' });
      }
    });

    gsap.set(sphere, { yPercent: 50, opacity: 0.5, scale: 0.8 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        start: 'top top',
        end: `+=${totalScrollDistance}%`,
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });

    // Build timeline - each slide gets equal time
    const STEP_DURATION = 1.5;

    slides.forEach((slide, i) => {
      if (i === slides.length - 1) return;

      const nextSlide = slides[i + 1];

      // Current slide exits
      timeline.to(slide, {
        autoAlpha: 0,
        scale: 0.8,
        yPercent: -50,
        filter: 'blur(10px)',
        duration: 1,
        ease: 'power2.inOut',
      }, i * STEP_DURATION + 0.5);

      // Sphere animation
      if (i === 0) {
        timeline.to(sphere, {
          yPercent: -20,
          scale: 1.5,
          opacity: 1,
          duration: 0.5,
          ease: 'power2.in',
          yoyo: true,
          repeat: 1
        }, i * STEP_DURATION + 0.5);
      } else if (i === 1) {
        timeline.to(sphere, { 
          opacity: 0, 
          duration: 1, 
          ease: 'power2.inOut' 
        }, i * STEP_DURATION + 0.5);
      }

      // Disable clicks on slide after exit
      timeline.set(slide, { pointerEvents: 'none' }, i * STEP_DURATION + 1.5);

      // Next slide enters with overlap
      timeline.fromTo(nextSlide, {
        autoAlpha: 0,
        scale: 1.1,
        yPercent: 50,
        zIndex: 10,
        pointerEvents: 'auto'
      }, {
        autoAlpha: 1,
        scale: 1,
        yPercent: 0,
        duration: 1,
        ease: 'power2.out',
        pointerEvents: 'auto',
        zIndex: 10,
        immediateRender: false
      }, i * STEP_DURATION + 1);
    });

  }, { scope: containerRef, dependencies: [children] });

  return (
    <div ref={containerRef} className="scrolly-container">
      <div ref={sphereRef} className="light-sphere-scrolly" />
      {React.Children.map(children, (child, index) => (
        <div 
          className="scrolly-slide" 
          key={index}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default ScrollyTelling;

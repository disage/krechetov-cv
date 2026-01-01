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
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    const slides = gsap.utils.toArray<HTMLElement>('.scrolly-slide');
    const sphere = sphereRef.current;

    if (!slides.length) return;

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
        end: `+=${slides.length * 100}%`,
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    });

    timelineRef.current = timeline;

    const STEP_DURATION = 1.5; // Fixed duration per transition step logic
    
    // Explicitly add label for start (Slide 0)
    timeline.addLabel('slide-0', 0);

    // Create transitions
    slides.forEach((slide, i) => {
      if (i === slides.length - 1) return;

      const nextSlide = slides[i + 1];

      // To ensure predictable timing, we use a consistent timeline build
      // Current slide exits
      timeline.to(slide, {
          autoAlpha: 0,
          scale: 0.8,
          yPercent: -50,
          filter: 'blur(10px)',
          duration: 1,
          ease: 'power2.inOut',
          // onStart removed to allow clicks during exit (for scroll-up scenario)
      });

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
        }, '<');
      } else if (i === 1) {
         timeline.to(sphere, { opacity: 0, duration: 1, ease: 'power2.inOut' }, '<');
      }

      // Disable clicks on 'slide' only after it has fully exited so it can be clicked while reversing (scrolling up)
      timeline.set(slide, { pointerEvents: 'none' });

      // Next slide enters with overlap
      // Starts at '>-0.5' relative to previous exit. Exit was 1s. So starts at 0.5s relative to step start.
      // Ends at 0.5 + 1.0 = 1.5s relative to step start.
      timeline.fromTo(nextSlide, {
            autoAlpha: 0,
            scale: 1.1,
            yPercent: 50,
            zIndex: 10, 
            pointerEvents: 'auto' // Make clickable immediately upon entry start
        }, {
            autoAlpha: 1,
            scale: 1,
            yPercent: 0,
            duration: 1,
            ease: 'power2.out',
            pointerEvents: 'auto',
            zIndex: 10,
            immediateRender: false // CRITICAL: Prevent this state from applying to all future slides instantly
        }, '-=0.5'); 
        
      // Add label exactly at the end of this step's cycle
      // The timeline time should mathematically be (i + 1) * STEP_DURATION
      timeline.addLabel(`slide-${i + 1}`, (i + 1) * STEP_DURATION);
    });

  }, { scope: containerRef, dependencies: [children] });

  const handleSlideClick = (index: number) => {
    const timeline = timelineRef.current;
    if (timeline && timeline.scrollTrigger) {
      // labelToScroll is the most reliable mapper if labels are correct
      const scrollPos = timeline.scrollTrigger.labelToScroll(`slide-${index}`);
      
      if (typeof scrollPos === 'number') {
        gsap.to(window, {
          scrollTo: scrollPos,
          duration: 1,
          ease: 'power3.inOut'
        });
      }
    }
  };

  return (
    <div ref={containerRef} className="scrolly-container">
      <div ref={sphereRef} className="light-sphere-scrolly" />
      {React.Children.map(children, (child, index) => (
        <div 
          className="scrolly-slide" 
          key={index}
          onClickCapture={() => handleSlideClick(index)} 
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default ScrollyTelling;

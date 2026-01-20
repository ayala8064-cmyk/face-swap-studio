import React, { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  trigger?: "inView" | "immediate";
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  as: Tag = "div",
  className = "",
  style = {},
  trigger = "inView",
  delay = 0,
}) => {
  const ref = useRef<HTMLElement>(null);
  const splitRef = useRef<SplitType | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  // Use useLayoutEffect to set initial state before paint
  useLayoutEffect(() => {
    const element = ref.current;
    if (!element || trigger === "immediate") return;

    // Set initial hidden state immediately - only split into lines
    splitRef.current = new SplitType(element, { types: "lines" });

    if (splitRef.current.lines) {
      gsap.set(splitRef.current.lines, {
        y: "0.8em",
        opacity: 0,
      });
    }
  }, [trigger, children]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const setupAnimation = () => {
      // If split wasn't created in useLayoutEffect, create it now
      if (!splitRef.current) {
        splitRef.current = new SplitType(element, { types: "lines" });
      }

      const animateIn = () => {
        if (!splitRef.current?.lines) return;

        gsap.to(splitRef.current.lines, {
          y: "0em",
          opacity: 1,
          transformOrigin: "50% 0%",
          stagger: 0.03,
          duration: 1.2,
          delay,
          ease: "power4.out",
        });
      };

      const resetToInitial = () => {
        if (!splitRef.current?.lines) return;

        gsap.set(splitRef.current.lines, {
          y: "0.8em",
          opacity: 0,
        });
      };

      if (trigger === "immediate") {
        // For immediate, animate right away
        if (splitRef.current?.lines) {
          gsap.set(splitRef.current.lines, {
            y: "0.8em",
            opacity: 0,
          });
        }
        setTimeout(animateIn, 100);
      } else {
        // Clean up previous ScrollTrigger
        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
        }

        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: element,
          start: "top 85%",
          end: "bottom 15%",
          onEnter: animateIn,
          onLeaveBack: resetToInitial,
        });
      }
    };

    // Small delay to ensure fonts are loaded
    const timeoutId = setTimeout(setupAnimation, 50);

    return () => {
      clearTimeout(timeoutId);
      if (splitRef.current) {
        splitRef.current.revert();
        splitRef.current = null;
      }
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
    };
  }, [trigger, delay, children]);

  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
};

export default AnimatedText;

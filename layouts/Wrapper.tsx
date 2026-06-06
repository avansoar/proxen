'use client';

 

import { useEffect, ReactNode } from "react";
import BackToTop from "../common/BackToTop";
import ScrollToTop from "../common/scroll-to-top";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  
  useEffect(() => {
    let active = true;
    let handleResize: () => void;

    import("aos").then((AOS) => {
      if (!active) return;
      const aosInstance = AOS.default;
      aosInstance.init({
        duration: 800,       // slightly shorter animations = smoother feel
        once: true,          // run animation only once
        easing: "ease-out",  // smoother easing
        offset: 50,          // start animation a bit earlier
        debounceDelay: 50,   // reduce layout thrashing
        throttleDelay: 50,
      });

      handleResize = () => aosInstance.refresh();
      window.addEventListener("resize", handleResize);
    });

    return () => {
      active = false;
      if (handleResize) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <>
      {children}
      <ScrollToTop />
      <BackToTop />
    </>
  );
};

export default Wrapper;
 
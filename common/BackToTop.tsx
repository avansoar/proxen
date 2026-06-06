 

'use client';

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const BackToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Only scroll if not already near the top
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
};

export default BackToTop;

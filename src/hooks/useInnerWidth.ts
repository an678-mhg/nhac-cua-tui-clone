import { useState, useEffect } from "react";

const useInnerWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window?.innerWidth);
    };

    window?.addEventListener("resize", handleResize);

    return () => window?.removeEventListener("resize", handleResize);
  }, []);

  return {
    isPC: width > 1024,
    isTablet: width > 768,
    isMobile: width > 640,
    width,
  };
};

export default useInnerWidth;

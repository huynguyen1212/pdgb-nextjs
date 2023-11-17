import { useState, useEffect } from 'react';

export const useDetectWindowSize = ():number => {
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    const handleResizeWindow = () => {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResizeWindow);
    handleResizeWindow();

    return () => window.removeEventListener("resize", handleResizeWindow);
  });

  return windowSize;
};

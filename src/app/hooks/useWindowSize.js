"use client";
import { useState, useEffect, use } from 'react';

export default function useWindowSize() {
  const [width, setWidth] = useState(0); // starts at 0 for SSR

  useEffect(() => {
    // Make sure window is defined (client-only)
    const handleResize = () => setWidth(window.innerWidth);

    handleResize(); // Set on mount

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

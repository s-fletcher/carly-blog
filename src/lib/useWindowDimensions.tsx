import { useState, useEffect } from 'react';

type WindowDimensions = {
  /**
   * Width of user device
   */
  width: number;
  /**
   * Height of user device
   */
  height: number;
  /**
   * Whether user's screen is small enough for a mobile device
   */
  isMobile: boolean;
}

/**
 * Get innerWidth and innerHeight of window
 */
function getWindowDimensions(): WindowDimensions {
  const { innerWidth: width, innerHeight: height } = window;
  const isMobile = width < 570;
  return {
    width,
    height,
    isMobile,
  };
}

/**
 * React hook that will return a window's width and height
 */
export default function useWindowDimensions(): WindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    /**
     * Updates window dimensions
     */
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

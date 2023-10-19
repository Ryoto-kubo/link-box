import { useState, useEffect } from 'react';

export const useScreenSize = () => {
  const initialState = {
    width: typeof window === 'undefined' ? 0 : window.innerWidth,
    height: typeof window === 'undefined' ? 0 : window.innerHeight,
  };
  const [screenSize, setScreenSize] = useState(initialState);

  // 1000 ~
  const isLarge = screenSize.width >= 1000;

  // 780 ~ 1279
  const isMiddle = screenSize.width >= 780 && screenSize.width < 1000;

  // 576 ~ 779
  const isSmall = screenSize.width < 780;

  // ~ 575
  const isXSmall = screenSize.width < 576;

  const isMobile = isMiddle || isSmall || isXSmall;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    function handleResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isLarge,
    isMiddle,
    isSmall,
    isXSmall,
    isMobile,
  };
};

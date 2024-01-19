import React, { useEffect, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { useMediaQuery } from '@mui/material';

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);
  const isMediumScreen = useMediaQuery('(max-width:800px)');
  const isSmallScreen = useMediaQuery('(max-width:500px)');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const widthPercentage = isMediumScreen ? (isSmallScreen ? 80 : 60) : 50;

  const fadeOut = useSpring({
    opacity: isVisible ? 1 : 0,
    config: { ...config.default, duration: 1000, reset: true },
  });

  return (
    <animated.div
      style={{
        ...fadeOut,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <img
        src="/intro/intro.gif"
        alt="Loading GIF"
        style={{
          width: `${widthPercentage}%`,
          height: 'auto',
          objectFit: 'cover',
        }}
      />
    </animated.div>
  );
};

export default Loading;

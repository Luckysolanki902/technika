// components/Loading.js
import React, { useEffect, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

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
        style={{ width: '50%', height: 'auto', objectFit: 'cover' }}
      />
    </animated.div>
  );
};

export default Loading;

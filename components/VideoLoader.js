// components/VideoSplashScreen.js
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoSplashScreen = ({ onVideoEnd }) => {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const handleVideoEnd = () => {
      setVideoEnded(true);
      onVideoEnd();
    };

    // Check if localStorage is available (client-side)
    if (typeof window !== 'undefined') {
      const hasVideoBeenShown = localStorage.getItem('hasVideoBeenShown');

      if (!hasVideoBeenShown) {
        // Show the video splash screen if it hasn't been shown before
        // Set a flag in localStorage to indicate that the video has been shown
        localStorage.setItem('hasVideoBeenShown', 'true');
      }
    }

    return () => {
      window.removeEventListener('ended', handleVideoEnd);
    };
  }, [onVideoEnd]);

  if (videoEnded) {
    return null; // Don't show the video splash screen after it has ended
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999, backgroundColor: 'black', position: 'fixed', top: '0', left: '0' }}>
      <ReactPlayer
        url="/video/intro.mp4"
        playing={true}
        loop={false}
        width="100%"
        height="100%"
        controls={false}
        muted={true}
        onEnded={() => {
          setVideoEnded(true);
          onVideoEnd();
        }}
      />
    </div>
  );
};

export default VideoSplashScreen;

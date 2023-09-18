import { useState, useRef } from "react";

function useVideoPlayer(initialSource = "") {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const setVideoSource = (source) => {
    videoRef.current.src = source;
    videoRef.current.load();
    setCurrentTime(0);
    if (isPlaying) {
      videoRef.current.play();
    }
  };

  const seekTo = (time) => {
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  videoRef.current.addEventListener("timeupdate", handleTimeUpdate);

  return {
    videoRef,
    isPlaying,
    currentTime,
    togglePlay,
    setVideoSource,
    seekTo,
  };
}

export default useVideoPlayer;

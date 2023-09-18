import { useState, useRef } from "react";

function useAudioPlayer(initialSource = "") {
  const audioRef = useRef(new Audio(initialSource));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const setAudioSource = (source) => {
    audioRef.current.src = source;
    audioRef.current.load();
    setCurrentTime(0);
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const seekTo = (time) => {
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  audioRef.current.addEventListener("timeupdate", handleTimeUpdate);

  return {
    audioRef,
    isPlaying,
    currentTime,
    togglePlay,
    setAudioSource,
    seekTo,
  };
}

export default useAudioPlayer;

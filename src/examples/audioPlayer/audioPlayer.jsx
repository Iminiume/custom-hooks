import React from "react";
import useAudioPlayer from "../../hooks/useAudioPlayer";
import Button from "../../components/button";

function AudioPlayer() {
  const {
    audioRef,
    isPlaying,
    currentTime,
    togglePlay,
    setAudioSource,
    seekTo,
  } = useAudioPlayer("your-audio-file.mp3");

  return (
    <div className="container">
      <h1>AudioPlayer Example</h1>
      <audio ref={audioRef} />
      <Button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</Button>
      <input
        type="range"
        min={0}
        max={audioRef.current.duration}
        value={currentTime}
        onChange={(e) => seekTo(e.target.value)}
      />
      <Button onClick={() => setAudioSource("new-audio-file.mp3")}>
        Change Audio
      </Button>
    </div>
  );
}

export default AudioPlayer;

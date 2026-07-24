import React, { useEffect, useRef } from 'react';
import { useLibraryStore } from '../store/store';
import { convertFileSrc } from '@tauri-apps/api/core';

export default function Player() {
  const audioRef = useRef(null);
  const currentSong = useLibraryStore((state) => state.currentSong);

  useEffect(() => {
  const audio = audioRef.current;
  audio.src = convertFileSrc(currentSong?.path);
  audio.load();
  audio.play();
  }, [currentSong?.path])

  return (
    <div>
    <audio
    ref={audioRef} />
    </div>
  );
}

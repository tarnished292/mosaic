import { create } from "zustand";

export const useLibraryStore = create((set) => ({
  libraryPath: null,
  songs: [],
  currentSong: null,
  currentPlaying: null,

  setLibraryPath: (path) =>
    set({
      libraryPath: path,
    }),
  setSongs: (songs) =>
    set({
      songs,
    }),
  setCurrentPlaying: (currentPlaying) =>
    set({
      currentPlaying,
    }),

  setCurrentSong: (song) =>
    set({
      currentSong: song,
    }),
}));

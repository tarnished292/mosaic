import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import SelectDir from "./tutorial/location";
import { load } from "@tauri-apps/plugin-store";
import List from "./components/List";
import { chose_dir } from "./utils/chosePath";
import { useLibraryStore } from "./store/store";
import Player from "./components/Player";

function App() {
  const libraryPath = useLibraryStore((state) => state.libraryPath);
  const songs = useLibraryStore((state) => state.songs);
  const setLibraryPath = useLibraryStore((state) => state.setLibraryPath);
  const setSongs = useLibraryStore((state) => state.setSongs);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    (async () => {
      const store = await load("settings.json", { autoSave: true });
      const saved = await store.get("libraryPath");
      if (saved) {
        setLibraryPath(saved);
      }
      setChecked(true);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!libraryPath) return;
      const result = await invoke("scan_dir", { dir: libraryPath });
      setSongs(result);
    })();
  }, [libraryPath]);

  if (!checked) return null;

  if (!libraryPath) {
    return <SelectDir />;
  }

  return (
    <div className="bg-[#1F1F23] min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#2a2a30]">
        <div>
          <h1 className="text-white text-lg font-semibold">Mosaic</h1>
          <p className="text-[#8a8a93] text-xs mt-0.5 truncate max-w-md">{libraryPath}</p>
        </div>
        <button
          onClick={chose_dir}
          className="text-sm text-[#c4c4cc] hover:text-white border border-[#35353D] hover:border-[#45454f] rounded-lg px-4 py-2 transition-colors"
        >
          Change folder
        </button>
      </header>
      <Player />

      <List songs={songs} />
      <footer className="px-6 py-2 border-t border-[#2a2a30] text-xs text-[#5a5a63]">
        {`${songs.length} ${songs.length === 1 ? "track" : "tracks"}`}
      </footer>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import SelectDir from "./tutorial/location";
import { load } from "@tauri-apps/plugin-store";

function App() {
  const [hasPath, setHasPath] = useState(false);
  const [musicPath, setMusicPath] = useState(null);
  const [checked, setChecked] = useState(false);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    (async () => {
      const store = await load("settings.json", { autoSave: true });
      const saved = await store.get("libraryPath");
      if (saved) {
        setHasPath(true);
        setMusicPath(saved);
      }
      setChecked(true);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const result = await invoke("scan_dir", { dir: musicPath });
      setSongs(result);
    })();
  }, [musicPath]);

  if (!checked) return null;

  if (!hasPath) {
    return <SelectDir onSelected={() => setHasPath(true)} />;
  }

  return (
    <div className="bg-[#1F1F23] h-screen">
      <h1 className="text-2xl text-center text-white">Welcome To Mosaic</h1>
      {songs.length === 0 ? (
             <p className="text-center text-neutral-400 mt-4">No songs found yet.</p>
           ) : (
             <ul className="text-white mt-4">
               {songs.map((s, i) => (
                 <li key={i}>{s.title}</li>
               ))}
             </ul>
           )}
    </div>
  );
}

export default App;

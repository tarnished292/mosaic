import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";
import SelectDir from "./tutorial/location";
import { load } from "@tauri-apps/plugin-store";

function App() {
  const [libPath, setLibPath] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    (async () => {
      const store = await load("settings.json", { autoSave: true });
      const saved = await store.get("libraryPath");
      if (saved) setLibPath(true);

      setChecked(true);
    })();
  }, []);

  if (!checked) return null;

  if (!libPath) {
    return <SelectDir onSelected={() => setLibPath(true)} />;
  }

  return (
    <div className="bg-[#1F1F23] h-screen">
      <h1 className="text-2xl text-center text-white">Welcome To Mosaic</h1>
    </div>
  );
}

export default App;

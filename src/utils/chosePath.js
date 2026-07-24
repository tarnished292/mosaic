import { open } from "@tauri-apps/plugin-dialog";
import { load } from "@tauri-apps/plugin-store";
import { useState } from "react";
import { useLibraryStore } from "../store/store";

export async function chose_dir() {
  const selected = await open({ multiple: false, directory: true });
  if (selected) {
    const store = await load("settings.json", { autoSave: true });
    await store.set("libraryPath", selected);
    useLibraryStore.getState().setLibraryPath(selected);
  }
}

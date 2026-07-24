import { useEffect, useState } from "react";
import { load } from "@tauri-apps/plugin-store";
import {FolderOpen} from "lucide-react";
import { chose_dir } from "../utils/chosePath";

export default function SelectDir({ onSelected }) {
  return (
    <div className="min-h-screen bg-[#1F1F23] flex flex-col justify-center">
      <div className="flex justify-center mb-7">
        <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-[#29292F] border border-[#35353D] shadow-lg">
          <FolderOpen size={38} strokeWidth={1.5} className="text-gray-400" />

          <div className="absolute inset-0 rounded-2xl bg-white/[0.02]" />
        </div>
      </div>

      <h1 className="text-center text-white text-2xl font-semibold">No music directory set</h1>
      <p className="text-gray-400 text-center mt-3 text-base">
        We couldn't find any audio files. Choose a folder to get started.
      </p>

      <div className="flex justify-center ">
        <button
          onClick={chose_dir}
          className=" mt-8
                     inline-flex
                     items-center
                     justify-center
                     gap-2
                     rounded-lg
                     bg-white
                     px-5
                     py-2.5
                     text-sm
                     font-medium
                     text-[#1F1F23]
                     transition
                     hover:bg-gray-200
                     active:scale-[0.98]
                     disabled:cursor-not-allowed
                     disabled:opacity-50
                   "
        >
          Select music folder
        </button>
      </div>
    </div>
  );
}

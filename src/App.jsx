import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg-[#1F1F23] h-screen">
      <h1 className="text-2xl text-center text-white">Welcome To Mosaic</h1>
      </div>
    </>
  );
}

export default App;

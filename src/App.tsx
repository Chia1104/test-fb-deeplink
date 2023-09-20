import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { cn } from "@/utils";
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams] = useSearchParams({
    fb_deeplink: "",
  });

  return (
    <div className={cn("App flex flex-col items-center justify-center gap-5")}>
      <div className="flex gap-5">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + TS + TailwindCSS</h1>
      <div className={cn("card flex flex-col gap-3")}>
        <button
          onClick={() =>
            (window.location.href = searchParams.get("fb_deeplink") ?? "")
          }>
          Deep link to {searchParams.get("fb_deeplink")}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Create with '@chiastack/react-ts-tailwind' template
      </p>
    </div>
  );
}

export default App;

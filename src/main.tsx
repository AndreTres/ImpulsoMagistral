import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/fraunces/wght.css";
import "@fontsource-variable/source-sans-3/wght.css";
import { App } from "./App.tsx";
import "./styles/global.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Elemento #root não encontrado.");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

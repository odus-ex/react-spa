import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App.js";

const root = document.getElementById("react-root");
try {
  createRoot(root).render(<App />);
} catch (err) {
  console.log("Couldn't load React", err);
}

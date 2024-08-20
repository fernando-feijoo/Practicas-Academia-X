import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Tarjeta from "./components/Tarjeta.jsx";
import "./css/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Tarjeta />
  </StrictMode>
);

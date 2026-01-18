import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StarsRating from "./StarsRating";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <StarsRating maxRating={5} />
  </StrictMode>,
);

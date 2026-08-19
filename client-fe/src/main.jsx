import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContextComponent from "./components/Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextComponent>
      <App />
    </ContextComponent>
  </StrictMode>
);
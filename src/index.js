import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

import App from "./pages/App/App";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();

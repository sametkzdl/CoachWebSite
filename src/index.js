import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/global";
import { BlurProvider } from "./context/blurContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <BlurProvider>
        <App />
      </BlurProvider>
    </ThemeProvider>
  </BrowserRouter>
);

import Home from "./pages/Home/Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

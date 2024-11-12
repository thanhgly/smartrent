import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard.jsx";
import RentCal from "./RentCal.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <App />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rentcal" element={<RentCal />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

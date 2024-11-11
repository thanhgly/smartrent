import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import RentCal from "./RentCal";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rentcal" element={<RentCal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

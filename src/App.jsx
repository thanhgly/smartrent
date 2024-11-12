import "./App.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <header style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
        <nav>
          <ul style={{ listStyleType: "none", display: "flex", gap: "10px" }}>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/rentcal">Rent Cal</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default App;

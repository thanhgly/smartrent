import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "white",
        width: "100vw",
        paddingTop: "0",
      }}
    >
      <nav>
        <ul
          style={{
            listStyleType: "none",
            display: "flex ",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/rentcal">Rent Cal</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;

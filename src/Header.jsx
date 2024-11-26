import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "white",
      }}
    >
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            listStyleType: "none",
            // paddingLeft: "0px",
            paddingInlineStart: "0px",
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

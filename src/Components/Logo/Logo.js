import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <div className="Logo">
      <Link to="/">
        <button className="logoButton" placeholder="Home">
          SC.
        </button>
      </Link>
    </div>
  );
}

export default Logo;

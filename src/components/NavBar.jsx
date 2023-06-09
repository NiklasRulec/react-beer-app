import { Link } from "react-router-dom";
import HomeButton from "./HomeButton";

const NavBar = () => {
  return (
    <nav>
      <Link to="/home">
        <HomeButton />
      </Link>
    </nav>
  );
};

export default NavBar;

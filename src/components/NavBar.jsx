import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar bg-apple-green text-white flex justify-center">
      <Link className="btn btn-ghost text-xl mx-2" to={"/"}>
        Home
      </Link>
      <span>| |</span>
      <Link className="btn btn-ghost text-xl mx-2" to="/favorites">
        Favorites
      </Link>
    </div>
  );
};

export default NavBar;

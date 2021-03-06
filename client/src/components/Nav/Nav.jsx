import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className='nav'>
      <div>
        <NavLink className="logo" to="/">
          Blog App
        </NavLink>
      </div>
      <div>
        <NavLink className="links" to="/add-posts">
          Add Posts
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;

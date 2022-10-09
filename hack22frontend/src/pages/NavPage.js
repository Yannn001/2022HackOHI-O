import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
 return (
   <>
   <nav className="navbar">
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/Signup">Signup</Link>
      </li>
      <li>
        <Link to="/Signin">Signin</Link>
      </li>
    </ul>
  </nav>
</>
);
};

export default Navbar;
import React from "react";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="container">
      <section className="head flex">
        <h2>U-Dev</h2>
        <div className="head-list flex">
        <ul>
          <li><a href="#explore-menu"></a>Explore menu</li>
          <li><a href=""></a> About us</li>
          <li><a href=""></a> Contact</li>
        </ul>
        </div>
        <div className="buttons">
           <Link to="/add-new">
      <button type="submit" className="form" value="">Add a Dish</button>
    </Link>
         
        </div>
      </section>
    </header>
  );
}

export default Header;

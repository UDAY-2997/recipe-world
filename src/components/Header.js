import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="container">
      <section className="head flex">
        <h2 className="home">
          <Link to="/menu.js">U-Dev</Link>
        </h2>
        <div className="head-list flex">
          <ul>
            <li><Link to="/menu.js">Explore menu</Link></li>
            <li><a href="">About us</a></li>
            <li><a href="">Contact</a></li>
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

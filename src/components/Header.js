import React from "react";

function Header() {
  return (
    <header className="container">
      <section className="head flex">
        <h2>U-Dev</h2>
        <ul className="head-list flex">
          <li><a href="#explore-menu">Explore menu</a></li>
          <li><a href=""></a> About us</li>
          <li><a href=""></a> Contact</li>
        </ul>
        <div className="buttons">
          <button type="submit" className="form" value="">Add a Dish</button>
        </div>
      </section>
    </header>
  );
}

export default Header;

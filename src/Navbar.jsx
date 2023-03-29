import React from "react";
function Navbar() {
  return (
    <nav>
      <ul className="flex">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/favorites">Favorites</a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;

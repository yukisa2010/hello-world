import React from "react";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div id="menu" className={props.flag ? "open" : ""}>
      <i className="fas fa-times close" onClick={() => props.closeMenu()} />
      <ul>
        <li>
          <Link key={2} to="/Login" style={{ textDecoration: "none" }}>
            ログイン
          </Link>
        </li>
        <li>
          <Link key={1} to="/" style={{ textDecoration: "none" }}>
            TOP PAGE
          </Link>
        </li>
        <li>お問合せ</li>
      </ul>
    </div>
  );
}

export default Menu;

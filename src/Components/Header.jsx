import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li className={styles.link}><NavLink  to="/" end>Produtos</NavLink></li>
        <li className={styles.link}><NavLink to="/contato">Contato</NavLink></li>
      </ul>
    </nav>
  );
};

export default Header;

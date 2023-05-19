import React from 'react';
import styles from "./Header.module.scss";
import Notice from '../Notice/Notice';
import mainLogo from "../../assets/img/logo-franc.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={mainLogo} />
      <div className={styles.btns}>
        <Notice />
      </div>
    </header>
  )
};

export default Header;

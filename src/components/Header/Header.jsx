import React from 'react';
import styles from "./Header.module.scss";
import CarNumber from '../CarNumber/CarNumber';
import mainLogo from "../../assets/img/logo-franc.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={mainLogo} />
      <div className={styles.btns}>
        <CarNumber />
      </div>
    </header>
  )
};

export default Header;

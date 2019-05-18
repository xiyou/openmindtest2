/**
 * @description 讨论页顶部内容
 */
import React from "react";
import styles from "./Header.css";
import DoubleButton from "../../components/DoubleButton";
import Filtrate from "../../components/Filtrate";

function Header(props) {
  return (
    <div className={styles.container}>
      <DoubleButton />
      <Filtrate />
    </div>
  );
}

export default Header;

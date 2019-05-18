/**
 * @description 三种过滤功能元素
 * @author rongli
 */

import React from "react";
import styles from "./Filtrate.css";
import FiltrateTag from "../../routes/FiltrateTags";
import { Icon } from "antd";

let style = {
  fontSize: "25px",
  color: "#f13946"
};

function Filtrate(props) {
  return (
    <div className={styles.container}>
      <div className={styles.join}>
        <Icon type="check-square" theme="filled" style={style} />
        <span>我参与的</span>
      </div>

      <div className={styles.tags}>
        <FiltrateTag />
      </div>

      <div className={styles.time}>
        <Icon type="down" />
        按照时间排序
      </div>
    </div>
  );
}

export default Filtrate;

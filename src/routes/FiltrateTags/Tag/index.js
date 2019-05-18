import React, { useState } from "react";
import styles from "./Tags.css";
import { Icon } from "antd";

function Tag(props) {
  const [showIcon, setShow] = useState(false);

  // 这个函数要做两件事了
  function controlIconShow(id) {
    // 输入-输出
    // 需要别人搭把手，把数据传递出去。

    if (showIcon) {
      setShow(false);
      props.decreseTag(id);
    } else {
      setShow(true);
      props.addTag(id);
    }
  }
  return (
    <div className={styles.tag} onClick={() => controlIconShow(props.id)}>
      <div className={styles.tagContent}>
        <div>
          <span
            className={styles.square}
            style={{ backgroundColor: `${props.color}` }}
          />
          <strong>{props.name}</strong>
        </div>
        {showIcon && (
          <Icon
            type="check-circle"
            theme="filled"
            style={{ fontSize: "20px", color: "#f63448" }}
          />
        )}
      </div>
    </div>
  );
}

export default Tag;

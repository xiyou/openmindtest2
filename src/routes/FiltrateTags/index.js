/**
 * @description 标签，筛选功能 拆分复杂度
 * @tip 描述完组件后，要导出，输入-处理-输出
 */
import React, { useState } from "react";
import { Dropdown, Input, Icon } from "antd";
import styles from "./FiltrateTags.css";
import dataHandle from "../../utils/dataHandle";
let data = [
  { id: 1, name: "置顶", color: "#5c9af9" },
  { id: 2, name: "问题", color: "#8ac3f7" },
  { id: 3, name: "other tags", color: "#008b8c" },
  { id: 4, name: "标签上限制为十个文字", color: "#ff8c6c" },
  { id: 5, name: "标签是预置的", color: "#f3e05c" },
  { id: 6, name: "且一个讨论", color: "#008a8d" },
  { id: 7, name: "对应多个", color: "#559df8" }
];

function Tag(props) {
  const [showIcon, setShow] = useState(false);

  // 这个函数要做两件事了
  function controlIconShow(id) {
    // 输入-输出
    // 需要别人搭把手，把数据传递出去。

    if (showIcon) {
      setShow(false);
    } else {
      setShow(true);
      dataHandle(id);
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

function FiltrateTag(props) {
  let menu = (
    <div className={styles.menu}>
      <div className={styles.search}>
        <Input
          type="search"
          style={{ width: "256px", height: "40px", alignSelf: "center" }}
          defaultValue={"过滤标签"}
        />
      </div>
      <div className={styles.tags}>
        {data.map((item, index) => (
          <Tag key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
  return (
    <Dropdown
      overlay={menu}
      placement="bottomLeft"
      overlayStyle={{ paddingTop: "22px" }}
      visible
    >
      <a className="ant-dropdown-link" href="#">
        <Icon type="down" style={{ fontSize: "20px" }} /> 标签
      </a>
    </Dropdown>
    // menu
  );
}

export default FiltrateTag;

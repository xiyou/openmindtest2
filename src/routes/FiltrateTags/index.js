/**
 * @description 标签，筛选功能 拆分复杂度
 * @tip 描述完组件后，要导出，输入-处理-输出
 */
import React, { useState } from "react";
import { connect } from "dva";
import { Dropdown, Input, Icon } from "antd";
import styles from "./FiltrateTags.css";
import Tag from "./Tag";

function FiltrateTag({ dispatch, filtrateTags }) {
  function addTag(id) {
    dispatch({
      type: "filtrateTags/addTag",
      payload: id
    });
  }

  function decreseTag(id) {
    dispatch({
      type: "filtrateTags/decreseTag",
      payload: id
    });
  }

  function serachTagValue(e) {
    dispatch({
      type: "filtrateTags/searchTag",
      payload: e.target.value
    });
  }

  const [isVisible, setVisible] = useState(false);
  let menu = (
    <div className={styles.menu}>
      <div className={styles.search}>
        <Input
          type="search"
          style={{ width: "256px", height: "40px", alignSelf: "center" }}
          defaultValue={"过滤标签"}
          onChange={serachTagValue}
        />
      </div>
      <div className={styles.tags}>
        {filtrateTags.data.map((item, index) => (
          <Tag
            key={item.id}
            {...item}
            addTag={addTag}
            decreseTag={decreseTag}
          />
        ))}
      </div>
    </div>
  );
  return (
    <Dropdown
      overlay={menu}
      placement="bottomLeft"
      overlayStyle={{ paddingTop: "22px" }}
      visible={isVisible}
      onVisibleChange={flag => setVisible(flag)}
    >
      <a className="ant-dropdown-link" href="#/">
        <Icon type={isVisible ? "down" : "up"} style={{ fontSize: "20px" }} />{" "}
        标签
      </a>
    </Dropdown>
  );
}

export default connect(({ filtrateTags }) => ({ filtrateTags }))(FiltrateTag);

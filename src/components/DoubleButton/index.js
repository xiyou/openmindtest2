/**
 * @description 讨论、关闭按钮
 * @author rongli
 */

import React from "react";
import { Button } from "antd";

let style = {
  marginRight: "12px",
  backgroundColor: "#f13946",
  color: "#fac9cf"
};

function DoubleButton(props) {
  return (
    <div>
      <Button shape="round" style={style}>
        讨论中
      </Button>
      <Button shape="round">已关闭</Button>
    </div>
  );
}

export default DoubleButton;

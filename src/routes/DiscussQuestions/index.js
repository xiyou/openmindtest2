/**
 * @description 成员们讨论数据展示组件
 * @author rongli
 */
import React, { useState } from "react";
import MemberDiscussion from "../../components/MemberDiscussion";
import data from "../../../mock/data.json";
import "./DiscussQuestions.css";

function DiscussQuestions(props) {
  const [dataList] = useState(data);
  return (
    <div>
      {dataList.map((item, index) => (
        <MemberDiscussion key={index.toString()} {...item} />
      ))}
    </div>
  );
}

export default DiscussQuestions;

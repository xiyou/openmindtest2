/**
 * @description 成员们讨论数据展示组件
 * @author rongli
 */
import React from "react";
import { connect } from "dva";
import MemberDiscussion from "../../components/MemberDiscussion";
import DataList from "../../../mock/data.json";
import "./DiscussQuestions.css";

function DiscussQuestions(props) {
  let discussList =
    props.filtrateTags.discussList.length === 0
      ? DataList
      : props.filtrateTags.discussList;

  return (
    <div>
      {discussList.map((item, index) => (
        <MemberDiscussion key={index.toString()} {...item} />
      ))}
    </div>
  );
}

export default connect(({ filtrateTags }) => ({ filtrateTags }))(
  DiscussQuestions
);

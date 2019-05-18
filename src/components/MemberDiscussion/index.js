/**
 * @description 每一个注册成员发起的讨论
 */

import React from "react";
import { Button, Avatar, Icon } from "antd";
import styles from "./MemberDiscussion.css";

function MemberDiscussion(props) {
  return (
    <div className={styles.container}>
      <div className={styles.containerUp}>
        <div>
          {props.tags.map((item, index) => (
            <Button
              key={index.toString()}
              style={{ marginRight: "12px", backgroundColor: `${item.color}` }}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <p className={styles.containerTitle}>{props.title}</p>
      </div>
      <div className={styles.containerDown}>
        <div>
          <Avatar
            style={{
              marginRight: "20px",
              color: "white",
              backgroundColor: "#fde3cf"
            }}
          >
            {props.avatar}
          </Avatar>
          <span>{props.initiator}</span>·<span>{props.startingTime}</span>
        </div>
        <div>
          <Icon type="message" style={{ fontSize: "20px" }} />
          <span style={{ marginLeft: "6px" }}>{props.numberOfComments}</span>
        </div>
      </div>
    </div>
  );
}

export default MemberDiscussion;

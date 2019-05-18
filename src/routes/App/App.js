/**
 * @description 该应用的根组件
 * @author rongli
 */
import React from "react";
import styles from "./App.css";
import { connect } from "dva";
import Header from "../Header";
import DiscussQuestions from "../DiscussQuestions";

function App(props) {
  return (
    <div className={styles.app}>
      <Header />
      <DiscussQuestions />
    </div>
  );
}

export default connect()(App);

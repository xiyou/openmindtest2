import dva from "dva";
import "./index.css";
import dataList from "../mock/data.json";
// 1. Initialize
const app = dva({
  initialState: {
    products: [{ name: "dva", id: 1 }, { name: "antd", id: 2 }],
    filtrateTags: {
      data: [
        { id: 1, name: "置顶", color: "#5c9af9" },
        { id: 2, name: "问题", color: "#8ac3f7" },
        { id: 3, name: "other tags", color: "#008b8c" },
        { id: 4, name: "标签上限制为十个文字", color: "#ff8c6c" },
        { id: 5, name: "标签是预置的", color: "#f3e05c" },
        { id: 6, name: "且一个讨论", color: "#008a8d" },
        { id: 7, name: "对应多个", color: "#559df8" }
      ],
      discussList: dataList.slice(0, 5)
    }
  }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require("./models/filtrateTags").default);

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");

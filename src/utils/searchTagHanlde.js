let tagList = [
  { id: 1, name: "置顶", color: "#5c9af9" },
  { id: 2, name: "问题", color: "#8ac3f7" },
  { id: 3, name: "other tags", color: "#008b8c" },
  { id: 4, name: "标签上限制为十个文字", color: "#ff8c6c" },
  { id: 5, name: "标签是预置的", color: "#f3e05c" },
  { id: 6, name: "且一个讨论", color: "#008a8d" },
  { id: 7, name: "对应多个", color: "#559df8" }
];

export default function searchTagHanlde(value) {
  console.log(value);
  if (value === "") {
    return tagList;
  }
  return tagList.filter(item => item.name === value);
}

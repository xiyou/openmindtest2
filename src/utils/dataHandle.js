/**
 * @description 输入：数据库数组和用户选中的tag数据，输出：用户需要的数组
 * @author rongli
 */
import data from "../../mock/data.json";
// 记录用户选中的标签
let checkTags = [];
// 这个函数判断无论多少个标签，都遍历做判断，并最终返回布尔值

function handleData(tags) {
  // 过滤掉不匹配的对象
  if (tags.length === checkTags.length) {
    let list = checkTags.filter(
      id => tags.filter(item => item.id === id).length > 0
    );
    //storeBool返回就是两个值
    return list.length === checkTags.length;
  }
}

export default function dataHanlde(id, bool) {
  // 判断是选中还是没有选中
  if (bool) {
    checkTags.push(id);
  } else {
    checkTags = checkTags.filter(val => val !== id);
  }
  let list = data.filter(item => {
    return handleData(item.tags);
  });
  return list;
}

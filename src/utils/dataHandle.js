/**
 * @description 输入：数据库数组和用户选中的tag数据，输出：用户需要的数组
 * @author rongli
 */
import data from "../../mock/data.json";
let checkTags = [];
// 这个函数判断无论多少个标签，都遍历做判断，并最终返回布尔值

function handleData(tags) {
  // 过滤掉不匹配的对象
  if (tags.length === checkTags.length) {
    // 来到这里的对象是符合tag个数的
    // 接下来要判断对象里的tags是否符合用户选中的tag
    let storeBool = checkTags.filter(
      // 对tags的每一个元素调用一个过滤函数，如果满足，返回新的数组，不满足，返回空数组
      // 如果数组长度大于零，说明第一个元素在这个对象中，返回[1]
      // 如果第二个元素满足返回新数组，且长度大于零，说明，这个对象也有用户选中的标签，返回[2]
      id => tags.filter(item => item.id === id).length > 0
    );
    //storeBool返回就是两个值
    return storeBool.length === checkTags.length;
  }
}

export default function dataFilter(id) {
  checkTags.push(id);
  // 输入的数据：data.json listId，
  // 输出：数组遍历过后，返回该我们需要的数组，如何实现？
  let list = data.filter(item => {
    return handleData(item.tags);
  });
  console.log(list);
  return list;
}

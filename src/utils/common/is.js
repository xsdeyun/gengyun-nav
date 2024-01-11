const toString = Object.prototype.toString

// 判断 undefined null 空
export  function isEmpty(value) {
  return value === undefined || value === null || value === '';
}
// 此函数接受值和类型字符串，如果值为指定类型，则返回 true。
export function is(val, type) {
  return toString.call(val) === `[object ${type}]`
}
// 此函数接受一个值，如果值是数组，则返回 true。
export function isArray(val) {
  return val && Array.isArray(val)
}
export function validateEmail(value){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(value);
};

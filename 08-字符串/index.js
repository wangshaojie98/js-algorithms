// 反转字符串
function reverseStr(str) {
  return str.split('').reverse().join('');
}
console.log(reverseStr('abc'));


// 判断一个字符串是否是回文字符串
function isPalindrome(str) {
  const reservedStr = str.split('').reverse().join('');

  return reservedStr === str;
}
console.log(isPalindrome('abc'))
console.log(isPalindrome('aba'))
console.log(isPalindrome('aba aba'))

function isPalindrome1(str) {
  // aaxxaa遍历前三个即可
  //  aaxaa偶数遍历到第二个即可
  // 观察一下都是 遍历到len / 2的位置，换算成下标就是[0, (len /  2 - 1)]

  // 遍历前后两半部分是否相等
  const mid = Math.floor(str.length / 2); 
  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }

  return true
}
console.log(isPalindrome1('abc'))
console.log(isPalindrome1('aba'))
console.log(isPalindrome1('aba aba'))
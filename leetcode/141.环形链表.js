/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 不能以值作为缓存的key，万一值重复
// var hasCycle = function(head) {
//   const hasNode = {}

//   while (head) {
//     if(hasNode[head.val]) {
//       return true;
//     } else {
//       hasNode[head.val] = true;

//       head = head.next;
//     }
//   }

//   return false;
// };
var hasCycle = function(head) {
  while (head) {
    if(head.has) {
      return true;
    } else {
      head.has = true;

      head = head.next;
    }
  }

  return false;
};
// @lc code=end


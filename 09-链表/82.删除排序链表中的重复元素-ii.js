/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates1 = function(head) {
  let cur = new ListNode();
  let node = new ListNode();
  cur.next = head;
  node.next = head;
  const map = {}

  while (head) {
    if (!map[head.val]) {
      map[head.val] = 1;
    } else {
      map[head.val]++;
    }

    head = head.next
  }

  let temp = node;
  while (temp && temp.next) {
    if (map[temp.next.val] > 1) {
      temp.next = temp.next.next
    } else {
      temp = temp.next
    }
  }

  return node.next
};
// 超出时间限制
// var deleteDuplicates = function(head) {
//   if (!head || !head.next) {
//     return head;
//   }

//   const dummy = new ListNode();
//   dummy.next = head;

//   let cur = dummy;

//   while (cur.next && cur.next.next) {
//     if (cur.next.val === cur.next.next.val) {
//       let val = cur.val;
      
//       while (cur.next && val === cur.next.val) {
//         cur.next = cur.next.next;
//       }
//     } else {
//       cur = cur.next;
//     }
//   }

//   return dummy.next
// };
// @lc code=end


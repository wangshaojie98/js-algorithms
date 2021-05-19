/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
// var detectCycle = function(head) {
//     const hasNode = []

//     while (head) {
//       if (!hasNode.includes(head)) {
//         hasNode.push(head);
//         head = head.next;
//       } else {
//         return head
//       }
//     }
//    return null
// };
// 快慢指针解法
var detectCycle = function(head) {
    let slow = head,
        fast = head;
    
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
          let ptr = head;

          while (slow !==ptr) {
            ptr = ptr.next;
            slow = slow.next;
          }

          if (slow === ptr) {
            return slow
          }
        }
    }

    return null;
};
// @lc code=end


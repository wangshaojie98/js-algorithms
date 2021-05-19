/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let pre, cur, leftHead;

  const dummy = new ListNode();
  dummy.next = head;

  cur = head;
  let i = 0;
  let p = dummy;
  while (i < left - 1) {
    p = p.next;
    i++;
  }

  leftHead = p;
  // 起始区间节点
  let start = p.next;

  pre = start;
  cur = pre.next;

  i++;
  while (i < right) {
    let temp = cur.next;
    cur.next = pre;

    pre = cur;
    cur =  temp;
    i++;
  }

  leftHead.next = pre;
  start.next = cur;

  return dummy.next
};
// @lc code=end


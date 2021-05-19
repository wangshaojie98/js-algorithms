/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  const dummy = new ListNode(0, head);

  let pre = dummy;
  let cur = dummy;
  let i = 0;

  while (cur.next) {
    // 两个指针相差n个节点，当后一个指针刚好到达末尾时
    if (i < n) {
      cur = cur.next;
      i++;
      continue;
    }

    pre = pre.next;
    cur = cur.next;
  }

  pre.next = pre.next.next;
  return dummy.next;
};
// @lc code=end


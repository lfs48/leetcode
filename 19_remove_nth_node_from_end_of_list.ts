/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null || head.next === null) { return null }
    const stack = [] as ListNode[];
    let node = head;
    while (node !== null) {
        stack.push(node);
        node = node.next as ListNode;
    };
    
    const i = stack.length - n;
    const prev = stack[i-1];
    const next = stack[i+1];
    if (n === 1) {
        prev.next = null;
        return head;
    } else if (i === 0) {
        head.next = null;
        return next;
    } else {
        prev.next = next;
        return head;
    }

};
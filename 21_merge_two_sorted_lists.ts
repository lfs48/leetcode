/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!!!list1) { return list2 }
    if (!!!list2) { return list1 }
    let bigger:ListNode | null = list1.val >= list2.val ? list1 : list2;
    let smaller:ListNode | null = list1.val >= list2.val ? list2 : list1;
    const head = smaller;
    while(!!bigger && !!smaller) {
        const smallNext = smaller.next;
        const bigNext = bigger.next;
        if(smallNext === null || smallNext.val >= bigger.val) {
            bigger.next = smallNext;
            smaller.next = bigger;
            bigger = bigNext;
        } else {
            smaller = smaller.next;
        }
    }
    return head;
};
const addTwoNumbers = function(l1, l2) {
    let sum = new ListNode(null);
    let sumPointer = sum;
    let length1 = linkedListLength(l1);
    let length2 = linkedListLength(l2);
    let pointer1 = l1;
    let pointer2 = l2;
    let add1 = false;
    
    while(length1 > 0 || length2 > 0) {
        let val;
        if (length1 > 0 && length2 > 0) {
            val = pointer1.val + pointer2.val;
            pointer1 = pointer1.next;
            pointer2 = pointer2.next;
            length1--;
            length2--;
        } else if (length1 > 0) {
            val = pointer1.val;
            pointer1 = pointer1.next;
            length1--;
        } else {
            val = pointer2.val;
            pointer2 = pointer2.next;
            length2--;
        }
        if (add1) {val++;}
        if (val >= 10) {val -= 10; add1 = true;} else {add1 = false;}
        sumPointer.next = new ListNode(val);
        sumPointer = sumPointer.next;
    }
    if (add1) {sumPointer.next = new ListNode(1);}
    return sum.next;
};

const linkedListLength = function(listNode) {
    if (listNode === null) {return 0};
    if (listNode.next === null) {return 1};
    return linkedListLength(listNode.next) + 1;
};
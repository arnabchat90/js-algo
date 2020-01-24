/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var node = new ListNode(1)
var node2 = new ListNode(2)
var node3 = new ListNode(3)
var node4 = new ListNode(4)
node.next = node2
node2.next = node3
node3.next = node4

var swapPairs = function(head) {
    if(head == null || head.next == null) {
        return head;
    }
    else {
        let temp = head;
        let thirdElem = temp.next.next;
        head = head.next;
        head.next=temp;
        temp.next = swapPairs(thirdElem)
    }
    return head;
}

printLinkedList(swapPairs(node));

function printLinkedList(head) {
    while(head!== null) {
        console.log(head.val);
        console.log(" --> ");
        head = head.next;
    }
}


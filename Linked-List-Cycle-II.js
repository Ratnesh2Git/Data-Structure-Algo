/**
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.

Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.

Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
*/

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
var detectCycle = function(head) {
    
    if(!head) return head;

    let tortoise = head;
    let heir = head;

    while(true) {
        tortoise = tortoise.next;
        heir = heir.next;
        if(heir && heir.next) heir = heir.next;
        else return heir ? heir.next : heir;

        if(tortoise === heir) break;

    }

    let start = head;
    let index = 0;
    while(start !== tortoise) {
        start = start.next;
        tortoise = tortoise.next;
        index+=1;
    }
    return start;
   
};

/**
You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.

Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.

Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.


Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
Explanation: The multilevel linked list in the input is shown.
After flattening the multilevel linked list it becomes:

Input: head = [1,2,null,3]
Output: [1,3,2]
Explanation: The multilevel linked list in the input is shown.
After flattening the multilevel linked list it becomes:
*/

/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {

    if(!head) return head;
    const flattenList = function(headNode) {
        let currNode = headNode;
        while(currNode && (currNode.child || currNode.next)) {
            if(currNode.child) {
                let nextNode = currNode.next;
                let childNode = currNode.child;
                let lastNode = flattenList(childNode);
                currNode.next = childNode;
                childNode.prev = currNode;
                currNode.child = null;
                if(lastNode) {
                    lastNode.next = nextNode;
                if(nextNode) nextNode.prev=lastNode;
                currNode = lastNode;
                }
            } else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }
    flattenList(head);
    return head;

};

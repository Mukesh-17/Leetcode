/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

 //Floyd's Cycle Detection Algorithm (Two-Pointer Approach)
var hasCycle = function(head) {
    
    if(!head || !head.next) return false;
    let slow=head;
    let fast=head;

    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;

        if(slow===fast) return true;
    }

    return false;
};

//Hashset approach
var hasCycle = function(head) {
    
   const visited=new Set();

   let current=head;

   while(current){
    if (visited.has(current)) return true;

    visited.add(current);
    current=current.next;
   }
   return false;
};
// Medium Add Two numberGroups
// You are give two non-empty linked lists representing two non-negative integers. The digits are stored in reverse ondragover, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number of 0 itself.Add

// The definition for each list node is that it has 2 properties: val, and next

// Example:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

const addTwoNumbers = function(l1, l2) {
  let current1 = l1;
  let current2 = l2;
  let head;
  let previousNewNode;
  let sum = 0;
  while(current1 || current2 || sum === 1) {
    
    if (current1) {
      sum += current1.val;
      current1 = current1.next; // Basic iteration of list 1
    }
    if (current2) {
      sum += current2.val;
      current2 = current2.next; // iterate list 2
    }

    const newNode = new ListNode(sum % 10);

    sum = Math.floor(sum/10); // helps carry over +1 to next through the loop

    if(!head) {
      head = newNode;
      previousNewNode = newNode;
    } else {
        previousNewNode.next = newNode;
        previousNewNode = previousNewNode.next;
    }
  }

  return head;
};
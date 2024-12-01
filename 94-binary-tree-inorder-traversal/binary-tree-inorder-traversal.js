/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 //Recursive approach
var inorderTraversal = function(root) {
    const ans=[];
    const inTraverse=(node)=>{
        if (!node) return;
        inTraverse(node.left);
        ans.push(node.val);
        inTraverse(node.right);
    }

    inTraverse(root);
    return ans;
};

//Iterative approach
var inorderTraversal = function(root) {
    const result = [];
    const stack = [];
    let current = root;

    while (current || stack.length > 0) {
        // Reach the leftmost node of the current node
        while (current) {
            stack.push(current);
            current = current.left;
        }
        
        // Current must be null at this point
        current = stack.pop();
        result.push(current.val);  // Visit root
        
        // Now visit the right subtree
        current = current.right;
    }
    
    return result;
};

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
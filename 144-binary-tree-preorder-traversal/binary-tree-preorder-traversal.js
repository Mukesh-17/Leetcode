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
var preorderTraversal = function(root) {
    
    const ans=[]
    
    const preTraverse=(node)=>{
        if(!node) return;
        ans.push(node.val);
        preTraverse(node.left);
        preTraverse(node.right); 
    };
    preTraverse(root);
    return ans;
};
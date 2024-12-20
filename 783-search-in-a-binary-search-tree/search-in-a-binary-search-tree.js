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
 * @param {number} val
 * @return {TreeNode}
 */

 //Recursive approach
var searchBST = function(root, val) {
    if(!root) return null;
    if(root.val===val) return root;
    
    return searchBST(val<root.val ? root.left : root.right, val);

};

//Iterative approach
var searchBST = function(root, val) {
    while(root){
        if(root.val===val) return root;

        root=val<root.val?root.left:root.right;
    }

    return null;
};
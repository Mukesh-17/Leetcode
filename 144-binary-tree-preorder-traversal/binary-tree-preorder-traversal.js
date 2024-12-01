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

//Reursive Approach
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



 //Iterative Approach
var preorderTraversal = function(root) {
    if(!root) return [];

    const ans=[];
    const stack=[root];

    while(stack.length>0){
        const node= stack.pop()
        ans.push(node.val);
        if(node.right) stack.push(node.right);
        if(node.left) stack.push(node.left);
    }
    return ans;
    
    
};

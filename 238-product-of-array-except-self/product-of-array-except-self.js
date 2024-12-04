/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    const n=nums.length;
    const ans= new Array(n).fill(1);

    // Step 1: Calculate prefix product
    let prefix=1;
    for(i=0;i<n;i++){
        ans[i]=prefix;
        prefix*=nums[i];
    }

    // Step 2: Calculate suffix product and final result
    let suffix=1;
    for(i=n-1;i>=0;i--){
        ans[i]*= suffix;
        suffix*=nums[i];
    }

    return ans;
};
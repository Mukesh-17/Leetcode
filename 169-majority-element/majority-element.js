/**
 * @param {number[]} nums
 * @return {number}
 */

 // Moore's voting algorithm
var majorityElement = function(nums) {
    let votes=1;
    let majority=nums[0];
    for(i=1;i<nums.length;i++){
        if(votes==0){
            votes++;
            majority=nums[i];
        }
        else if(majority==nums[i]){
            votes++;
        }
        else{
            votes--
        }
    }
    return majority;
};
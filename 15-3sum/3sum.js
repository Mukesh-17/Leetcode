/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b); // Sorts in ascending order
    let result = []; // To store the triplets

    // Step 2: Iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate numbers
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1; // Pointer after i
        let right = nums.length - 1; // Pointer at the end

        // Step 3: Find pairs that sum to -nums[i]
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                // Found a triplet
                result.push([nums[i], nums[left], nums[right]]);

                // Move pointers and skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                // Sum too small, move left pointer
                left++;
            } else {
                // Sum too large, move right pointer
                right--;
            }
        }
    }

    return result;
};

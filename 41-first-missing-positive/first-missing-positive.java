class Solution {
    public int firstMissingPositive(int[] nums) {
        //{3, -1, 7, 11,1, 0, 2, 99, -3, 5}
        //loop 1: clean the array
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] <= 0 || nums[i] > nums.length) {
                nums[i] = nums.length + 1;
            }
        }
        //After cleaning: Array become:{3, 11, 7, 11, 1, 11, 2, 11, 11, 5}
        //Loop 2: Mark the presence 
        for (int i = 0; i < nums.length; i++) {
            int num = Math.abs(nums[i]);

            if (num > nums.length) {
                continue;
            }

            if (nums[num - 1] > 0) {
                nums[num - 1] = -nums[num - 1];
            }
        }
        //After marking presence: Array become:{-3, -11, -7, 11, -1, -6, -2, 11, 6, 5}
        //Loop 3: Find the first missing positive
        for (int i = 0; i < nums.length; i++) {

            if (nums[i] > 0) {
                return i + 1;
            }
        }
        return nums.length + 1;
    }
}
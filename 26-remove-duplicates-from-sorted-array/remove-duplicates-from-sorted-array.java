class Solution {
    public int removeDuplicates(int[] nums) {
        int unique = 1;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i - 1] != nums[i]) {
                unique++;
                nums[unique - 1] = nums[i];
            }
        }
        return unique;
    }
}
class Solution {
   public int[] searchRange(int[] nums, int target) {
        int[] ans = new int[2];
        ans[0] = findLeft(nums, target);
        ans[1] = findRight(nums, target);
        return ans;
    }

    public int findLeft(int[] nums, int target) {

        int start = 0;
        int end = nums.length - 1;
        int ans = -1;
        while (start <= end) {

            int mid = (start + end) / 2;
            if (nums[mid] == target) {
                ans = mid;
                end = mid - 1;
            } else if (nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return ans;
    }

    public int findRight(int[] nums, int target) {

        int start = 0;
        int end = nums.length - 1;
        int ans = -1;
        while (start <= end) {

            int mid = (start + end) / 2;
            if (nums[mid] == target) {
                ans = mid;
                start = mid + 1;
            } else if (nums[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return ans;
    }
}
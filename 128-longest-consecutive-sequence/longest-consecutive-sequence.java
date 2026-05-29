class Solution {
    public int longestConsecutive(int[] nums) {
        int longestLength = 0;
        HashMap<Integer, Boolean> exploredMap = new HashMap<>();

        for (int num : nums) {
            exploredMap.put(num, false);
        }

        //traversing the array
        for (int num : nums) {
            if (exploredMap.get(num) == true) {
                continue;
            }

            int currentLength = 1;
            exploredMap.put(num, true); // Mark the starting element as explored!

            //checking in forward direction
            int nextNum = num + 1;
            while (exploredMap.containsKey(nextNum) && exploredMap.get(nextNum) == false) {

                currentLength++;
                exploredMap.put(nextNum, true);

                //move to the next number
                nextNum++;
            }

            //checking in backward direction
            int prevNum = num - 1;
            while (exploredMap.containsKey(prevNum) && exploredMap.get(prevNum) == false) {

                currentLength++;
                exploredMap.put(prevNum, true);
                //move to the prev num
                prevNum--;
            }
            longestLength = Math.max(longestLength, currentLength);
        }
        return longestLength;
    }
}
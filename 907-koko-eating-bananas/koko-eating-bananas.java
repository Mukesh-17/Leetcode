class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        
    int minSpeed = 1;

        //Find max pile size
        int maxSpeed = 0;
        for (int pile : piles) {
            maxSpeed = Math.max(maxSpeed, pile);
        }
        while (minSpeed < maxSpeed) {

            int mid = minSpeed + (maxSpeed - minSpeed) / 2;

            if (canEatInTime(piles, mid, h)) {
                maxSpeed = mid;
            } else {
                minSpeed = mid + 1;
            }
        }
        return minSpeed;
    }

    public static boolean canEatInTime(int[] piles, int speed, int h) {

        int hours = 0;
        for (int pile : piles) {
            hours += (int) Math.ceil((double) pile / speed);
        }
        return hours <= h;
    }
}
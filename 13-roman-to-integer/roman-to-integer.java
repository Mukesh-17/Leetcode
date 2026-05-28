class Solution {
    public int romanToInt(String s) {
         HashMap<Character, Integer> map = new HashMap<Character, Integer>();
        map.put('I', 1);
        map.put('V', 5);
        map.put('X', 10);
        map.put('L', 50);
        map.put('C', 100);
        map.put('D', 500);
        map.put('M', 1000);
        //storing the last index value in the result
        int result = map.get(s.charAt(s.length() - 1));
        //moving from last to first
        for (int i = s.length() - 2; i >= 0; i--) {
            //checking if the value at i < value at i+.Ex: IX
            if (map.get(s.charAt(i)) < map.get(s.charAt(i + 1))) {
                result = result - map.get(s.charAt(i));

            } //XI
            else {
                result = result + map.get(s.charAt(i));
            }
        }
        return result;
    }
}
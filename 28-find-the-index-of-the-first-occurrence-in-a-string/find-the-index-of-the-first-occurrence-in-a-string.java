class Solution {
    public int strStr(String haystack, String needle) {
        
        int n = haystack.length();
        int m= needle.length();

        if (m > n) return -1;
        if(m==0) return 0;

        int left =0;
        while(left <= n-m){

            int right= 0;
            while(right < m && haystack.charAt(left + right) == needle.charAt(right)){
                right++;
            }
            if(right==m){
                return left;
            }
            left++;    
        }
        return -1;
    }
}
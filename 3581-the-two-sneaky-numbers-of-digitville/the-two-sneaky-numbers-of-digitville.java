class Solution {
    public int[] getSneakyNumbers(int[] nums) {
        int[] result=new int[2];
        int idx=0;
        int n=nums.length;

//Make visited nu
        for(int i= 0;i<n;i++){
           int val =nums[i]%n; //geeting the original value
            nums[val]+=n; //mark visited by adding n

            if(nums[val]>=2*n && nums[val] < 3*n){
                result[idx++]=val;
                if(idx==2) break;
            }
        }
        return result;
    }
}
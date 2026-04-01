class Solution{

    public String largestNumber(int nums[]){

        //Convert int values to String
        String str[] = new String[nums.length];
        for(int i=0; i<nums.length; i++){
            str[i] = String.valueOf(nums[i]);
        }

        //Sort the strings as per custom comparator

        Arrays.sort(str,(a,b)->{

            String s1=a+b;
            String s2=b+a;
            return s2.compareTo(s1);
        }
    );

        //If the largest number is 0, return "0"
        if(str[0].equals("0")){
            return "0";
        }

        //Concatenate the sorted strings to form the largest number
        StringBuilder sb = new StringBuilder();
        for(String s : str){
            sb.append(s);
        }

        return sb.toString();
    }
}
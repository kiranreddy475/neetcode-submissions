class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sorted=s.toLowerCase().replace(/[^a-z0-9]/g, "").trim();
        sorted=sorted.split("")
        let left=0;
        let right=sorted.length-1
        while(left<=right){
            if(sorted[left] !==sorted[right]){
                return false
            }
            left++;
            right--;
        }
        return true
    }
}

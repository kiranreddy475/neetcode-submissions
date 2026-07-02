class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set=new Set(nums);
        let result=0;
        for(let num of set){
            if(set.has(num-1)){
                continue;
            }
            let tempresult=1;
            let current=num;
            while(set.has(current+1)){
                current++;
                tempresult++
            }
            if(tempresult>result){
                result=tempresult;
            }
        }
        return result
    }
}

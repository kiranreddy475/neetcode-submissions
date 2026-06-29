class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map=new Map();
        for(let i=0;i<nums.length;i++){
            let counter=0;
            if(map.has(nums[i])){
                counter=map.get(nums[i]);
                counter =counter +1
                map.set(nums[i],counter)
            }
            else{
                map.set(nums[i],1)
            }
        }
        for( let value of map.values()){
            if(value >1){
            return true
            }
        }
            return false
        }
    }

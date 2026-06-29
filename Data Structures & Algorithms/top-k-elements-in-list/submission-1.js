class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map=new Map();
        for(let i=0;i<nums.length;i++){
            let counter=0;
            if(map.has(nums[i])){
                counter=map.get(nums[i]);
                map.set(nums[i],counter+1)
            }
            else{
                map.set(nums[i],1)
            }

        }
        let arr=[...map];
        arr.sort((a,b)=>b[1]-a[1])
        let result=[];
        for(let i=0;i<k;i++){
            result.push(arr[i][0])
        }
        return result;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result=[];

        let prefix=[];
        let suffix=[];

        let product=1;

        for(let i=0;i<nums.length;i++){
            prefix.push(product);
            product = product * nums[i]
        }
        product =1;

        for(let i=nums.length-1;i>=0;i--){
            suffix[i]=product;
            product =product * nums[i]
        }

        for(let i=0;i<nums.length;i++){
            result.push(prefix[i]*suffix[i])
        }
        return result
    }
}

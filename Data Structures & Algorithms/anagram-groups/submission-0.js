class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map=new Map();
        for(let i=0;i<strs.length;i++){
            let sorted=strs[i].split('').sort().join('');
            if(map.has(sorted)){
                let arr=map.get(sorted);
                arr.push(strs[i])
            }
            else{
                map.set(sorted,[strs[i]])
            }
            
        }
        return [...map.values()]
    }
}

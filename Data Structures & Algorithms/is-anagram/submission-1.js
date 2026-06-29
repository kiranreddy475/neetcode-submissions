class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false;
        }
        let map=new Map();
        for(let i=0;i<s.length;i++){
            if(map.has(s[i])){
                let counter=map.get(s[i]);
                map.set(s[i],counter+1)
            }
            else{
                map.set(s[i],1)
            }
        }
        for(let j=0;j<t.length;j++){
            if(!map.has(t[j])){
                return false
            }
            if(map.has(t[j])){
                let counter=map.get(t[j]);
                map.set(t[j],counter-1)
            }
        }
        for(let value of map.values()){
            if(value != 0){
                return false
            }
        }
         return true
    }
}

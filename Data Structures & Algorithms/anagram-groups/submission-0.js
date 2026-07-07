class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();

            for(let char of strs){
                //"tea"
                let key = char.split("").sort().join("");

                if(!map.has(key)){
                    map.set(key, [])
                }

                map.get(key).push(char)

            }
            
        return [...map.values()]
    }
}

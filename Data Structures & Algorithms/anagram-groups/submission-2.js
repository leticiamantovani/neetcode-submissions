class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const arr = new Map();
        for(let i = 0; i < strs.length; i++){
            let sortedWord = strs[i].split("").sort().join("");

            if (arr.has(sortedWord)){
                arr.get(sortedWord).push(strs[i])
            } else {
                arr.set(sortedWord, [strs[i]])
            }
        }

        return [...arr.values()]   

    }
}

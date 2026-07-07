class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const obj = new Map()
        for(let str of strs){
            let strSorted = str.split("").sort().join("")

            if(!obj.has(strSorted)){
                obj.set(strSorted, [])
            }

            obj.get(strSorted).push(str)

        }

        return [...obj.values()]
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const wordA = s.split("").sort().join("")
        const wordB = t.split("").sort().join("")

        if(wordA === wordB){
            return true
        }

        return false
    }
}

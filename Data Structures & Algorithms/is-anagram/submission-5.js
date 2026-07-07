class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const wordS = s.split("").sort().join("");
        const wordT = t.split("").sort().join("");

        if(wordS === wordT){
            return true
        }

        return false

    }
}

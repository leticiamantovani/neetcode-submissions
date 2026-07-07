class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let right = 0
        let left = 0
        let max = 0
        let count = new Map()
        let res = 0

        while(right < s.length){
            count.set(s[right], (count.get(s[right]) || 0) + 1);
            max = Math.max(max, count.get(s[right]))

            while((right - left + 1) - max > k){
                count.set(s[left], count.get(s[left]) - 1)
                left++
            }

            res = Math.max(res, right - left + 1)
            right++
        }
        return res;
    }
}

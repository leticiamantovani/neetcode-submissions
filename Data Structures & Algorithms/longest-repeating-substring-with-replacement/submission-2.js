class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0
        let right = 0
        let result = 0
        let obj = new Map()
        let max = 0


        while(right < s.length){
            obj.set(s[right], (obj.get(s[right]) || 0) + 1)
            max = Math.max(max, obj.get(s[right]))

            while(((right - left + 1) - max) > k){
                obj.set(s[left], obj.get(s[left]) - 1)
                left++
            }

            result = Math.max(result, right - left + 1)
            right++
        }
        return result

    }
}

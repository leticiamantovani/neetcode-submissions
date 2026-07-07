class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        let right = 0
        let result = 0
        let map = new Map()

        while(right < s.length){
            
            while(map.has(s[right])){
                map.delete(s[left])
                left++
            } 
            map.set(s[right], right)
            result = Math.max(result, right - left + 1)
            right++
        }

        return result
    }
}

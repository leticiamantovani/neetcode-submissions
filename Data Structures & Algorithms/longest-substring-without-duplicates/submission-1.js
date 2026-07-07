class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let left = 0
        let right = 0
        let obj = new Set();
        let result = 0

        while(right < s.length){
            
            while(obj.has(s[right])){
                obj.delete(s[left])
                left++
            }

            obj.add(s[right])

            result = Math.max(result, right - left + 1)

            right++
        }
        return result
    }
}    

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
            
            while(obj.has(s[right])){ // enquanto ele tiver o numero ali do right, vai ter que apagar left e avançar ate chegar no right e apagar
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

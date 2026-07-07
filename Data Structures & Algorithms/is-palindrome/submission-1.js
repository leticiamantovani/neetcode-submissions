class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let arr = s.split(" ").join("")
        let right = s.length - 1
        let left = 0


        while(left < right){

            if(!this.isAlphanumeric(arr[left])){
                left++
                continue
            }

            if(!this.isAlphanumeric(arr[right])){
                right--
                continue
            }

            if(arr[left].toLowerCase() !== arr[right].toLowerCase()){
                return false
            }

            left++
            right--

        }
        return true
    }

    isAlphanumeric(char){

        return (
            (char >= "A" && char <= "Z") ||
            (char >= "a" && char <= "z") ||
            (char >= "0" && char <= "9")
        )
        
    }
}

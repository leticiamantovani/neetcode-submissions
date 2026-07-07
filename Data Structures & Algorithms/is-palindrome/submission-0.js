class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let arr = s.split(" ").join("")
        let left = 0;
        let right = arr.length - 1

        while(left < right){

            if(!this.isAlphaNumeric(arr[right])){
                right--
                continue
            }

            if(!this.isAlphaNumeric(arr[left])){
                left++
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

    isAlphaNumeric(char){
        return (
            (char >= "A" && char <= "Z") ||
            (char >= "a" && char <= "z") ||
            (char >= "0" && char <= "9")
        )
    }
}

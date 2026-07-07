class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let obj = new Set()

        for(const num of nums){
            if(obj.has(num)){
                return true
            }

            obj.add(num)
        }
        return false

    }
}

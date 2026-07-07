class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const a = new Set();
        for (let i = 0; i <= nums.length; i++){
            if(a.has(nums[i])){
                return true
            }
            a.add(nums[i])
        }
        return false;
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let k = 0;
        let obj = new Map();

        for(let i = 0; i < nums.length; i++){
            if(!obj.has(nums[i])){
                obj.set(nums[i], i)
                nums[k] = nums[i]
                k++
            } 
        }
        return k
    }
}

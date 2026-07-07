class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = new Map();


        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            if(obj.has(diff)){
                return [i, obj.get(diff)]
            }

            obj.set(nums[i], i)
        }

        return []
    }
}

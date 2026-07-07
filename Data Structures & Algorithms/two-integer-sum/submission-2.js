class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = new Map();

        for(let i = 0; i < nums.length; i++){
            let diff = target - nums[i]

            if(obj.has(diff)){
                return [obj.get(diff), i]
            }

            obj.set(nums[i], i)

        }
        return []
    }
}

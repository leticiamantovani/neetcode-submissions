class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        

        for(let i = 0; i < nums.length; i++){
            let right = i + 1
            let diff = target - nums[i]

            while(right < nums.length){
                if(nums[right] === diff){
                    return [i, right]
                }
                right++
            }
        }

        return []
    }
}

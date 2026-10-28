class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        obj = {}

        for i in range(len(nums)):
            diff = target - nums[i]
            if diff in obj:
                return [obj[diff], i]
            obj[nums[i]] = i
        
        return False
        
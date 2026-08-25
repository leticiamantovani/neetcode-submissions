class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        for i in range(len(nums)):
            diff = target - nums[i]
            j = i + 1
            while j < len(nums):
                if nums[j] == diff:
                    return [i, j]
                else:
                    j += 1
        return []
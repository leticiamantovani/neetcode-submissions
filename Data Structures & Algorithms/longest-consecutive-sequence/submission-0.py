class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums:
            return 0

        nums.sort()

        max_res = 1
        i = 0

        while i < len(nums):
            j = i + 1
            res = 1

            while j < len(nums):
                if nums[j] == nums[j - 1]:
                    j += 1
                    i = j - 1
                    continue

                if nums[j] == nums[i] + 1:
                    res += 1
                    i = j
                    j += 1
                else:
                    break

            if res > max_res:
                max_res = res

            i += 1

        return max_res

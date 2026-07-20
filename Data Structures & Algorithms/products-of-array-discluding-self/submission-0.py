class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        i = 0
        res = []

        while i < len(nums):
            j = 0
            product = 1
            while j < len(nums):
                if i != j:
                    product *= nums[j]
                j += 1
            res.append(product)
            i += 1

        return res

        
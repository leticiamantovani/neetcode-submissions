class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        nums = {}
        for i in range(len(strs)):
            word = "".join(sorted(strs[i]))
            if word in nums:
                nums[word].append(strs[i])
            else:
                nums[word] = [strs[i]]
        
        return list(nums.values())
        
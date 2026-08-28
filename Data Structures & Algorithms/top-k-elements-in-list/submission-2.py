class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        obj = {}

        for num in nums:
            if num in obj:
                obj[num] += 1
            else:
                obj[num] = 1
        
        new_obj = sorted(obj, key=obj.get)

        return new_obj[-k:]

        
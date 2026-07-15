class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        obj = {}

        for num in nums:
            obj[num] = obj.get(num, 0) + 1
        
        arr = []

        for key, value in obj.items():
            arr.append([value, key])

        arr.sort()

        res = []
        while len(res) < k:
            res.append(arr.pop()[1])
        return res

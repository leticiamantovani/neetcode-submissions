class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        i = 0
        y = len(numbers) - 1

        while i < y:
            sum = numbers[i] + numbers[y]
            if sum == target:
                return [i + 1, y + 1]
            elif sum < target:
                i += 1
            else:
                y -= 1
        
            


class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        max_seq = 0
        obj = set(nums)

        for num in obj:
            if (num - 1) not in obj:
                current_num = num
                current_streak = 1
            
                while (current_num + 1) in obj:
                    current_num += 1
                    current_streak += 1

                max_seq = max(max_seq, current_streak)

        return max_seq

class Solution:
    def maxArea(self, heights: List[int]) -> int:
        left = 0
        right = len(heights) - 1
        area = 0

        while left < right:
            w = right - left
            h = min(heights[right], heights[left])
            new_area = w * h

            if area < new_area:
                area = new_area

            if heights[left] < heights[right]:
                left += 1
            else:
                right -= 1
        return area


        
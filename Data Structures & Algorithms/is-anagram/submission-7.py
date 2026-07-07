class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        newS = sorted(s)
        newT = sorted(t)

        sortedS = "".join(newS)
        sortedT = "".join(newT)

        if sortedT == sortedS:
            return True
        return False
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        objS = {}
        objT = {}

        for char in s:
            if char in objS:
                objS[char] = objS[char] + 1
            else:
                objS[char] = 1

        for char in t:
            if char in objT:
                objT[char] = objT[char] + 1
            else:
                objT[char] = 1
        
        if objS == objT:
            return True
        return False
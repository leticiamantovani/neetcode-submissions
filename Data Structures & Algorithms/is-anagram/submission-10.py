class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        objT, objS = {}, {}

        for i in range(len(s)):
            objT[t[i]] = objT.get(t[i], 0) + 1
            objS[s[i]] = objS.get(s[i], 0) + 1

        return objT == objS
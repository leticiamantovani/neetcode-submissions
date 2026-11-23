class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        objS, objT = {}, {}

        if len(s) != len(t):
            return False

        for i in range(len(s)):
            objS[s[i]] = objS.get(s[i], 0) + 1
            objT[t[i]] = objT.get(t[i], 0) + 1

        return objS == objT

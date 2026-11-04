class Solution:
    def isAnagram(self, s: str, t: str) -> bool:

        if len(s) != len(t):
            return False

        obj_t = {}
        obj_s = {}


        for i in range(len(s)):
            obj_t[t[i]] = obj_t.get(t[i], 0) + 1
            obj_s[s[i]] = obj_s.get(s[i], 0) + 1

        return obj_t == obj_s
                   

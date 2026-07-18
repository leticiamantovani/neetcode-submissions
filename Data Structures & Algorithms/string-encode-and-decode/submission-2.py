class Solution:

    def encode(self, strs: List[str]) -> str:
        code = ""
        for str in strs:
            code += f"{len(str)}#{str}"
        return code


    def decode(self, s: str) -> List[str]:
        res = []
        i = 0

        while i < len(s):
            j = i + 1
            while s[j] != "#":
                j += 1
            leng = int(s[i:j])
            res.append(s[j + 1: j + 1 + leng])
            i = leng + 1 + j
        return res
            
            
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        obj = {}
        res = []

        for word in strs:
            sorted_word = "".join(sorted(word))
            if sorted_word not in obj:
                obj[sorted_word] = []
            obj.get(sorted_word, []).append(word)
        
        for value in obj.values():
            res.append(value)
        
        return res



        
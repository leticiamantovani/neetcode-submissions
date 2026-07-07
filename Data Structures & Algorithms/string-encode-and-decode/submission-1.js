class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ""

        for(const word of strs){
            let w = word.length +  "#" + word
            res += w
        }   

        return res  

    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const arr = []
        let i = 0

        while(i < str.length){
            let j = i

            while(str[j] !== "#"){
                j++
            }

            let length = parseInt(str.slice(i, j))
            let start = j + 1
            let end = start + length

            let word = str.slice(start, end)

            arr.push(word)
            
            i = end

        }
        return arr
    }    
}

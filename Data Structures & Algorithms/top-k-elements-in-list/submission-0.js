class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = new Map();
        const freq = Array.from({ length: nums.length + 1 }, () => []) // [ , 1, 2, 3, 4]
        // nums = [1,1,2,3,3]
        // k = 2


        for(const num of nums){
            obj.set(num, (obj.get(num) || 0) + 1);
        }

        for(const [key, value] of obj.entries()){
            freq[value].push(key)
        } // [[], [2], [1, 3], [], []]

        const res = []

        for(let i = freq.length - 1; i > 0; i--){
            for(const knum of freq[i]){
                res.push(knum)

                if(res.length === k){
                    return res
                }

            }

        }

    }
}

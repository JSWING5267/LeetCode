/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = {}

    for(let i=0 ; i<nums.length ; i++){
        if(!count[nums[i]]) count[nums[i]]=0
        count[nums[i]]++;
    }
    let max = Math.max(...Object.values(count))
    return parseInt(Object.keys(count).find((key) => count[key] === max))
};
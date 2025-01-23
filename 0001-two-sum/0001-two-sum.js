/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let check = new Map();

    for(let i=0 ; i<nums.length ; i++){ 
        if(!check.has(target-nums[i])){
            check.set(nums[i],i)
        }
        else{
            return [check.get(target-nums[i]),i]
        }
    }
};
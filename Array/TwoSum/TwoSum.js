/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = new Map(); // Create a new Map

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]; // Find the required number

        if (numMap.has(complement)) { // Check if the complement exists in the Map
            return [numMap.get(complement), i]; // Return indices
        }

        numMap.set(nums[i], i); // Store the current number with its index
    }

    return []; // If no solution is found (shouldn't happen with valid input)
};

// Test case
//console.log(twoSum([2, 5, 5, 11], 10)); // Output: [1, 2]


var twoSum = function(nums, target) {
    let indexArray = []
     for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i+1; j < nums.length; j++) {
            sum = nums[i] + nums[j]
            if (sum == target) {
                indexArray.push(i);
                indexArray.push(j);
                return indexArray;
            }
        }
     }
};

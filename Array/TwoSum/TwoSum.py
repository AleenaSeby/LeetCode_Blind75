from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        prevMap = {}  # Dictionary to store {value: index}

        for i, n in enumerate(nums):
            diff = target - n  # Compute the complement

            if diff in prevMap:  # Check if complement exists in the dictionary
                return [prevMap[diff], i]  # Return indices

            prevMap[n] = i  # Store the current number with its index

        return []  # Return empty list if no solution is found

# Create an instance of Solution
sol = Solution()

# Test the function with an example input
nums = [2, 5, 5, 11]
target = 10
result = sol.twoSum(nums, target)

# Print the output
print(result)  # Expected Output: [1, 2]

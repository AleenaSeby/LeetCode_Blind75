def maxProfit(prices):
    min_price = float('inf')  # Step 1: Initialize min_price to a very large value
    max_profit = 0            # Step 2: Initialize max_profit to 0

    for price in prices:  # Step 3: Loop through each day's price
        min_price = min(min_price, price)  # Update min_price if a lower price is found
        max_profit = max(max_profit, price - min_price)  # Calculate the profit and update max_profit

    return max_profit  # Step 4: Return the maximum profit found

# Example usage:
prices1 = [7,1,5,3,6,4]
prices2 = [7,6,4,3,1]
print(maxProfit(prices1))  # Output: 5
print(maxProfit(prices2))  # Output: 0

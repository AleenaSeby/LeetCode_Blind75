/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;  // Track the minimum price seen so far
     let maxProfit = 0;        // Track the maximum profit
 
     for (let price of prices) {
         minPrice = Math.min(minPrice, price);  // Update minimum price
         maxProfit = Math.max(maxProfit, price - minPrice);  // Update max profit
     }
 
     return maxProfit;
 };
 
 
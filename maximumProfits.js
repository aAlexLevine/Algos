//Write a function that takes the list
//and returns the highest profit possible
//from one purchase and one sale of the stock.

// getMaxProfit([10, 7, 5, 8, 11, 9]) -> 6

//Quadratic 0(n^2)
function getMaxProfit(prices) {
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    let curr = prices[i];
    let futurePrices = prices.slice(i + 1);
    let highestPrice = Math.max(...futurePrices);
    let profit = highestPrice - curr;
    if (profit > max) {
      max = profit;
    }
  }
  return max;
}

//Linear O(n)
function getMaxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];
    minPrice = Math.min(minPrice, currentPrice);
    maxProfit = Math.max(maxProfit, currentPrice - minPrice);
  }
  return maxProfit;
}
//keep track of smallest price to maximize profit
//if current price offers larger profit that is the new max profit
//if current price is smaller than the smallest price so far, that is the new buy in price
//this ensures we always have the smallest number matched against future sell prices

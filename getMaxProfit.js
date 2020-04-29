/*
 Writing programming interview questions hasn't made me rich yet ... so I might give up and start trading Apple stocks all day instead.

First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:

    The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
    The values are the price (in US dollars) of one share of Apple stock at that time.

So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

For example:

  const stockPrices = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)

No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.
*/

// my solution -> too much work? just need the difference between the high and low, not all the numbers inbetween
// function getMaxProfit(stockPrices) {
//   if (stockPrices.length <= 1) throw new Error('To calculate profit, we need at least two price points.');
//   // define max profit
//   let maxProfit = -Infinity;

//   // var to hold the running total
//   let currentTotal = 0;

//   for (let i = 1; i < stockPrices.length; i++) {
//     currentTotal += stockPrices[i] - stockPrices[i - 1];

//     if (currentTotal > maxProfit) {
//       maxProfit = currentTotal;
//     }

//     if (currentTotal < 0) {
//       currentTotal = 0;
//     }
//   };

//   return maxProfit;
// }


// better solution
function getMaxProfit(stockPrices) {
  if (stockPrices.length <= 1) throw new Error('To calculate profit, we need at least two price points.');
  // define max profit
  let maxProfit = stockPrices[1] - stockPrices[0];
  let minPrice = stockPrices[0];

  for (let i = 1; i < stockPrices.length; i++) {
    // check to see if we make a higher profit selling here
    maxProfit = Math.max(maxProfit, stockPrices[i] - minPrice)

    // check if we have a new min price
    if(stockPrices[i] < minPrice) minPrice = stockPrices[i];
  }

  return maxProfit;
}



console.log(getMaxProfit([9, 7, 4, 1]));
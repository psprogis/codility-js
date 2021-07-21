function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProf = 0;

    for (let i = 0; i < prices.length; ++i) {
        const currentPrice = prices[i];

        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }

        if (currentPrice - minPrice > maxProf) {
            maxProf = currentPrice - minPrice;
        }
    }

    return maxProf;
}

module.exports.maxProfit = maxProfit;

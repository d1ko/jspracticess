function getSum(prices, discount) {
    let sum = 0;
    let sella = 0;
    for (let i = 0; i < prices.length; i++) {
        sum = sum + prices[i]
    }
    sella = (sum /100)*discount;
    return sum - sella;
}
console.log(getSum([100, 200, 300], 30)); // 420 
console.log(getSum([150, 250, 150], 10) );// 495 
console.log(getSum([1000], 50)); // 500 
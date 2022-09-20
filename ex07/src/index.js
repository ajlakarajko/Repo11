function multiplyArrayFunction(myArray) {
    var newArr = [...myArray];
    var arr = [];
    var product = 1;
    var sum = 0;
    for (i = 0; i < newArr.length; i++) {
        for (j = 0; j < newArr[i].length; j++) {
            product *= newArr[i][j];
            sum += newArr[i][j];
        }
    }
    arr.push(product, sum);
    return arr;
}

multiplyArrayFunction([
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9],
]);
console.log(
    multiplyArrayFunction([
        [1, 2],
        [3, 4, 5, 6],
        [7, 8, 9],
    ])
);
module.exports = multiplyArrayFunction;

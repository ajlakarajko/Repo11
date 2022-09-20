function largestNumFromArr(arr) {
    var maxNumArray = [];
    var newArr = [...arr];
    for (i = 0; i < newArr.length; i++) {
        var max = Math.max(...newArr[i]);
        maxNumArray.push(max);
    }
    return maxNumArray;
}

[
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, 10, 18, 21],
    [72, 3, 17, 10],
];
largestNumFromArr([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, 10, 18, 21],
    [72, 3, 17, 10],
]);
console.log(
    largestNumFromArr([
        [17, 23, 25, 12],
        [25, 7, 34, 48],
        [4, 10, 18, 21],
        [72, 3, 17, 10],
    ])
);
module.exports = largestNumFromArr;

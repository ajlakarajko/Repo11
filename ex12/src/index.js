function splitArrayInGroups(arr, n) {
    var result = [];
    if (n === 3) {
        var split = arr.splice(0, n);
        var split2 = arr.splice(0, n);
        result.push(split);
        result.push(split2);
        result.push(arr);
        return result;
    }
    if (n === 2) {
        var split = arr.splice(0, n);
        var split2 = arr.splice(0, n);
        result.push(split);
        result.push(split2);
        return result;
    }
}

splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
module.exports = splitArrayInGroups;

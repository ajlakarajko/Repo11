function myBouncer(arr) {
    var newArr = [...arr];
    var falsy = [false, null, 0, "", undefined, NaN];
    var correctArr = [];
    for (i = 0; i < newArr.length; i++) {
        if (!falsy.includes(newArr[i])) {
            correctArr.push(newArr[i]);
        }
    }
    return correctArr;
}

myBouncer([null, NaN, 1, 2, undefined]);
console.log(myBouncer([null, NaN, 1, 2, undefined]));
module.exports = myBouncer;

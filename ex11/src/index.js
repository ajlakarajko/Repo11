function mySplice(arr1, arr2, n) {
    var newArr = [];
    var del = arr2.splice(n, 1, arr1.reverse());
    newArr = arr2;
    newArr.push(del);
    arr2 = Array.prototype.concat.apply([], newArr);
    return arr2;
}

mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2);
console.log(mySplice(["Dell", "Philips"], ["Samsung", "AOX", "Sony"], 2));
module.exports = mySplice;

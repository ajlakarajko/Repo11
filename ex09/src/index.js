function myMutation(arr) {
    var newArr1 = [...arr][0];
    var newArr2 = [...arr][1];
    var string1 = newArr1.toString().toLowerCase();
    var string2 = newArr2.toString().toLowerCase();
    var sum = 0;
    if (newArr1.length > newArr2.length || newArr1.length === newArr2.length) {
        for (i = 0; i < newArr2.length; i++) {
            if (string1.includes(newArr2[i].toLowerCase())) {
                sum += 1;
            }
        }
        if (sum === newArr2.length) {
            return true;
        } else {
            return false;
        }
    }
    if (newArr1.length < newArr2.length) {
        for (i = 0; i < newArr1.length; i++) {
            if (string2.includes(newArr1[i].toLowerCase())) {
                sum += 1;
            }
        }
        if (sum === newArr1.length) {
            return true;
        } else {
            return false;
        }
    }
}
myMutation(["Mary", "Aarmy"]);
console.log(myMutation(["Mary", "Aarmy"]));
module.exports = myMutation;

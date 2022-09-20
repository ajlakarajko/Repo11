// Create a monitorsListArray array here
var monitorsListArray = ["Apple", "Peach", "Berry"];
// End of monitorsListArray array
// Create a function below this line
function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    var monitorsList = [];
    for (i = 0; i < newMonitorsList.length; i++) {
        var newArr = [];
        newArr.push(newMonitorsList[i], i + 1);
        monitorsList.push(newArr);
    }
return monitorsList;
}
myMonitorsFunction(monitorsListArray);
console.log(myMonitorsFunction(monitorsListArray))
// End of creating a function
module.exports = myMonitorsFunction;
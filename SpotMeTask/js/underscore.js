
// 1.Extract action types
function getActionTypes() {
    var arrAction = [];
    var arr = taskData.actions

    for (var i = 0; i < arr.length; i++) {
        arrAction.push(arr[i].type);
    }

    return arrAction;
}

// 2.Convert actions array into an object where the key is the actions' type and the value are its params, i.e.:

function convArrToObj() {
    return _.object(_.map(taskData.actions, _.values));
}

// 3.Calculate the sum and average for the following input (non-number elements should be ignored):

var testArray = ["0", 2, 4, 6, null, [], 8, 10];
  
function sum(arr) { 
    arr = arr.filter(function(number) {
          return number > 1;
  })
  return _.reduce(arr, function(memo, num) { return memo + num}, 0); 
}

function average(arr) {
    arr = arr.filter(function(number) {
          return number > 1;
  })
  return sum(arr) / arr.length;
}

console.log(sum(testArray));
console.log(average(testArray));


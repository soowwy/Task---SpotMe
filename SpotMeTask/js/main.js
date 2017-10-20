
window.onload = function() {

// 1. Using JavaScript, add a new action of type notification, with parameters title and message (string values)
// 2. Set action property of the first action to null and remove the link property

function addActions() {
    taskData.actions.push({
        "type": "notifiaction", 
        "params": {
                "title": "message"
            }
    })

    return taskData.actions;
    
};

function paramsChange() {

    taskData.actions[0].params.action = null;
    delete taskData.actions[0].params.link;

    return taskData.actions[0].params;

}


//Insert a textarea element into the DOM and fill it with the JSON structure from the first task. 
//Bonus points if JSON in the textarea is nicely formatted.
var body = document.querySelector('body');
var txt = document.createElement('textarea');
txt.setAttribute("id", "test");
body.appendChild(txt);
document.getElementById("test").rows = "44";
document.getElementById("test").cols = "40";

var obj = JSON.stringify(taskData, undefined, 2);
document.getElementById("test").value = obj;

//Make an AJAX request to www.ipify.org API to retrieve your machine's public IP. 
//Log only the IP address to the console.

function makeReq() {
    $.ajax({
        type: "GET",
        url: "https://api.ipify.org?format=jsonp&callback",
        success: function(result) {
        var ip  = result.replace(/[{()}'":;ip]/g, '');
        console.log(ip);
        }   
    });

}


//call functions from the both tasks:

console.log(addActions());
console.log(paramsChange());
console.log(getActionTypes());
console.log(convArrToObj());
makeReq();

}


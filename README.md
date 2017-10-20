# Task---SpotMe

NB: There's no need to create complex web apps for these tasks, a simple HTML page with the code in separate .js files will suffice.
JSON
Given the following JSON structure:

{
  "_id": "E241AD11-1557-4FD3-B21F-97D0FA4230C7",
  "_rev": "13-2c82a95b6558a4c6144b58f59720edc7",
  "fp_type": "ibeacon",
  "fp_owner": "global",
  "fp_ext_id": "bstg_autogen_1445345099899_62005859",
  "uuid": "B9407F30-F5F8-466E-AFF9-25556B57FE6D",
  "major": 37100,
  "minor": 51516,
  "label": "Icy Bond",
  "actions": [
      {
          "type": "home-block",
          "params": {
              "appearance": "text",
              "action": "open-location",
              "link": {
                  "fp_type": "sponsor",
                  "fp_ext_id": "spotme"
              }
          }
      },
      {
          "type": "presence",
          "params": {
              "interval": 15
          }
      }
  ],
  "fp_last_changes": {
      "timestamp": 1445437699,
      "source": "dataloader_api",
      "host": "localhost.backstage.4pax.com"
  },
  "location": {
      "lat": -4.232423,
      "lng": 12.523098
  }
}

Tasks
1.	Using JavaScript, add a new action of type notification, with parameters title and message (string values)
2.	Set action property of the first action to null and remove the link property

________________________________________
Underscore.js
Assuming the JSON structure from the first task is loaded in the environment, perform the following tasks using only underscore.js:
Tasks
1.	Extract action types
2.	Convert actions array into an object where the key is the actions' type and the value are its params, i.e.:

{
 // ...
 "presence": {
   "interval": 15
 }
 // ...
}

3.	Calculate the sum and average for the following input (non-number elements should be ignored):

["0", 2, 4, 6, null, [], 8, 10]
Questions
1.	In the above task, what would happen if there were two actions of a same type?

________________________________________
JavaScript
Tasks
1.	Insert a textarea element into the DOM and fill it with the JSON structure from the first task. Bonus points if JSON in the textarea is nicely formatted.

NB: JSON structure should be present in the code as a JavaScript object, not a string.
2.	Make an AJAX request to www.ipify.org API to retrieve your machine's public IP. Log only the IP address to the console.


//makes http available
 var request = require('request'); 

// array of servers
var serverArray = 
  [
    {
      "url": "http://doesNotExist.boldtech.co",
      "priority": 1
      },
      {
      "url": "http://boldtech.co",
      "priority": 7
      },
      {
      "url": "http://offline.boldtech.co",
      "priority": 2
      },
      {
      "url": "http://google.com",
      "priority": 4
      }
   ];





function serverCheck(url, priority) { 
 //creates options to allow for request timeout 
 var options = { 
  url: url, 
  timeout: 5000 
 }; 
 return new Promise (
  function(resolve, reject) { 
   request(options, function(err, res) { 
    if (err) {console.log("There was an error: " + err)}; 
  
    if (res !== undefined) { 
     if (res.statusCode >= 200 && res.statusCode <= 299) { 
      console.log("response from online server is " + res.statusCode); 
      resolve({"url": url, "priority": priority}); 
     } 
    }
     
    else { 
     reject("Server is unresponsive"); 
    }//==> end of outer if/else statement 
   });//==> end of get request 
  } 
 ); 
}; 



function findServer(array) { 
 var store = []; 
 return new Promise (
  function(resolve, reject) { 
   array.forEach(function(server){ 
    serverCheck(server.url, server.priority) 
     .then(function(resolve){ 
      if (typeof resolve === "object") { 
       console.log("findServer resolve = " + JSON.stringify(resolve)); 
       store.push(resolve); 
       console.log("store = " + JSON.stringify(store)); 
       return store; 
      } 
     }) 
     .catch(function(error){ 
      console.log("Error: " + error); 
     }); 
   }); 
     resolve(store); 
   if (onlineServers.length == 0) { 
   
   reject('Error: No servers are online right now.'); 
   }
  } 
 ) 
}; 

findServer(serverArray).then(function(result) { 
 console.log("The result is " + JSON.stringify(result)); 
 }).catch(function(error){ 
  console.log("The error is " + error); 
 }); 



var http = require('http')
var urlName = require('./package.json');

// function to get server status
function findServer() {

    var data = urlName.sort((x, y) => {
        return x.priority - y.priority;
    });

    return new Promise(function (resolve, reject) {

        data.forEach(each => {       // loop through each url after sorting based on priority 
            console.log('Priority Number=', each.priority, ', URL=', each.url);

            var element = each.url;
            var request = http.get(element, (response) => {
                var { statusCode } = response;

                if (statusCode >= 200 && statusCode <= 299) {    // online server status codes
                    console.log(`Online Server: Status Code= ${statusCode} , URL=${element}`);
                    resolve(each.priority);
                }
                else {      //  server is offline
                    console.log(`Offline Server: Status Code= ${statusCode} , URL=${element}`);
                }
            });
            request.setTimeout(5000);  // set 5 second timeout for requests
            request.on('error', (err) => {    // print error message if no online servers
                console.log(`Error Message= ${err.message}`)
                reject('Server not available');
            });
        })
    });
}

findServer().then(function () {       // function call 
    console.log("Promise Resolved");
}).catch(function () {
    console.log("Promise Rejected");
});
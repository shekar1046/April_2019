const http = require('http');
const urlData = require('./package.json');

console.log(urlData);
//sorting urlData by priority number.
const info = urlData.sort(function(a,b) {
    return a.priority - b.priority;
});
console.log(`sorted data------------`, info);

//findServer() function to find the status of the given url asynchronously.
function findServer() {
    
    //iterating over the sorted urlData(json file data)
    info.forEach((item) => { 
        console.log(item.priority, item.url);
        var url = item.url;
        try {
            //get the status code of the url
            var req = http.get(url, (res) => {
                const { statusCode } = res;
                console.log(`${statusCode} for ${url}`);
                
                //check success status code
                let error;
                if (statusCode < 200 || statusCode > 299) {
                    error = new Error('Request Failed.\n' +
                                    `Status Code: ${res.statusCode}`);
                }
                else if (error) {
                    console.error(error.message);
                    // Consume response data to free up memory
                    res.resume();
                    return;
                }
                else {
                    setTimeout(() => {console.log(`server is online for , ${url}`);}, 5000);
                }
                
                /*get datain JSON format.
                res.setEncoding('utf8');
                let rawData = '';
                res.on('data', (chunk) => { 
                    console.log(chunk);
                    rawData += chunk; });
                res.on('end', () => {
                    try {
                    const parsedData = JSON.parse(rawData);
                    console.log(parsedData);
                    } catch (e) {
                    console.error(e.message);
                    }
                });*/
            }).on('error', (e) => {
                console.error(`Got error: ${e.message} for ${url}`);
            }).setTimeout(5000); //a timout of 5sec id given without blockkng
        }
        catch(e) {
            console.log(e);
        }
    });
    
};

//calling the findServer() function.
findServer();
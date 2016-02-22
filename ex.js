var port = 8080;
var http = require('http');

// Creates the http server
var server = http.createServer(function(request, response) {
    console.log("New request received!");
    
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello node World");
    response.end();
    
    console.log("Request sucessfully finished!");
});

console.log("Starting server on port ", port);
server.listen(port);


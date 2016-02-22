/**
 * Simple http service using "http" module.
 **/
var port = 8080,
    http = require('http'),
    url = require('url'),
    fs = require('fs'),
    mime = require('mime');

var server = http.createServer(function(request, response) {
    console.log("Request received!");
    
    var parsedUrl = url.parse(request.url, true);
    var fileName = getFileName(parsedUrl.pathname);
    
    if(fs.existsSync(fileName)) {
        var content = fs.readFileSync(fileName);
        response.writeHeader(200, {"Content-type" : mime.lookup(fileName)});
        response.write(content);    
    } else {
        response.writeHeader(404);
    }
    response.end();
});

server.listen(port, function() {
    console.log("Server is listening on port", port);
});

function getFileName(pathname) {
    return __dirname + pathname;
}
var http = require('http');                                             // get the http module:
var fs = require('fs');                                                 // fs module allows us to read and write content for responses!!

var server = http.createServer(function (request, response){            // creating a server using http module:
    console.log('client request URL: ', request.url);                   // see what URL the clients are requesting:
    
    if(request.url === '/') {                                           // this is how we do routing:
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});     // send data about response
            response.write(contents);                                   //  send response body
            response.end();                                             // finished!
        });
    }
    else if(request.url === '/style.css'){
        fs.readFile('style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        })
  }
    else if (request.url === "/dojo/new") {
         fs.readFile('dojo.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if (request.url === "/ninjas") {
         fs.readFile('ninjas.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else {                                                              // request didn't match anything:
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(6789);                                                    // tell your server which port to run on
console.log("Running in localhost at port 6789");                       // print to terminal window
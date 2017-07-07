var http = require('http');                                             // get the http module:
var fs = require('fs');                                                 // fs module allows us to read and write content for responses!!

var server = http.createServer(function (request, response){            // creating a server using http module:
    console.log('client request URL: ', request.url);                   // see what URL the clients are requesting:
    
    if(request.url === '/cars') {                                           // this is how we do routing:
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});     // send data about response
            response.write(contents);                                   //  send response body
            response.end();                                             // finished!
        });
    }
    else if(request.url === '/stylesheets/cars.css'){
        fs.readFile('./stylesheets/cars.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car1.jpg'){                                                                
        fs.readFile('./images/car1.jpg', function(errors, contents){   // notice we won't include the utf8 encoding
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car2.jpeg'){                                                                
        fs.readFile('./images/car2.jpeg', function(errors, contents){   // notice we won't include the utf8 encoding
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }


    else if (request.url === "/cats") {
         fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if(request.url === '/stylesheets/cats.css'){
        fs.readFile('./stylesheets/cats.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/cat1.jpeg'){                                                                
        fs.readFile('./images/cat1.jpeg', function(errors, contents){   // notice we won't include the utf8 encoding
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }


    else if (request.url === "/cars/new") {
         fs.readFile('./views/new.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    else if(request.url === '/stylesheets/new.css'){
        fs.readFile('./stylesheets/new.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        })
    }
    else {                                                              // request didn't match anything:
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
server.listen(6789);                                                    // tell your server which port to run on
console.log("Running in localhost at port 6789");                       // print to terminal window
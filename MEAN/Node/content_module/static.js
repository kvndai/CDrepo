var fs = require('fs');
module.exports = function(request, response){
    response.writeHead(200, {'Content-type': 'text/html'});
  console.log('Request', request.url);
  if(request.url === '/'){
    fs.readFile('views/index.html', 'utf8', function (errors, contents){
      response.write(contents); 
      response.end();
    });
  } else if(request.url === '/dojo.html'){
    fs.readFile('views/dojo.html', 'utf8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  } else {
      response.end('File not found!!!');
  }
};
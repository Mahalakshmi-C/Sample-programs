var http = require('http');
var fs = require('fs');
var path = require('path');
var url =require('url');

http.createServer(function (request, response) {
    
  var urlobj=request.url;
  var obj =url.parse(request.url);

    console.log(obj.pathname);
    if(obj.pathname === '/home'){
        fs.readFile('./index.html',function(error,content){
            response.writeHead(200);
            response.end(content);});
    }
    else if(obj.pathname.match("\.css")){
        var filestream = fs.createReadStream(path.join(__dirname,request.url));
        response.writeHead(200,{'Content-Type':'text/css'});
        filestream.pipe(response);    

    }
    else if(obj.pathname.match("\.js")){
        var filestream=fs.createReadStream(path.join(__dirname,request.url));
        response.writeHead(200,{'Content-Type': 'text/javascript'});
        filestream.pipe(response);
    }
    else if(obj.pathname.match("\.png")){
        var filestream=fs.createReadStream(path.join(__dirname,request.url));
        response.writeHead(200,{'Content-Type':'image/png'});
        filestream.pipe(response);
    }
    else if(obj.pathname.match("\.html")){
        var filestream=fs.createReadStream(path.join(__dirname,request.url));
        response.writeHead(200,{'Content-Type':'text/html'});
        filestream.pipe(response);
    }
  
   else  if(obj.pathname === '/example'){
        fs.readFile('./ex.html',function(error,content){
                response.writeHead(200);
                response.end(content);
        });
    }
    else{
        obj.pathname= "C:\Users\User.FULL328-WIN.001\Documents\PROJ1\index.html";
        fs.readFile('./index.html',function(error,content){
            response.writeHead(200);
            response.end(content);
    });}
    
}).listen(8125);


/**
 * two paths
 * one for index.html localhost:8080/home
 * two for ex.html localhost:8080/example
 * any other path should redirect to localhost:8080/home
 */
import http from "http";

http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-Type": "text/html",
    }),
    res.write("zay he");
    res.end();
}).listen(8080);
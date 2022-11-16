var http = require('http');
http.createServer(function(req,res){
    res.end("Olá,devs")
}



).listen(8338)
console.log("O servidor rodando!");
var http = require('http');


//1. parametre request dışarıdan gelir.
//2. parametre response ise biz yanıt olarak döneriz
http.createServer(function (req, res) {
    
    //response type text
    res.write("Hepisini gönderir!!")
    res.end()
    

}).listen(9988)

//http://localhost:9988
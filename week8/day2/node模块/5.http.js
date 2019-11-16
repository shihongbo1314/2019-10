let http = require('http');
http.createServer(function(req,res){
    if(req.url == '/love'){
         res.end('666')
    }else{
        req.end('520')
    }
   
}).listen(8000,function(){
     console.log('服务起于 8000端口')
})
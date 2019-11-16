let http = require('http');
let  url = require('url');
let {readFile} = require('../fs.promise');
http.createServer((req,res)=>{//启动服务
    let {pathname,query} = url.parse(req.url,true);//pathname 路径,query 传参
    switch (pathname) {
        case '/':
            readFile('./static/index.html').then(data=>{
                res.end(data)
            }).catch(err=>{
                res.statusCode = 500;//失败直接返回500
            })
            break;
        case '/favicon.ico':
            readFile('./static/favicon.ico').then(data=>{
                res.end(data)
            }).catch(err=>{
                res.end('666')
            })
            break;
        case '/1.js':
                readFile('./static/1.js').then(data=>{
                    res.end(data)
                }).catch(err=>{
                    res.end('666')
                })
            break;
        case '/1.css':
                readFile('./static/1.css').then(data=>{
                    res.end(data)
                }).catch(err=>{
                    res.end('666')
                })
            break;
        case '/1.jpg':
                readFile('./static/1.jpg').then(data=>{
                    res.end(data)
                }).catch(err=>{
                    res.end('666')
                })
            break;
        default:
            res.end('12345678')
            break;
    }
    // res.end('666')
}).listen(3000,function(){//3000是端口号
    console.log('服务起于 3000端口')
})

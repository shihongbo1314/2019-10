// fs 
// url.parse获取url上的参数   
// path.resolve 获取绝对路径
// http 是起服务的模块
//  _dirname   _filename
let http = require('http');
let url = require('url');
let {pathname,query,readFile} = require('./fs.promise.js');
http.createServer((req,res)=>{
    //req 存放的是请求信息
    // res 存放的是相应信息
    // 只要前端发送了请求,就会执行该函数
    // console.log(req.url) //前端请求路径;
    // console.log(req.method)//前端的请求方法
    console.log(url.parse(req.url,true));//解析前端路径
    //pathname是前端给的纯路径
    //query 是前端在路径上给的参数
    if(pathname == '/favicon.ico'){
        //前端请求的是小图标
        readFile('./1.jpg').then(data=>{
            console.log(data)
            res.end(data);
        }).catch(()=>{
            res.statusCode = 404;
            res.statusMessage = 'hello hahaha'
        })
        // res.end('./1.jpg')
    }else{
        res.end(JSON.stringify(query))
    }
   /*  res.statusCode = 404;// 给前端的状态码
    res.statusMessage = 'hello hahaha'//给前端的状态文本 */
    // res.end('hello')// 给前端响应的;
}).listen(8000,()=>{
    // 服务启动成功之后会执行该函数
    console.log("服务启动成功  端口是8000")
})
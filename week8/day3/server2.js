let http = require('http');
let  url = require('url');
let {readFile} = require('./fs.promise');
http.createServer((req,res)=>{//启动服务
    let {pathname,query} = url.parse(req.url,true);//pathname 路径,query 传参
    if(pathname == '/'){
        readFile('./static/index.html').then(data=>{
            res.end(data)
        }).catch(err=>{
            res.statusCode = 500;//失败直接返回500
            res.end('系统繁忙')
        })
    }else{
        if(/\.\w+/.test(pathname)){
            //有后缀，走的是静态资源
            readFile('./static'+pathname).then(data=>{
                res.end(data)
            }).catch(err=>{
                res.staticCode = 500;//失败直接返回500
                readFile('./static/500.html').then(data=>{
                    res.end(data)
                })
               
            })
        }
        else{
            //走接口
            getData(pathname,query,res);
        }
        
    }
}).listen(3000,function(){//3000是端口号
    console.log('服务起于 3000端口')
})

//    /list?type=dev  type=dev   返回dev.json 的内容 type =pro 返回pro.json的内容
//带后缀的 请求的是静态页面  不带后缀的请求的是接口
function getData(pathname,query,res){
    query.type = query.type || 'dev';
    if(pathname == '/list'){
        readFile('./json/'+query.type+'.json').then(data=>{
            res.end(data)
        }).catch(err=>{
            res.end('error')
        })
    }
}
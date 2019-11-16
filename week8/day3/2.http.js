let http = require('http');
let url = require('url');
let {readFile} = require('./fs.promise');

let server = http.createServer((req,res)=>{
    // cors跨域
    // res.setHeader('Access-Control-Allow-Origin','*');
    // // res.setHeader('Access-Control-Allow-Methods','post');
    // res.setHeader('set-cookie','qqqq=66666');
    // // 跨域种植cookie在application中没有体现
    let str = '';
    req.on('data',function(chunk){
        // 正在
    })
});

let port = 8000;
let init = true;
function listen(){
    let cb = null;
    if(init){
      cb=()=>{
        console.log('服务起于'+port)
      }
    }
    server.listen(port,cb);
}
listen();
server.on('error',(e)=>{
    console.log(666,e)
    if(e.code ==='EADDRINUSE'){
       //上个端口被占用
       port++;
       listen();
    }
})


/* 
    http  怎么起服务
          怎么获取前端数据(路径,参数)
          怎么设置响应头(cors跨域的设置)
          端口占用的处理
          后端的响应  res.end(给前端的信息)



*/
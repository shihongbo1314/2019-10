let express = require('express');
let {readFile,writeFile} = require('./fs.promise');
let bodyParser = require('body-parser');
let app = express();
let qs = require('qs');
app.listen(8080,function(){
    console.log('服务起于  8080')
})

app.use((req,res,next)=>{
    //这个中间件  是把读取的数据放到了req上,这样 下边的接口就可以通过req获取要用的数据了
    readFile('./package-lock.json').then(data=>{
        data = JSON.parse(data.toString());
        req.data = data.dependencies;
        //由于readFile是一个异步操作,所以我们在读取成功之后在执行next()
        next();
    }).catch(err=>{
        res.status(500)
    })

})
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', "http://localhost:8000");
    res.header('Access-Control-Allow-Credentials',true)
    next();
})
// app.use(bodyParser.json())
// app.use(bodyParser.raw())
// app.use(bodyParser.text())
// app.use(bodyParser.urlencoded({
//     extended:true
// }))
app.use((req,res,next)=>{
   let str='';
   req.on('data',(chunk)=>{
       str+=chunk;
   })
   req.on('end',()=>{
       let obj = {};
       try{
           obj = JSON.parse(str)
       }catch(error){
           obj = qs.parse(str)
       }
       req.body =obj;
       next();
   })
})
app.get('/list',function(req,res){
    //req.query  前端传给后端的参数
    // type是query中的属性;是用来获取对应的对象的
    let {type} = req.query;//query是express插件自带的
    let data = req.data;//data是我们在上边使用中间件 加上的
    res.send({
        code:0,
        data:type ? data[type] : data//前端 给了type 我们就返回对应的属性值,没给就整个对象返回
    })
})
let ary = [];
function f(req,res){
    readFile('./package-lock.json').then(data=>{
        data = JSON.parse(data);
        Object.assign(data.dependencies.my,req.body)
        return writeFile('./package-lock.json',JSON.stringify(data))
    }).then(data=>{
        res.send({
            code:0,
            data:'success'
        })
        let fn = ary.shift();
        fn && fn();
    }).catch(err=>{
        console.log(err)
        res.send({
            err:err
        })
    })
}
let timer = null;
app.post('/add',function(req,res){
    console.log(req.body)// 放置是 前端post发给后台的数据
    ary.push(()=>{
        f(req,res)
    })
    clearTimeout(timer)
    timer = setTimeout(() => {
        let fn = ary.shift();
        fn && fn();
    }, 100);
    
})

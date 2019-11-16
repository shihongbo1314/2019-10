// 实现一个登录的功能
let express = require('express');
let qs = require('qs');
let session = require('express-session');
let {readFile,writeFile} = require('./fs.promise');
let app = express();
app.listen(8000,function(){
    console.log("后端接口服务 起于 8000")
})

// 解决跨域
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','http://localhost:3000')
    res.header('Access-Control-Allow-Credentials',true)
    res.header('Access-Control-Allow-Headers',"Content-Type,X-Agent,X-Token,X-Legacy-Token,X-Legacy-Uid,X-Legacy-Device-Id,X-Legacy-New-Token,X-Request-Id")
    req.method == 'OPTIONS' ? res.send('OK') : next();
})

// 把post请求的参数 转成普通对象 存放到req.body上
app.use((req,res,next)=>{
    let str = '';
    req.on('data',(chunk)=>{
        str += chunk;
    })
    req.on('end',()=>{
        let obj = {};
        try {
            obj = JSON.parse(str)
        } catch (error) {
            obj = qs.parse(str)
        }
        req.body = obj;
        next();
    })
})


// 把读取数据的操作放到中间件处理
app.use((req,res,next)=>{
    readFile('./user.json').then(data=>{
        req.data = JSON.parse(data);
        next()
    }).catch(err=>{
        // 读取失败 给前端500
        res.status(500);
        res.send('');
    })
})
app.use(session({
    //在这个中间件之后 会在 req上多了一个 session的属性
    name:'qqq',//默认 connect.sid
	secret: 'myqqq',
	saveUninitialized: false,
	resave: false,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 30
	}
}));
app.post('/reg',function(req,res){
    // 实现注册接口
    let {username,password} = req.body;
    let data = req.data;
    let bol = data.some(item=>{
        return item.username === username
    })
    //bol是true; 证明之前有这个人
    if(bol){
        res.send({
            code:1,
            msg:'already has this man'
        })
        return;
    }
    // Object.assign(data,req.body);// datajiu
    data.push(req.body);
    writeFile('./user.json',JSON.stringify(data)).then(data=>{
        // 写入成功
        res.send({
            code:0,
            data:'success'
        })
    }).catch(()=>{
        res.send({
            code:1,
            data:'fail'
        })
    })
})
app.post('/login',function(req,res){
    let {username,password} = req.body;
    let bol = req.data.some(item=>{
        return item.username == username && item.password == password
    })
    if(bol){
        // 登录成功， 需要后端给前端种植一个cookie
        req.session.username = username;//咱们后端在session上种植了一个属性
        console.log(req.session)
        res.send({
            code:0,
            data:{
                name:username
            }
        })
    }else{
        res.send({
            code:2,
            msg:'用户名密码错误'
        })
    }
})
app.get('/info',function(req,res){
    console.log(req.session.username);
    //登录成功之后,后端会给前端种植一个cookie;
    //以后每一次请求后台接口的时候,后端都会根据这个cookie值,去判断前端是否处于登录期
    //后端的具体写法就是  根据登录时 在session上设置的属性 还有没有来进行判断
    if(req.session.username){
        res.send({
            code:0,
            data:{
               name:req.session.username,
               sex:0,
               age:18
            }
        })
    }
    res.send({
        code:0,
        data:'hello'
    })
})

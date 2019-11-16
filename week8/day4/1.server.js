let express = require('express');
let qs = require('qs');
// express是node.js的一个库，相当于JS的jQuery
let app = express();
app.listen(8000, function () {
    console.log('服务起于 8000端口');
})

// express 使用中间件
app.use((req, res, next) => { // 不执行next，下一个use将不会执行
    req.qqq = 123456789;
    next();
})
app.use((req, res, next) => {
    console.log(req.qqq);
    res.header('ha', 'haha');
    next();
})
app.use(express.static('./static')); // express.static是express提供的一个访问静态页面的方法  默认找index.html的文件
app.get('/list', function (req, res) {
    // 该回调函数 只有当前端请求的是/list这个路径 并且是get方法的时候 才会执行
    console.log(req.query);
    res.send({
        qqq: req.qqq,
        data: req.query
    })
})
app.post('/add', function (req, res) {
    let str = '';
    req.on('data', function (chunk) {
        str += chunk;
    })
    req.on('end', function () {
        let obj = {};
        try {
            obj = JSON.parse(str)
        } catch (error) {
            obj = qs.parse(str)
        }
        // console.log(str, str.a);
        // console.log(qs.parse(str));
        console.log(obj);
        res.send({
            code: 0,
            data: 'success'
        })
    })
})


let path = require('path');

let url = require('url');
//可以生成绝对路径
console.log(path.resolve('./es6'))
console.log(path.resolve(__dirname,'./qqq'))


// url.parse 后台一般用来获取url上的参数 
let str = 'http:baidu.com?a=12&b=13&c=14#qqq';
console.log(url.parse(str,true).query.a)
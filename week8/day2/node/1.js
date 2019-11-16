//node 的模块化  是按照commonjs 规范
let qqq = require('./2.js')
console.log(qqq);
qqq.f();
// 每一个js文件对于node来说都是一个大闭包
//require  _dirname   _filename    module.exports   exports
//以上五个  都是属于当前js文件的私有变量;
//require是用来导出文件
//module.exports和exports都是用来导出内容的
//_dirname 是当前文件所在文件夹的绝对路径
// _filename 是当前文件的绝对路径
console.log('文件夹路径',_dirname)
console.log('文件夹路径',_filename)


 // npm i less less-loader --save-dev
 // 
let my = require('./fs.promise');
my.unlink('./qqq/3.txt').then(data=>{
    console.log(data)
}).catch(err=>{
    console.log(err)
})


let p1 = my.unlink('./qqq/1.txt')
let p2 = my.unlink('./qqq/2.txt')
Promise.all([p1,p2]).then(data=>{
    //都删除成功之后
    console.log('所有文件删除成功')
    return my.rmdir('./qqq').then()
}).then(data=>{
    console.log('删除文件夹成功')
}).catch(err=>{
    console.log('操作失败',err)
})
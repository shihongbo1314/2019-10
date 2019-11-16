function on(ele, type, f) {
    if (/^my/.test(type)) {
        // 不是原生事件  我们自己创造一个事件池 // 人为规定my开头的都是自定义事件
        ele[type] = ele[type] || [];
        ele[type].push(f);
    } else {
        // 原生事件 我们不需要造事件池
        type = type.replace(/^on/,'');// 防止 传入的参数带这个on
        ele.addEventListener(type, f, false);
    }
}
function fire(ele, type, ...arg){
    if (/^my/.test(type)) {
        // 不是原生事件  需要我们把事件池中的事件执行
        ele[type] = ele[type] || [];
        ele[type].forEach(item=>{
            item.call(this,...arg)
        })
    } 
}

function off(ele, type, f){
    if (/^my/.test(type)) {
        // 不是原生事件  我们自己创造一个事件池 // 人为规定my开头的都是自定义事件
        ele[type] = ele[type] || [];
        let n = ele[type].indexOf(f);
        if(n != -1){
            ele[type].splice(n,1)
        }
    } else {
        // 原生事件 我们不需要造事件池
        type = type.replace(/^on/,'');// 防止 传入的参数带这个on
        ele.removeEventListener(type, f, false);
    }
}


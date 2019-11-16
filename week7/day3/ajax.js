ajax({
    method:'post',// 不是必须的  默认值是 get
    url:'./data.json',// 必须
    data:{
        // 传给后台的数据  不是必须的
        aa:123,
        b:234
    },
    async:true,// 同步异步  不是必须； 默认异步
    cache:false,// 走不走缓存  false 不走缓存； 默认走缓存 true
    headers:{
        // 设置请求头 不是必须的；
    },
    success(){},// 成功的回调函数  不是必须
    error(){} // 失败的回调函数  不是必须
})
function ajax(options){
    let {
        method='get',// 默认是 get 请求
        url,
        data={}, // 默认空对象
        async = true, // 默认异步
        cache = true,// 默认走缓存
        headers = {},
        success,
        error
    } = options;
    method = method.toLowerCase();// 防止大写

    // 处理data;
    let searchStr = '';
    for(let k in data){
        searchStr += `${k}=${data[k]}&`;
    }
    searchStr = searchStr.replace(/&$/,'');// 'a=12&b=13' 
    if(method == 'get'){
        // 判断之前的url上有没有问号
        if(url.indexOf('?') == -1){
            url += '?'+searchStr;
        }else{
            // ./data.json?qqq=123&
            url += '&'+searchStr;
        }
        if(!cache){
            // 不走缓存
            url += `&_=${Date.now()}`
        }
    }

    let xhr = new XMLHttpRequest();
    xhr.open(method,url,async);
    xhr.onreadystatechange = function(){
         if(xhr.readyState == 4){
             if(/200|304/.test(xhr.status)){
                 let data;
                 try {
                     data = JSON.parse(xhr.response);
                 } catch (error) {
                    data = xhr.response;
                 }
                 success && success()
             }else if(/[45]\d{2}/.test(xhr.ststus)){
                 error && error(xhr);
             }
         }
    }
    headers = Object.assign({
        'content-type':'application/x-www-form-urlencoded'
    },headers)
    for(let k in headers){
        xhr.setRequestHeader(k,escape(headers[k]));// 为了处理中文
    }
    xhr.send(searchStr)
}

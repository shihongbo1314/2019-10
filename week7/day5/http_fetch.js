function http(url,options={}){
    let {
        method='get',
        data={},
        headers = {},
        credentials = 'same-origin'
    } = options;
    let isGet = method.toLowerCase() == 'get';
    if(isGet){
        // 若是get请求 则需要我们把data中的参数补成url后边的search字符串
        let str = '';
        for(let k in data){
            str += `${k}=${data[k]}&`
        }
        str = str.replace(/&$/,''); // a=12&b=13
        url = url.indexOf('?')==-1 ? url+'?'+str : url+'&'+str;
    }
    return fetch(url,{
        method:method,
        body:isGet ? null : JSON.stringify(data),
        headers,
        credentials
    }).then((data)=>{
        if(/[45]\d{2}/.test(data.status)){
            throw Error(`${data.status} ${data.statusText}`)
        }
        return data.json();
    })
}
http.get = function(url,data){
    return http(url,{
        method:'get',
        data
    })
}
http.post = function(url,data){
    return http(url,{
        method:'post',
        data
    })
}
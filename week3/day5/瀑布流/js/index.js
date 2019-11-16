
//先去获取数据
function getData() {
    var xhr = new XMLHttpRequest();
    xhr.open('get', './data.json', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
            //代表请求成功
            console.log(JSON.parse(xhr.response))
            let data = JSON.parse(xhr.response);
            render(data);
        }
    }
    xhr.send();
}
getData()

// 渲染数据
let body = document.getElementsByClassName('body')[0],
    olis = document.getElementsByTagName('li');
function render(data) {
    // data 是后台给的数组
    // 循环数组 拼接字符串  把拼接好的字符串放到页面中
    let str = '';
    data.forEach((item) => {
        let { pic, author, desc, height } = item;
        str += `
                 <div class="img_box">
                 <img src="./img/6.jpg" alt="">
                 <p class="desc">所谓伊人,在水一方</p>
                 <p class="author">施红波</p>
                </div>`
       //str 是新拼接出来的一个块   我们需要决定的是 这个块放到哪个li中
    })
}
let data = null;
let olis = document.getElementsByTagName('li');// getElement系列获取到的元素集合是有映射关系的;当页面上增加了或者减少了对应的元素;该变量会跟着默认能改变
let olis2 = document.querySelector('li');//query系列获取到的元素 没有这种映射关系,获取的时候是哪些元素,那么对应的变量就永远是哪些变量;
console.log(olis2)
console.log(olis)
let xhr = new XMLHttpRequest();
xhr.open('get', './data.json', true);//true代表异步; false代表同步
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(JSON.parse(xhr.response));
        data = JSON.parse(xhr.response)
        render(data);//请求成功之后再去渲染数据
        myBind();
       
        
    }
}
xhr.send();

let box = document.getElementById('box'),
  timeBtn = document.getElementById('timeBtn'),
  priceBtn = document.getElementById('priceBtn'),
  commentBtn = document.getElementById('commentBtn');
function render(ary) {
    // 把数据渲染到页面上
    console.log(ary); // ary就是后台传过来的数组;
    let str = '';
    ary.forEach(item => {
        let {img,title,price,num}=item;
        // item 就是数组中每一个对象
        str += `   <li qqq=${price}>
         <div class="imgBox">
             <img src="${img}" alt="">
         </div>
         <div class="til">${title}</div>
         <div class="desc">${title}</div>
         <div class="price">${price}</div>
         <div class="botBox">
             <div>选购</div>
             <div>${num}评价</div>
         </div>
     </li>`;
     
    });
    //str 就是拼接好的字符串;
    box.innerHTML = str;
}
function myBind(){
    timeBtn.onclick = function(){
        let ary = [...olis];
        ary.sort((a,b)=>{
            return a.getAttribute('qqq') - b.getAttribute('qqq')
        })
        ary.forEach(item=>box.appendChild(item))
        box.appendChild(olis[0]);//把第一个LI元素 添加到 box 的末尾;
        // 若添加的是页面上已经存在的元素, 那么 只是相当于改变一下元素的位置,不会新增元素;
        //Dom的回流,当页面的结构发生改变时,需要浏览器重新渲染页面;
        //Dom的重绘,结构不发生改变,只是样式需要修改的时候,也就是需要重新渲染对应的css
    }
}
var a = document.createDocumentFragment()//文档碎片
class Banner {
     constructor(idSelector,url) {//es6私有属性在constructor里面写
          this.url = url;
          this.box = document.querySelector(idSelector);
          this.ul = this.box.querySelector('.img_box ul');
          this.tipBox = this.box.querySelector('.tip_box');
          this.tips = this.box.getElementsByClassName('tip');
          this.leftBtn = this.box.querySelector('.left_btn');
          this.rightBtn = this.box.querySelector('.right_btn');
          this.n = 0;
          this.timer = null;
          this.getData();//获取数据
     }
     getData() {
          let xhr = new XMLHttpRequest();
          var _this= this;//也可写成es6箭头函数保证this
          xhr.open('get',this.url, true);
          xhr.onreadystatechange = function () {
               if (xhr.readyState == 4 && /200|304/.test(xhr.status)) {
                    let data = JSON.parse(xhr.response);
                    console.log(data);
                    _this.render(data);
                    _this.move(); //数据渲染完成之后再去开启动画
                    _this.tipClick();
                    _this.bindEvent();
               }
          }
          xhr.send()
     }
     
     render(data) {
          data = data || [];
          let str = '';
          let tipStr = '';
          data.push(data[0]);//在数组的末尾添加了 第一项 ;是为了在最后补一张一样的图;
          data.forEach((item, index) => {
               let { img, desc } = item;
               str += `<li>
              <img src="${img}" alt="">
              <p class="desc">${desc}</p>
          </li>`
               if (index !== data.length - 1) {
                    //渲染小点
                    if (index == 0) {
                         //只有第一项  才默认有current类名
                         tipStr += `<span class="tip current"></span>\n`
                    } else {
                         tipStr += `<span class="tip"></span>\n`
                    }
               }
          })
          this.tipBox.innerHTML = tipStr;
          this.ul.innerHTML = str;
          this.ul.style.width = data.length * 590 + 'px';//更新盒子的宽度
     }
     move() {
          this.timer = setInterval(() => {
               this.change();
          }, 1500);
     }
     change() {
          this.n++;//n = 4 的时候显示的是 伪 第一张
          if (this.n == (this.tips.length + 1)) {
               this.ul.style.transition = 'left 0s ease-in';
               this.ul.style.left = 0 + 'px';//让图片直接闪到第一张;紧接着要向第二张图移动
               this.n = 1;
          }
          this.tipClass(this.n)
          // animate(ul,{left:-590*n},500,function(){console.log(666)})
          setTimeout(() => {
               // 同步情况下, 代码从上到下执行的时候,只会让下边的代码起作用;上边代码会被覆盖,
               //异步情况下,异步代码会忽略到,同步先执行,完事之后异步再去执行
               this.ul.style.transition = 'left 0.5s ease-in';
               this.ul.style.left = -590 * this.n + 'px';
          }, 10)

     }
     tipClass(m) {
          m = m >= this.tips.length ? 0 : m;//当n指向了伪第一张的时候,我们要让第一个高亮
          for (let i = 0; i < this.tips.length; i++) {
               this.tips[i].className = 'tip'
          }
          this.tips[m].className = 'tip current';
     }
     bindEvent() {
          //负责绑定事件
          this.box.onmouseenter = () =>{
               clearInterval(this.timer);
          }
          // 划出盒子时  重启动画;
          this.box.onmouseleave = () =>{
               this.move();
          }
          this.leftBtn.onclick = this.debounce(()=> {
               this.change()
          })
          this.rightBtn.onclick =  ()=> {
               this.n--;
               //n == -1的 我们要做什么操作?
               if (this.n < 0) {
                    this.ul.style.transition = 'none';//闪到最后一张,需要清除过渡动效
                    this.ul.style.left = -590 * (this.tips.length) + 'px';
                    this.n = this.tips.length - 1;
               }
               this.tipClass(this.n);
               // animate(ul,{left:-590*n},500,function(){console.log(666)})\
               setTimeout(() => {
                    // 同步情况下, 代码从上到下执行的时候,只会让下边的代码起作用;上边代码会被覆盖,
                    //异步情况下,异步代码会忽略到,同步先执行,完事之后异步再去执行
                    this.ul.style.transition = 'left 0.5s ease-in';
                    this.ul.style.left = -590 * this.n + 'px';
               }, 10)

          }
     }
     tipClick(){//点击小点跳转动画
          for(let i = 0;i < this.tips.length;i++){
              this.tips[i].onclick =()=>{
                  this.n = i;
                  this.tipClass(this.n);
                  // animate(ul,{left:-590*n},500,function(){console.log(666)})
                  this.ul.style.transition = 'left 0.5s ease-in';
                  this.ul.style.left = -590*this.n + 'px';
              }
          }
      }
     debounce(fn, wait = 200) {
          var timer = null;
          return function () {
               if (timer == null) {
                    fn.apply(this, arguments);
                    timer = 0;
                    return;
               }
               clearTimeout(timer);
               timer = setTimeout(() => {
                    fn.apply(this, arguments)
               }, wait)
          }
     }
}



// new Banner('#box');
// new Banner('#box2');
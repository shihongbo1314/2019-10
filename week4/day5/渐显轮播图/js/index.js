let $ul = $('#box .img_box ul'),
    $tipBox = $('#box .tip_box'),
    $lis = $('#box .img_box ul li'),
    $tips = $('#box .tip_box .tip'),
    $box = $('#box'),
    $leftBtn = $('#box .left_btn'),
    $rightBtn = $('#box .right_btn');
let n = 0,
    timer = null;

function getData() {
    $.ajax({
        url: './data.json',
        success: function (data) {
            render(data);
            init();
        }
    })
}
getData();

function render(ary) {
    let str = '';
    let tipStr = '';
    ary.forEach((item, index) => {
        str += `<li>
        <img src="${item.img}" alt="">
        <p>${item.desc}</p>
        </li>`
        tipStr += (index == 0 ? ` <span class="tip current"></span> ` : ` <span class="tip"></span> `)
    })
    $ul.html(str);
    $tipBox.html(tipStr);
}

function init() {
    $lis = $('#box .img_box ul li'); // 更新$lis
    $tips = $('#box .tip_box .tip')
    $lis.eq(0).siblings().hide();
    autoMove();
}

function autoMove() {
    timer = setInterval(() => {
        move();
    }, 5000)
}

function move() {
    n++;
    if (n >= $lis.length) {
        n = 0;
    }
    autoFocus();
    // $lis.eq(n).show().siblings().hide();
    $lis.eq(n).css({
        opacity: 0
    }).show().animate({
        opacity: 1
    }, 300).siblings().animate({
        opacity: 0
    }, 300, function () {
        $lis.eq(n).siblings().hide();
    })
}

function autoFocus() {
    $tips.eq(n).addClass('current').siblings().removeClass('current');
}

$box.on('mouseenter', function () {
    clearInterval(timer);
})
$box.on('mouseleave', function () {
    autoMove();
})
$rightBtn.on('click', function () {
    move();
})
$leftBtn.on('click', function () {
    n--;
    if (n < 0) {
        n = $lis.length - 1;
    }
    n--;
    move();
})
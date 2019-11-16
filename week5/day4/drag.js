class Drag {//类里的this都是实例，需要自己去人为的保证，不然this指向会很乱，一会儿是实例，一会儿是元素
    constructor(idN,n) {
        this.n = n ? n : Infinity;
        this.m = 0;
        this.box = document.getElementById(idN);
        this.Start = this.start.bind(this);
        this.Move = this.move.bind(this);
        this.End = this.end.bind(this); // 这三行是为了保证this是当前实例
        /* this.box.addEventListener('mousedown',this.Start,false); */
        on(this.box, 'mousedown',this.Start)
    }
    start(e) {
        //this是当前的实例
        this.startX = this.offset(this.box).l;
        this.startY = this.offset(this.box).t;// 盒子的初始位置
        this.spx = e.pageX;
        this.spy = e.pageY;
        // addZIndex(this.box);
        // bigZIndex(this.box)
        on(document,'mousemove',this.Move);
        
        on(document,'mouseup', this.End);
        fire(this.box,'myIndex',this.box);
        this.startP = e.pageX
    }
    move(e) {
        //this是当前实例
        this.box.style.left = e.pageX - this.spx + this.startX + 'px';
        this.box.style.top = e.pageY - this.spy + this.startY + 'px';
    }
    end(e) { // 鼠标抬起执行的函数
        off(document,'mousemove', this.Move);
        off(document,'mouseup', this.End);
        this.box.speed = e.pageX - this.startP;
        fire(this.box,'myfly',this.box)
        // backZIndex(this.box)
        // 做拖拽次数的判断   为什么不能把这个判断放在constructor里，是因为 this.m是在end时鼠标抬起时加数字的，所以constructor里this.m 一直是0的
        this.m++
        if (this.m >= this.n) {
            this.clear()
        }
    }
    clear () {
        off(this.box,'mousedown',this.Start)
    }
    offset(ele) {
        let l = ele.offsetLeft,
            t = ele.offsetTop;
        let temp = ele.offsetParent;
        while (temp) {
            l += temp.offsetLeft + temp.clientLeft;
            t += temp.offsetTop + temp.clientTop;
            temp = temp.offsetParent;
        }
        return {
            l,
            t
        }
    }
}

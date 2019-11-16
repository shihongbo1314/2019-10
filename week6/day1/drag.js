class Drag{
    constructor(id,option){
        this.option = option || {};
        this.box = document.getElementById(id);// 要操作的元素
        this.START = this.start.bind(this);
        this.MOVE = this.move.bind(this);
        this.END = this.end.bind(this);
        this.box.addEventListener('mousedown',this.START,false);
    }
    start(e){
        this.startX = this.offset(this.box).l;
        this.startY = this.offset(this.box).t;// 盒子的初始位置

        this.startPx = e.pageX;
        this.startPy = e.pageY;// 鼠标的初始位置；

        document.addEventListener('mousemove',this.MOVE,false)
        document.addEventListener('mouseup',this.END,false)
    }
    move(e){
        let l = this.startX + e.pageX - this.startPx,
            t = this.startY + e.pageY - this.startPy;// l t 是盒子当前的位置
        let ary = this.option.range;
        if(this.option.range){
            l = l <= ary[0] ? ary[0] : (l >= ary[2] ? ary[2] : l)
            t = t <= ary[1] ? ary[1] : (t >= ary[3] ? ary[3] : t)
        }
        this.box.style.left = l + 'px';
        this.box.style.top = t + 'px';    
    }
    end(){
        document.removeEventListener('mousemove',this.MOVE,false)
        document.removeEventListener('mouseup',this.END,false)
    }
    offset(ele) {
        let t = ele.offsetTop,
            l = ele.offsetLeft,
            temp = ele.offsetParent;
        while (temp) {
            t += temp.offsetTop + temp.clientTop;
            l += temp.offsetLeft + temp.clientLeft;
            temp = temp.offsetParent
        }
        return {
            l,
            t
        }
    }
}
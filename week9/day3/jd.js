Vue.filter('money',function(val){
    return "¥"+(val/100).toFixed(2)
})
new Vue({
    el: '#app',
    data: {
        name: "珠峰",
        datalist:[],
        total:0,
        checkall:true,
        show:false,
        delIndex:null
    },
    created(){
        // 实例创建完成之后会触发该函数;   (钩子函数)
        this.getData()
    },
    methods: {
        getData() {
            fetch('./data.json').then((res) => {
                return res.json()
            }).then(data => {
                console.log(data)
                this.datalist = data;
                this.sum();
                //重置checkall属性
                this.checkall = this.data.every(item=>item.isSelect)
            }).catch((err) => {
                console.log(err)
            })
        },
        sum(){
            //求总价
            //this.datalist.filter(item=>item.isSelect) 筛选出 选中的商品
            // let ary = this.datalist.filter(item=>item.isSelect);
            // let t = 0;
            // ary.forEach(item=>{
            //     t += item.count*item.price
            // })
            // this.total = t;
            this.total = this.datalist.filter(item=>item.isSelect).reduce((prev,next)=>prev+next.count*next.price,0)
        },
        checkallOnefn(){
           this.checkall = this.datalist.every(item=>item.isSelect);
           this.sum();
        },
        checkallfn(){
            //点击全选触发的事件
            // this.checkall
            this.datalist.forEach(item=>{
                item.isSelect = this.checkall
            })
            //重新计算总价
            this.sum();
        },
        del(n){
            // this.datalist.splice(n,1);
            // this.sum();
            this.delIndex = n;
            this.show = true
        },
        cancel(){
            this.show = false
        },
        sure(){
            this.datalist.splice(this.delIndex,1);
            this.sum();
            this.show = false;
        },
        clear(){
            this.datalist =[];
            this.sum();
            this.checkall = false;
        }
        
    },
})

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
console.log(process)
//全局引入ele-ui
import ElementUI, { Form } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.filter('trans',function(val){
  let arr = val.split('|');//arr['userHandel',...]
  let obj={
    userhandle: "员工操作权",
    departhandle: "部门操作权",
    jobhandle: "职务操作权",
    departcustomer: "部门全部客户",
    allcustomer: "公司全部客户",
    resetpassword: "重置密码"
  };
    return arr.map(item=>obj[item]).join(' | ')
})
router.beforeEach((to,from,next)=>{
  //to 是要去的路径  若to的路径  用户没有该权限  那么我们不执行next即可
  let  power = localStorage.getItem('power') || '';//用户权限
  if(/^\/\w+[/]?$/.test(to.path)){
    next();
  }else if(power.indexOf(to.meta.power)!=-1){
     next()
  }else{
    next(from)//没有权限 就从哪里来 再回到哪里去
  }
  

})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

$(function(){
    //当DOM结构加载完成之后执行该函数
    $('.submit').on('click',function(e){
       let account =  $('input[type=text]').val();
       let password = $('input[type=password]').val();
       if(!account || !password){
           alert('用户名或者密码不能为空');
           return
       }
       password = md5(password);//对密码进行md5加密
       axios.post('./user/login',{
           account,password
       }).then((data)=>{
           // 登录成功
           // 1.跳转到首页
           //2.存储权限信息
            console.log(data)
            if(data.code == 0){
                // 密码正确
                alert('登录成功',{
                    handled:function(){
                        //点击关闭按钮的时候执行
                        location.href = './index.html'
                    }
                })
                //把权限信息存储到本地
                localStorage.setItem('power',data.power);
                // 把用户名存储到本地
                localStorage.setItem('username',account);
            }else{
                //密码错误
                alert('账号密码错误')
            }
       },(err)=>{
           //登录失败
           alert('系统繁忙,请稍后再试')
           console.log(err)
       })
    })
})
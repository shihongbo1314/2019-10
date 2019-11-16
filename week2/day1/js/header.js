function header(){
    var login = function(){
          console.log(name)
    }
    var weather = function(){
        console.log('好天气')
    }
    var msg = function(){
         console.log('北京欢迎你')
    }
    var name = '珠峰';
    return {
        login,
        init(){
            login();
            weather();
            msg();
        }
    }
}

    //----------------------------
    console.log(a);
    var a=12;
    function fn(){
        console.log(a);
        var a=13;
    }
    fn();
    console.log(a)

    //-------
    console.log(a);
    var a=12;
    function fn(){
          console.log(a);
          a=13
    }
    fn();
    console.log(a)
    //----------------
    var foo=1;
    function bar(){
        if(!foo){
            var foo=10;
        }
        console.log(foo);
    }
    bar();
    console.log(foo);

//----------------------------

    var n=13;
    function fn(n){
       console.log(n);
       var n=14;
       console.log(n);
    }
    fn(n);
    console.log(n)
//----------------------------
    var n = 13;
    function fn(){
         n = 15;
         console.log(n); // 15
    }
    fn();
    alert(n); // '15'
//----------------------------
    var n = 10;
    function outer(){
        n = 15;
        function inner(){
            function center(){
                alert(n);
            }
            center();
        }
        inner();
    }
    outer()
//-----------------------------
    var n=0;
    function a(){
        var n=10;
        function b(){
            n++;
            alert(n);
        }
        b();
        alert(n)
    }
    a();
    alert(n);
//--------------------------
    console.log(num,str);
    var num = 18;
    var str = "lily";
    function fn2(){
        console.log(str,num);
        num = 19;
        str = "candy";
        var num = 14;
        console.log(str,num);
    }
    fn2();
    console.log(str,num);

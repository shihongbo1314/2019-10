//---------------------------------------------------------
var n = 10;

function outer() {
    var n = 15;
    

    function inner(n) {
        console.log(n)

        function center() {
            n++;
            console.log(n);
        }
        center();
    }
    inner(n);
}
outer();

//---------------------------------------------------------------
var n = 20;

function outer() {
    ++n;

    function inner() {
        console.log(n++);

        function center() {
            n += 2;
            console.log(n);
        }
        center();
    }
    inner();
};
outer();
console.log(n)



//----------------------------------------------------
alert(a);
console.log("a" in window);
if (!("a" in window)) {
    var a = 10;
}
alert(a);

console.log(fn);
if (9 == 8) {
    function fn() {
        alert(2);
    }
}
//    ---------------------------------
f = function () {
    return true
};
g = function () {
    return false
};
(function () {
    console.log(g);
    if (g() && [] == ![]) {
        f = function f() {
            return false
        };
    }

    function g() {
        return true
    };
})();
alert(f());
alert(g())

// ==========================================
var x = 5;

function fn() {
    return function (y) {
        console.log(y + (++x));
    }
}
var f = fn(6);
f(7);

fn(8)(9);
f(10);
console.log(x);

//================================================
var x = 0,
    y = 1;

function fn() {
    x += 2;
    fn = function (y) {
        console.log(y + (--x));
    };
    console.log(x, y);
}
fn(3);
fn(4);
console.log(x, y);

//=================================================
function fn() {
    var i = 5;
    return function (n) {
        console.log(n * (--i))
    }
}
var f = fn();
f(10);
fn()(10);
fn()(20);
f(20);

//==============================================
var i = 2;

function fn() {
    i += 2;
    return function (n) {
        console.log(n + (--i));
    }
}
var f = fn();
f(2);
f(3);
fn()(2);
fn()(3);
f(4);

// ==================================================
var n = 10;

function fn() {
    var n = 20;

    function f() {
        n++;
        console.log(n);
    }
    f();
    return f;
}
var x = fn();
x();
x();
console.log(n);
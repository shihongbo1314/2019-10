var obj = {
    name: " 小明",
    skill: ["css3", "html5", "es6", "react", "angular"],
    say: function () {
        for(let i = 0; i < obj.skill.length;i++){
            (function (n) {
                setTimeout(() => {
                    console.log(`${obj.name}会 ${obj.skill[i]}`)
                }, 1000 * (n + 1));
            })(i)
        }
    }
}
obj.say(); 
// 上述函数执行的时候  一秒一输出   小明 会 css3 ； 小明会 html5 ; ....
function Person(name,skill){
    //name 和skill属于私有属性 ,因为每个人的姓名和技能都不一样;
    //say属于共有 所有的人都会一样的套路话
    this.name = name;
    this.skill = skill;
}
function Person(name,skill){
    this.name = name;
    this.skill = skill;
    Person.prototype.say = function(){
        for(let i = 0; i < this.skill.length;i++){
                setTimeout(() => {
                    console.log(`${obj.name}会 ${obj.skill[i]}`)
                }, 1000 * (i + 1));
            }  
    }
}
var p = new Person('小明',["css3", "html5", "es6", "react", "angular"]);
p.say()
// 用class写 es6
class Person{
    constructor(name,skill){
        this.name = name;
        this.skill = skill;
    }
    say(){
        for(let i = 0; i < obj.skill.length;i++){
            setTimeout(() => {
                console.log(`${obj.name}会 ${obj.skill[i]}`)
            }, 1000 * (i + 1));
        }  
    }
}
console.log("==============================================================");
var name = '中国',
    age = 5000;
function Person() {
    getName = function () {
        console.log(this.name)
    };
    this.name = 'zfpx';
    this.age = 9;
}
Person.name = '珠峰';
Person.getName = function () {
    console.log(this.name);
};
Person.prototype.getName = function () {
    console.log(this.name);
};
var obj = {
    name: '培训',
    f: Person
};
var per = new Person();
per.getName = function () {
    console.log(12)
};
var per2 = new Person();
obj.f();
Person();
per.getName();
per2.getName();

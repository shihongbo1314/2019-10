var reg = /d/;
console.log(reg.test('qwert123456'))//false
console.log(reg.test('abcddd123456'))//true
var reg = /\d/;
console.log(reg.test('qwert123456'))//true
console.log(reg.test('abcddd123456'))//true
var reg = /\\d/;
console.log(reg)
console.log(reg.test('qwert123456'))//false
console.log(reg.test('abc\\ddd123456'))//true

var reg = new RegExp('\\d')
//等价于var reg = /\d/
var reg = /\W/
console.log(reg.test('hggygygyug=='))

var reg = /\d?/
console.log(reg.test('qerqf448787adfw878rew'))//只要出现一次及以上就是true

var reg = /\d{2}/
console.log(reg.test('qerqf1rew'))//false
console.log(reg.test('qerq23rew'))//true
console.log(reg.test('qerqf23425adfw878rew'))//true

var reg = /\d{2,}/
console.log(reg.test('qerqf1rew'))//false
console.log(reg.test('qerq23rew'))//true
console.log(reg.test('qerqf23425adfw878rew'))//true

var reg = /^d/
console.log(reg.test('qerqf23425adfw878rew'))//false
console.log(reg.test('dddddqerqf23425adfw878rew'))//true

var reg = /^\d/
console.log(reg.test('qerqf23425adfw878rew'))//false
console.log(reg.test('dddddqerqf23425adfw878rew'))//false

var reg = /^\w/
console.log(reg.test('qerqf23425adfw878rew'))//true
console.log(reg.test('dddddqerqf23425adfw878rew'))//true

var reg = /d$/; //以字符d结尾
console.log(reg.test('qerqf23425adfw878rew'))//false
console.log(reg.test('dddddqerqf23425adfw878rew'))//false
console.log(reg.test('qerqf23425adfw878rewd'))//true

var reg = /\d$/; //以数字结尾
console.log(reg.test('qerqf23425adfw878rew'))//false
console.log(reg.test('dddddqerqf23425adfw878rew'))//false
console.log(reg.test('qerqf23425adfw878rewd'))//false


var reg = /d+$/; //以字符d结尾
console.log(reg.test('qerqf23425adfw878rew'))//false
console.log(reg.test('dddddqerqf23425adfw878rewd'))//false
console.log(reg.test('qerqf23425adfw878rewd'))//false

var reg = /d{2}$/; //以字符d结尾
console.log(reg.test('qerqf23425adfw878rew'))//false
console.log(reg.test('dddddqerqf23425adfw878rewd'))//false
console.log(reg.test('ddd'))//true

var reg = /wd{2}$/; //以两d结尾前边是个w；
console.log(reg.test('qerqf23425adfw878rew'))//false
console.log(reg.test('dddddqerqf23425adfw878rewd'))//false
console.log(reg.test('ddd'))//false
console.log(reg.test('dwdd'))//true

var reg = /^d$/; //以 d开头以d结尾 中间是个d；就是个d
console.log(reg.test('dwerwed'))//false
console.log(reg.test('ddd'))//false
console.log(reg.test('d'))//true

var reg = /^dd$/; //以 前边的d开头 以后边的d结尾 中间啥也没有；就是个dd
console.log(reg.test('dwerwed'))//false
console.log(reg.test('ddd'))//false
console.log(reg.test('dd'))//true

var reg = /^d\wd$/; //以 前边的d开头 以后边的d结尾 中间是一个数字字母下划线；
console.log(reg.test('dwerwed'))//false
console.log(reg.test('dddd'))//false
console.log(reg.test('dd'))//false
console.log(reg.test('d0d'))//true

var reg = /^dd{2,}d$/; 
var reg = /^d{4,}$/
console.log(reg.test('dwerwed'))//false
console.log(reg.test('dddd'))//true
console.log(reg.test('dwed'))//false
console.log(reg.test('ddddddd'))//true

var reg = /(wd){2}$/;//代表 以两个wd结尾
console.log(reg.test('fasdfawdwd'))//true
console.log(reg.test('fasdfawdwdwd'))//true
console.log(reg.test('fasdfawd'))//false

var reg = /^\d.123$/ //以一个数字开头以3结尾前边儿是12 12前边儿是除了换行以外的任意字符
console.log(reg.test('123.123'))//false
console.log(reg.test('q123.123'))//false
console.log(reg.test('123q123'))//false
console.log(reg.test('123q.123'))//false
console.log(reg.test('q.123'))//false
console.log(reg.test('0q123'))//true

var reg = /^\d+.123$/;//'n'个数字 任意数 123
console.log(reg.test('123.123'))//true
console.log(reg.test('q123.123'))//false
console.log(reg.test('123q123'))//true
console.log(reg.test('123q.123'))//false

var reg = /[a-c]/;//只要有一个a或者b或者c结果就是true
console.log(reg.test('aqweaqe'))//true

var reg = /^[a-c]/;//只要以a或者b或者c开头的字符串 结果就是true
var reg = /^[a-c]{2}/;//只要以a到c之间的任意两个字符开头 结果就是true

var reg = /[a-z0-9]/
var reg = /[0-9a-z]/

var reg = /[0-9a-zA-Z_]/;//\w

var reg = /[.]/ //中括号中的 点 代表点本身；

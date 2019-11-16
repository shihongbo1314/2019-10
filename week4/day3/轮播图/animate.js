// function animate(ele, option, duration, type, cb) {
//     var moveType = {
//         linear: function linear(time, changeL, duration, beginL) {
//             return changeL / duration * time + beginL;
//         },
//         easeIn: function (t, c, d, b) {
//             return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
//         },
//         easeOut: function (t, c, d, b) {
//             return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
//         },
//         easeInOut: function (t, c, d, b) {
//             if ((t /= d / 2) < 1) {
//                 return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
//             }
//             return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
//         }
//     };

//     function move2(ele, duration, option, type = 'linear') {
//         let startObj = {}; // 存放的是各个属性的初始值；
//         for (var k in option) {
//             startObj[k] = parseFloat(getComputedStyle(ele)[k]);
//         }
//         let time = 0; // 记录的是运动过的时间
//         let l = {}; // 记录的是元素当前的位置
//         let timer = setInterval(() => {
//             time += 10;
//             // l = linear(start,target,duration,time);
//             for (let k in startObj) {
//                 // l[k] = linear(startObj[k],option[k],duration,time)
//                 l[k] = moveType[type](time, option[k] - startObj[k], duration, startObj[k])
//             }
//             if (time >= duration) {
//                 l = option; // 让 当前位置 等于 目标位置即可
//                 clearInterval(timer)
//                 cb && cb(); // 回调存在就执行；
//             }
//             // ele.style[attr] = l + (attr==='opacity' ? '' : 'px');
//             for (let k in option) {
//                 ele.style[k] = l[k] + (k === 'opacity' ? '' : 'px');
//             }
//         }, 10)
//     }

//     if (typeof duration == 'function') {
//         cb = duration;
//         duration = 1000;
//     }
//     if (typeof type == 'function') {
//         cb = type;
//         type = 'linear';
//     }
//     if (typeof duration == 'string') {
//         type = duration;
//         duration = 1000
//     }

//     move2(ele, duration, option, type)
// }
var animate = (function () {
    var moveType = {
        linear: function linear(time, changeL, duration, beginL) {
            return changeL / duration * time + beginL;
        },
        easeIn: function (t, c, d, b) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOut: function (t, c, d, b) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOut: function (t, c, d, b) {
            if ((t /= d / 2) < 1) {
                return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            }
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
    };
    function move2(ele, duration, option, type = 'linear',cb) {
        let startObj = {}; // 存放的是各个属性的初始值；
        for (var k in option) {
            startObj[k] = parseFloat(getComputedStyle(ele)[k]);
        }
        let time = 0; // 记录的是运动过的时间
        let l = {}; // 记录的是元素当前的位置
        let timer = setInterval(() => {
            time += 10;
            // l = linear(start,target,duration,time);
            for (let k in startObj) {
                // l[k] = linear(startObj[k],option[k],duration,time)
                l[k] = moveType[type](time, option[k] - startObj[k], duration, startObj[k])
            }
            if (time >= duration) {
                l = option; // 让 当前位置 等于 目标位置即可
                clearInterval(timer)
                cb && cb(); // 回调存在就执行；
            }
            // ele.style[attr] = l + (attr==='opacity' ? '' : 'px');
            for (let k in option) {
                ele.style[k] = l[k] + (k === 'opacity' ? '' : 'px');
            }
        }, 10)
    }
    return function (ele, option, duration, type, cb) {
        if (typeof duration == 'function') {
            cb = duration;
            duration = 1000;
        }
        if (typeof type == 'function') {
            cb = type;
            type = 'linear';
        }
        if (typeof duration == 'string') {
            type = duration;
            duration = 1000
        }
        move2(ele, duration, option, type,cb)
    }
})()
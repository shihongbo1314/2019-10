function body() {
    var tabFn = function () {
        console.log('实现选项卡')
    }
    var hotNew = function () {
        console.log('热点新闻')
    }
    var update = function () {
        console.log('缓一缓')
    }
    return {
        init() {
            tabFn();
            hotNew();
            update();
        }
    }
}
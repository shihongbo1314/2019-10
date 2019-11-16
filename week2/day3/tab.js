class Tab {
    constructor(id) {
        this.box = document.querySelector(id);
        this.tabs = this.box.getElementsByClassName('tab');
        this.bodys = this.box.getElementsByClassName('body');
        this.mapBind();

    }
    mapBind() {
        for (let i = 0; i < this.tabs.length; i++) {
            this.tabs[i].onclick = () => {
                this.clearClass();
                this.tabs[i].className = 'tab current';
                this.bodys[i].className = 'body current';
            }
        }
    }
    clearClass() {
        for (var i = 0; i < this.tabs.length; i++) {
            this.tabs[i].className = 'tab';
            this.bodys[i].className = 'body';
        }
    }
}

var tab = new Tab('#box');


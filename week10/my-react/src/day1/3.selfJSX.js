// React.createElement
// ReactDOM.render(组件,根元素)
class Element{
  constructor(tagName,props={},children){
    this.tagName = tagName;
    this.props = props;
    this.children = children
  }
  render(){
    let ele = document.createElement(this.tagName);
    for(let k in this.props){
      ele.setAttribute(k,this.props[k])
    }
    this.children.forEach(item=>{
      // 需要查看 当前这个子节点 到底是 元素 还是文本
      item instanceof Element ?
      ele.appendChild(item.render()): // 若是Element的实例 则需要append的是render之后的那个实际的元素
      ele.appendChild(document.createTextNode(item));//若是文本 则需要append的是这个 文本节点
    })
    return ele;
  }
}


const React = {
  // 第一个参数是标签名 第二参数是行内属性  在后边 就是都是子元素
  createElement(tagName,props,...children){
    return new Element(tagName,props,children)
  }
}
const ReactDOM = {
  render(ele,root){
    root.appendChild(ele.render())
  }
}
let App =  React.createElement('div',{className:'box'},React.createElement('h2',null,'hello world'),'你好世界','你好世界')
ReactDOM.render(App,document.getElementById('root'))


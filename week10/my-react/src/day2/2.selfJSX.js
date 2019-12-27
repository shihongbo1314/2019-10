
class Element{
    constructor(tagName,props,children){
      this.tagName = tagName;
      this.props = props||{};
      this.children = children
    }
    render(){
      let ele = document.createElement(this.tagName);
      Object.keys(this.props).forEach(key=>{
          if(key === 'className'){
            ele.setAttribute('class',this.props[key])
          }else if(key === 'htmlFor'){
            ele.setAttribute(key,this.props[key])
          }
          
      })
      this.children.forEach(item=>{
        item instanceof Element ?
        ele.appendChild(item.render()):
        ele.appendChild(document.createTextNode(item))
      })
      return ele;
    }
  }
  
  
  
  const React = {
    createElement(tagName,props,...children){
      return new Element(tagName,props,children)
    }
  }
  const ReactDOM = {
    render(ele,root){
      root.appendChild(ele.render())
    }
  }
  
  {/* <div className='qqq'>
    <h2>hello world</h2>
    珠峰培训
  </div> */}
  let ele = React.createElement('div',{className:'qqq'},
    React.createElement('h2',null,'hello world'),"珠峰培训");
  ReactDOM.render(ele,document.getElementById('root'));
  
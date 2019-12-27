import React from 'react'
var imgUrl = 'http://www.zhufengpeixun.cn/main/img/banner01.png'
function Img(){
  // 在react 中 行内属性的值  也是通过 {} 赋予的
  // 在react 中 class属性 必须写成 className
  // 在react 中 编写行内属性时 必须使用 对象的方式
  var obj = {
    width:'300px'
  }
  return (<img 
    src={imgUrl} 
    // className='qqq'
    className={'qqq '+ (1 > 2 ? 'www' : 'eee')}  
    style={obj}
    />)
}
export default Img
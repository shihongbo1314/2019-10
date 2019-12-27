import React from 'react'

import Img from './img'
// 再JS中写html结构  是由于babel再起作用
// 在 react中 变量是要通过 {变量的方式编写}
//         react的 {} 就是相当于 vue的 {{}}；  里边能写表达式 不能写 语句
var str = 'hello world'

function f1(name){
  return <div>
    <Img/>
    您好 {name}
  </div>
}

function Hello(){
  var str = '珠峰培训'
  return (
    <div>
      <h2>hello world</h2>
      <h1>{str}</h1>
      {f1('珠峰')}
    </div>
  )
}

function Hello2(){
  return(
    <h3>你好世界</h3>
  )
}
export default {Hello,Hello2}
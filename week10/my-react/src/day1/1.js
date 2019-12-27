import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App'; //这个就是react的组件
import Obj from './hello';// react组件 首字母必须大写
import For from './for-if'

import Crt from './createElement'

const Hello = Obj.Hello;
const Hello2 = Obj.Hello2;


ReactDOM.render(<div>
  {/* 这里只能有一个根元素，组件也是一样的； 跟vue类似 */}
  <Crt/>
  <For/>
  <Hello></Hello>
  <Hello2></Hello2>
  <Obj.Hello2></Obj.Hello2>
  <App />
</div>, document.getElementById('root'));
// new Vue({render:h=>h(APP)})
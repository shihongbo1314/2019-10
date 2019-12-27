/* 
    react 项目创建  create-react-app 脚手架
              create - react - app 项目名
              npx create- react-app 项目名   //不用安装脚手架
            
            npm run eject // 暴露配置文件
            我们要修改的配置文件就在  config下的  webpack.config.js中


    主入口文件  是src/index.js

    reactDOM.render(组件,html中的根元素);
    react中的组件都是函数或者类
*/
import React from 'react';
import ReactDOM from 'react-dom'



function Button(props){
    return(<div className={props.className}>
        <button>按钮</button>
    </div>)
}
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
        <h2>你好</h2>
        <Button className='box'></Button>
        </div>;
    }
}

// export default App
ReactDOM.render(<App/>,document.getElementById('root'));
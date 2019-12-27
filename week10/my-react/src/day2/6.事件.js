import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num:0
        }
    }
    add(n,e){
       console.log(this,e,n)
    }
    add2=()=>{
       console.log(this)
       //this.state.num += 1;
       let n = this.state.num;
       // setState在react事件中  是异步的;
       // setState 是可以触发视图更新的
        this.setState({
            num:++n
        },()=>{
            console.log(this.state.num)
        })
        console.log(this.state.num)
        // this.state.num++;
        // this.setState({})
        // console.log(this.state.num)
    }
    minus=()=>{
       console.log(this)
       //this.state.num -= 1;
       this.setState({
           num:--this.state.num
       })
    }
    render() {
        // this.setState({}) 在render中不能写触发视图更新的代码
        let {num} = this.state;// 从state中解构出num变量
        return <div className='box'>
        <h2>当前数字是{num}</h2>
        {/* react 事件是原生事件变成小驼峰即可 */}
         <button onClick={this.add}>+</button>
         {/* 使用bind的这种写法  事件对象是处在实参的最后一个位置 */}
         <button onClick={this.add.bind(this,100)}>+</button>
         {/* 使用箭头函数  事件对象可传可不传 */}
         <button onClick={(e)=>{this.add(100,e)}}>+</button>
         <button onClick={this.add2}>+</button>
         <button onClick={this.minus}>-</button>
        </div>;
    }
}

//export default App
ReactDOM.render(<App/>,document.getElementById('root'))
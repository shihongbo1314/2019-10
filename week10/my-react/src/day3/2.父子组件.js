import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component{
  render(){
    // onAdd  onMinus
    // this.props  this.state  react的两个数据源
    let {onAdd,onMinus} = this.props;
    return <div>
      <button onClick={onAdd}>按钮+</button>
      <button onClick={onMinus}>按钮—</button>
    </div>
  }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          num:0
        }
    }
    // 性能最好的 是把箭头函数写在这个位置  这样能保证每次更新DOM时
    // 我们传递的函数不用重新赋值
    add=()=>{
      this.setState({
        num:++this.state.num
      })
    }
    minus=()=>{
      this.setState({
        num:--this.state.num
      })
    }
    render() {
      let {num} = this.state;
        return <div className=''>
          <h1>{num}</h1>
          {/* 组件的数据传递 子传父 */}
          <Button onAdd={this.add}  onMinus={this.minus}></Button>
        </div>;
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))

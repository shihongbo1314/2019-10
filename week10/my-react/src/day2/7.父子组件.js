import React,{Component} from 'react';
import ReactDOM from 'react-dom'
class Button extends Component{
    render(){
        // props都是父组件通过行内属性传进来的数据和children
        console.log(this.props)
        let {onAdd,onMinus} = this.props;
        return(
            <div>
                <button onClick={onAdd}>增加</button>
                <button onClick={onMinus}>减少</button>
            </div>
        )
    }
}
class Show extends Component{
    render(){
        return(
            <div>
            <h2>当前数字是{this.props.num}</h2>
            {/* 不能在子组件直接修改父组件中的数据 */}
            <button onClick={()=>{this.props.num = 0}}>初始化成0</button>
            </div>
        )
    }
}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            num:100
        }
        
    }
    add=()=>{
       console.log('点击了增加')
       this.setState({
           num:++this.state.num
       })
    }
    minus=()=>{
       console.log('点击了减少')
       this.setState({
           num:--this.state.num
       })
    }
    render() {
        let {num} = this.state;
        return <div className=''>
           {num}
           <Show num={num}/>
           <Button onAdd={this.add} onMinus={this.minus}/>
        </div>;
    }
}

//export default App
ReactDOM.render(<App/>,document.getElementById('root'))
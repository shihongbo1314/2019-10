import React from 'react';
import ReactDOM from 'react-dom'
class Clock extends React.Component{
    constructor(){
        super();
        this.state = {
            time:new Date().toLocaleString(),
            timer:null
        }
    }
    begin=()=>{
        //一秒一更新 time即可
        clearInterval(this.state.timer)
        this.state.timer = setInterval(() => {
            console.log(666)
            this.setState({
                time:new Date().toLocaleString()
            })
        }, 1000);
    }
    render(){
        let {time} = this.state;
        return(
            <div>
            <h1>当前时间是{time}</h1>
            <button onClick={this.begin}>计时开始</button>
            </div>
        )
    }
}
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
        <Clock/>
        </div>;
    }
}

//export default App

ReactDOM.render(<App/>,document.getElementById('root'))
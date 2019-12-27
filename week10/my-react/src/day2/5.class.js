import React from 'react'
import ReactDOM from 'react-dom'



class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {//就是vue的data数据
            name:'珠峰',
            age:10,
            sex:'男'
        }
    }
    fn1(){}
    static fn={qqq:123}
    render(){
        console.log(this);//在render中我们可以直接使用this.props去获取参数
        let {className,data} = this.props;
        let {name,age,sex} = this.state;
        // react有两个数据源  自己的state和传进来的props
        return(
            <div className={className}>
                class 组件
                内容是{JSON.stringify(data)}
                <h2>名字是{this.state.name}</h2>
                <h2>年龄是{age}</h2>
                <h2>性别是{sex}</h2>
            </div>
        )
    }
}
ReactDOM.render(<Child className='box' data={{name:'珠峰'}}/>,document.getElementById('root'))
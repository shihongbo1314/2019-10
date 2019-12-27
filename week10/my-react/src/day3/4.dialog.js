import React from 'react';
import ReactDOM from 'react-dom';
import './less/dialog.less'

class Dialog extends React.Component {
    render(){
        let {title,visible,onOk,onCancel,children} = this.props;
        // this.props.children
        //从props中把title visible onOk onCancel获取到
        return(
           /*  {
                visible?
                <div>哈哈哈</div>:
                <div>呵呵呵</div>
            } */
            <div className='mask' style={{display:visible?'block':'none'}}>
                <div className='contentBox'>
                    <header>
                        {title||'默认title'}
                    </header>
                    <main>
                        {children}
                    </main>
                    <footer>
                        <button onClick={onCancel}>取消</button>
                        <button onClick={onOk}>确定</button>
                    </footer>
                </div>
            </div>
            )
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isShow:true
        }
    }
    ok=()=>{
        console.log('点击了确定按钮')
        this.setState({
            isShow:false
        })
    }
    cancel=()=>{
        console.log('点击了取消按钮')
        this.setState({
            isShow:false
        })
    }
    render() {
        let {isShow} = this.state;
        return <div className=''>
        <button onClick={()=>{this.setState({isShow:true})}}>显示dialog</button>
          <Dialog
            title='这是标题'
            visible={isShow}
            onOk={this.ok}
            onCancel={this.cancel}
          >
            <h2>这是内容部分</h2>
            <h2>这是内容部分</h2>
            <h2>这是内容部分</h2>
          </Dialog>
        </div>;
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))

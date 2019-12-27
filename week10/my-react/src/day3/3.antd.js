import React from 'react';
import ReactDOM from 'react-dom';

import { Modal, Button } from 'antd';

class MyH1 extends React.Component{
  render(){
    return (
      <div>
        <h1>
          {
            this.props.children // 就是 组件包含的内容
          }
        </h1>
      </div>
    )
  }
}

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

// class App extends React.Component {
//     constructor() {
//         super();
        
//     }
//     render() {
//         return <div className=''>
//           <Button>按钮</Button>
//           <MyH1>
//             你好 这是一个react的插槽
//           </MyH1>
//         </div>;
//     }
// }

ReactDOM.render(<App/>,document.getElementById('root'))

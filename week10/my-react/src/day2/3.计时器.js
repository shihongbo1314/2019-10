import React from 'react'
import ReactDOM from 'react-dom'




function Clock(){
    return (<h1>
       当前时间是:{new Date().toLocaleString()}
    </h1>
    )
}
setInterval(()=>{
    ReactDOM.render(<Clock />,document.getElementById('root'))
},1000);

//export default Clock
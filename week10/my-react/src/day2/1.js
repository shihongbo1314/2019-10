import React from 'react'

var str = '珠峰'
var cln = 'box'
var ary = [1,2,3,4]
var obj = {a:123,b:234,color:'red'};
function fn(arr){
    let t = [];
    for(var i = 0; i < arr.length; i++){
        t.push(<li key={i+'0'}>{arr[i]}</li>)
    }
    return t;
}
function Hello(){
    return (
        <div>
            <h1 className='qqq' className={'qqq'+cln}>hello world</h1>
            <h2 style={obj}>{str}</h2>
            <h3 style={{color:'red',background:"CCC"}}>{ary}</h3>
            {/* <h4>{obj}</h4> */}
            <h4>{Object.keys(obj)}</h4>
            <ul>
                {/* <li v-for></li> */}
                {
                ary.map(item=>{
                    return(
                        <li key={item}>{item}</li>
                    )
                })
                }
                {
                   fn(ary)
                }
            </ul>
            {
                1 > 2 ? 
                <h1>成立</h1>:
                3 > 4 ? 
                <h1>成立</h1>:
                <h2>不成立</h2>
            }
        </div>
    )
}
export default Hello
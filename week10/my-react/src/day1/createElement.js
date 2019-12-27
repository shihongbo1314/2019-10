import React from 'react';
// function Crt() {
//   return (
//     <div>
//       hello 
//       <h2>world</h2>
//     </div>
//   )
// }
function Crt() {
  let ele = React.createElement('div',{className:'qqq',t:123},"hello",React.createElement('h2',null,'world'))
  return ele
}

export default Crt
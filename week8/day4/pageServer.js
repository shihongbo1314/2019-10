let express = require('express');
let app = express();
app.listen(3000,function(){
    console.log('前端服务起于3000')
})
app.use(express.static('./page'))
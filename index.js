const express =require('express');
const app = express();
const PORT = 3001;

app.get('/',(req,res)=>{
    res.send('Hi shibi')
})

app.listen(PORT,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('App started at port: ', PORT);
})


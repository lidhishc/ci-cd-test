const express =require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.send('Hi')
})

app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log('App started at port: ', PORT);
})


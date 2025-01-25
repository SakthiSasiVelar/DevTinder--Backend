const express = require('express'); 

const app = express();

app.use("/test",(req,res,next)=>{
    console.log('use is called');
    next();
});

app.all("/test",(req,res,next) =>{
    console.log('all is called');
    next();
})

app.get("/data",(req,res)=>{
    res.send('data is send');
})

app.get("/test/123",(req,res)=>{
    res.send('test route is called')
})

app.listen(3000 , () => {
    console.log('server running in the port 3000');
});
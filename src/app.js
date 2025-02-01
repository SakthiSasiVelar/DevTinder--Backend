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

app.get("/data/:id",(req,res)=>{
    console.log(req.params , req.query)
    res.send('data is send');
})

app.get("/data/admin",(req,res)=>{
    res.send('test route is called')
})

app.use((error,req,res,next) => {
    console.log('called')
    res.send('123')
})

app.listen(3000 , () => {
    console.log('server running in the port 3000');
});
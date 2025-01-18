const express = require('express');

const app = express();

app.use("/test",(req,res)=>{
    res.send("Testing route is called");
});

app.listen(3000 , () => {
    console.log('server running in the port 3000');
});
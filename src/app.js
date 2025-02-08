const express = require('express');
const connectDb = require('./config/database');
const User = require('./models/user');
const app = express();

app.use("/test",(req,res)=>{
    res.send("Testing route is called");
});

connectDb().then(() => {
    console.log('MongoDb connected');
    app.listen(3000 , () => {
        console.log('server running in the port 3000');
    });
}).catch((err) => {
    console.log('MongoDb connection failed');
    console.log(err);
});

app.post('/signup' , async (req,res) => {
    const user =  new User({
        firstName : 'sakthi',
        lastName : 'sasi velar',
        email : 'sakthi@gmail.com',
        password: 'sakthi@123',
        age : 22,
        gender : 'male'
    });

    try{
        await user.save();
        res.status(201).send('user created successfully');
    }
    catch(error){
       console.log(error);
       res.status(500).send('error creating user');
    }
});
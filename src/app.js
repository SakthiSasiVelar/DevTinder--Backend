const express = require('express');
const connectDb = require('./config/database');
const User = require('./models/user');
const app = express();

app.use("/test",(req,res)=>{
    res.send("Testing route is called");
});

app.use(express.json())

app.post('/signup' , async (req,res) => {
    const user =  new User(req.body);
    try{
        await user.save();
        res.status(201).send('user created successfully');
    }
    catch(error){
       console.log(error);
       res.status(400).send('error creating user');
    }
});

app.get('/user' , async(req,res) => {
    const emailId = req.body.emailId;
    try{
        const users = await User.find({emailId : emailId})
        if(users.length === 0 ){
            res.status(404).send('No users found');
        }
        else{
            res.send(users);
        }
    }
    catch(error){
        console.log(error);
        res.status(400).send('error creating user');
     }
})

connectDb().then(() => {
    console.log('MongoDb connected');
    app.listen(3000 , () => {
        console.log('server running in the port 3000');
    });
}).catch((err) => {
    console.log('MongoDb connection failed');
    console.log(err);
});

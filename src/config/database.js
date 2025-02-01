const mongoose = require('mongoose');

const connectDb = async () => {
    await mongoose.connect('mongodb+srv://sakthisasivelar:sakthi123@devtinder.7vszu.mongodb.net/')
}

connectDb().then(() => {
    console.log('MongoDb connected');
}).catch((err) => {
    console.log('MongoDb connection failed');
    console.log(err);
});

module.exports = connectDb;
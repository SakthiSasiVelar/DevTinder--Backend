const mongoose = require('mongoose');

const connectDb = async () => {
    await mongoose.connect('mongodb+srv://sakthisasivelar:sakthi123@devtinder.7vszu.mongodb.net/devTinder')
}

module.exports = connectDb;
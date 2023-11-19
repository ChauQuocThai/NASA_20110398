const mongoose = require('mongoose')

require('dotenv').config();

const MONGO_URL = 'mongodb+srv://nasa-api:CK9WHGLiLXKRUAup@cluster0.mbl5xbq.mongodb.net/?retryWrites=true&w=majority'   

mongoose.connection.once('open', () =>{
    console.log('MongoDB connnection ready');
})
mongoose.connection.on('error', (err) =>{
    console.log('MongoDB connnection failed');
})

async function mongoConnect(){
    await mongoose.connect(MONGO_URL,{
    })
}

async function mongoDisconnect(){
    await mongoose.disconnect(MONGO_URL,{
    })
}

module.exports = {
    mongoConnect: mongoConnect,
    mongoDisconnect: mongoDisconnect
}
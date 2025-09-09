const mongoose = require('mongoose')
const colors = require('colors')

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database connected on ${mongoose.connection.host}`.bgMagenta.white);
        
    } catch (error) {
        console.log(`Error is : ${error}`.bgRed);
        
        
    }
}
module.exports = connectDb
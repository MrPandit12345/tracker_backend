const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require('./config/connectDB');
// Config .env file
dotenv.config();

// database call
connectDb(); 

const app = express();

// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// routes
// user
app.use('/api/v1/users',require('./routes/userRoute'))

// transaction
app.use('/api/v1/transcations',require('./routes/transactionRoute'))

// Port
const PORT = process.env.PORT || 5000;

// Listen server
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
    
})
const express =require('express');
const connectDB=require('./config/db');
const app= express();
var cors = require('cors')

app.use(cors()) ;
connectDB();
app.use(express.json({extended:false}))
app.use('/Products',require('./Controller/productapi'))
app.use('/Customers',require('./Controller/customerapi'))
app.use('/register',require('./Controller/userapi'))
app.use('/Login',require('./Controller/auth'))
app.use('/report',require('./Controller/reportapi'))
app.use('/transaction',require('./Controller/transactionapi'))

app.listen(5000)
const express =require('express');
const connectDB=require('./config/db');
const app= express();

connectDB();
app.use(express.json({extended:false}))
app.use('/products',require('./Controller/productapi'))
app.use('/customers',require('./Controller/customerapi'))
app.use('/signup',require('./Controller/userapi'))
app.use('/login',require('./Controller/auth'))
app.use('/report',require('./Controller/reportapi'))
app.use('/transaction',require('./Controller/transactionapi'))

app.listen(3000)
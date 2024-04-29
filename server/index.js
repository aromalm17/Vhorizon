const express = require('express');
const dotenv = require('dotenv');
const cors =  require('cors');
const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://mongo:mongo@cluster0.eyhty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

const app =  express();
app.use(cors());

const PORT = 3000 || process.env.PORT;

// Route Path
const userRoute = require('./routes/userRoute');
const vehicleRoute = require('./routes/vehicleRoute');

// Routes
app.use('/user', userRoute);
app.use('/vehicle', vehicleRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
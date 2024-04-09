const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes')

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use('./books', bookRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
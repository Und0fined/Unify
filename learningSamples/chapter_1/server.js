const express = require('express');
const app = express(); //Creates an Express application
const PORT = 8383

app.listen(PORT, ()=>{
    console.log(`Server Started | Port: ${PORT}`)
});
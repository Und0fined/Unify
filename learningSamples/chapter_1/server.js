const express = require('express');
const app = express(); //Creates an Express application
const PORT = 8383;

let data = [];
app.use(express.json());

app.get("/", (req,res)=>{
    res.send(`
        <h1>/</h1>
        <body>${JSON.stringify(data)}</body>`);
});


app.get("/api/data", (req,res)=>{
    res.send(`
        <h1>/api/data</h1>
        <body>${JSON.stringify(data)}</body>`);
});
app.post("/api/data",(req,res)=>{
    const newData = req.body;
    data.push(newData);
    res.sendStatus(201);
});
app.delete("/api/data/endpoint",(req,res)=>{
    data.pop();
    res.sendStatus(202);
});
app.listen(PORT, ()=>{
    console.log(`Server Started | Port: ${PORT}`);
});
const express = require('express');
const app = express();
const port=3001;

 app.get('/api/data', (req, res) => {
   const data = {message: ":::::::hello from the backend"}
    res.json(data);
 });

 app.listen(3001 , ()=>{
    console.log("Server is running on port 3001")
 });
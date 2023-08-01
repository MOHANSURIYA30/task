const express = require('express');
const app = express()
const PORT = 3000

app.use((req,res)=>{
    res.send("HelloWorld! ")
})

app.listen(PORT, () => {
    console.log("Server running on port :: " + PORT);
}) 

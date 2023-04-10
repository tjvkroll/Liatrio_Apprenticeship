const express = require('express');     // imports express module
const app = express();                  // creates express object

// Tells express server how to handle basic GET request
app.get('/', (req, res)=>{
    // Building my json object to respond to the GET with
    res.json({
        "message": "My name is Travis Kroll",
        "timestamp": Date.now()
    }); 
}); 

// Arbitrarily chose to listen on port 8000
app.listen(8000); 

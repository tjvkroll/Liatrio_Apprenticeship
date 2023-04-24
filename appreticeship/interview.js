const express = require('express');     // imports express modules
const app = express();                  // creates express object

// Tells express server how to handle basic GET request
app.get('/', (req, res)=>{
    // Building my json object to respond to the GET with
    res.json({
        "message": "My name is Travis Kroll",
        "timestamp": Date.now(),
        "new": "got it!",
    }); 
}); 

// Chose to listen on port 80 because of tests
app.listen(80); 

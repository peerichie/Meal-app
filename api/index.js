const express = require('express');

const app = express();
const PORT = 9001;

app.get('/', function(req, res) {
    return res.send('The API Is Working');
});

app.listen(PORT, function(){
    console.log('server is running on Port ' + PORT)
});
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    


    res.send('Hello World!') //This is the response that will be sent to the client
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) //This is the message that will be displayed in the console when the server is running
})
const express = require('express');

const app = express();

app.use('/', (req, res)=>{
    res.send('Hello from the Server Home Page!!');
})

app.use('/test', (req, res)=>{
    res.send('Hello from the test Server!!');
})

app.listen(9993, ()=>{
    console.log('Server is successfully listening on port 9993...');
})
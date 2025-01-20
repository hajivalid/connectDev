const express = require('express');

const app = express();

app.get('/user', (req, res) => {
    res.send({firstName:"Ehan", lastName:"Shami"});
})

app.post('/user', (req, res) => {
    res.send('successfully saved user data in DB');
})

app.delete('/user', (req, res) => {
    res.send('successfully deleted user data in DB');
})

app.use('/test', (req, res)=>{
    res.send('Hello from the test Server!!');
})

app.use('/', (req, res)=>{
    res.send('Hello from the Server Home Page!!');
})

app.listen(9993, ()=>{
    console.log('Server is successfully listening on port 9993...');
})
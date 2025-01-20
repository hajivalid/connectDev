const express = require('express');

const app = express();

//'/user/:userId'  --req.params
//'/user/userId=101' -- req.query
//'/user/abc' --normal
//'/user/ab?c'  --b optional
//'/user/ab+c'  --bbbbbbb... works fine
//'/user/ab*cd'  -- anything between ab12345cd

app.get('/user', (req, res) => {
    //console.log(req.query);
    res.send({firstName:"Ehan", lastName:"Shami"});
})
app.post('/user', (req, res) => {
    res.send('successfully saved user data in DB');
})

app.delete('/user', (req, res) => {
    res.send('successfully deleted user data in DB');
})

app.listen(9993, ()=>{
    console.log('Server is successfully listening on port 9993...');
})
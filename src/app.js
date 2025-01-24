const express = require('express');
const {adminAuth, userAuth} = require('./middlewares/auth')

const app = express();


//'/user/:userId'  --req.params
//'/user/userId=101' -- req.query
//'/user/abc' --normal
//'/user/ab?c'  --b optional
//'/user/ab+c'  --bbbbbbb... works fine
//'/user/ab*cd'  -- anything between ab12345cd

app.use('/user', userAuth, (req, res, next) => {
    console.log('User authentication');
    next();
})

app.get('/user/1', (req, res) => {
    //console.log(req.query);
    res.send({firstName:"Ehan", lastName:"Shami"});
})
app.post('/user/2', (req, res) => {
    res.send('successfully saved user data in DB');
})

app.delete('/user/3', (req, res) => {
    res.send('successfully deleted user data in DB');
})

app.use(
    '/admin',
    adminAuth, 
    (req, res, next) => {
        console.log('1st Admin console printed')
        next();
    },
    (req, res, next) => {
        console.log('2nd Admin console printed')
        //res.send('2nd Response printed')
        next();
    }
)
app.get('/admin/user', (req, res) => {
    res.send('3rd Response printed')
})

app.listen(9993, ()=>{
    console.log('Server is successfully listening on port 9993...');
})
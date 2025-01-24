const adminAuth = (req, res, next) => {
    console.log('Checked admin auth');
    const token = 'xyz';
    const isAuthorized = token === 'xyz';
    if(!isAuthorized){
        res.status(401).send('Unauthorized admin request');
    }else{
        next();
    }

}
const userAuth = (req, res, next) => {
    console.log('Checked user auth');
    const token = 'abc';
    const isAuthorized = token === 'abc';
    if(!isAuthorized){
        res.status(401).send('Unauthorized user request');
    }else{
        next();
    }

}
module.exports = {adminAuth, userAuth}
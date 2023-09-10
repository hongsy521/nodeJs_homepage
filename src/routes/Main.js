const express =require('express');
const session=require('express-session');
const bodyParser=require('body-parser');
const FileStore=require('session-file-store')(session)

let authRouter=require('./auth');
let authCheck=require('./authCheck');
let template=require('./template');

const app=express()
const port=3000
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
    secret:'~~~',
    resave:false,
    saveUninitialized:true,
    store:new FileStore(),
}))

//인증 라우터
app.use('./auth',authRouter);

app.get('/',(req,res)=>{
    if(!authCheck.isOwner(req,res)){
        res.redirect('/login');   //로그인이 안되어있다면 로그인페이지로 이동
        return false;
    }
    else{
        authCheck.statusUI(req.res);
    }
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
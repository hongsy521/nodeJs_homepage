let express=require('express');
let router=express.Router();

let template=require('./template');
let db=require('./db');

//로그인 화면
router.get('/login');

//로그인 과정
router.post('/login_process',function(request,response){
    let username=request.body.username;
    let password=request.body.pwd;
    if(username&&password){
        db.query('SELECT * FROM USER WHERE username=? AND password=?',[username,password],function(error,results,fields){
            if(error)throw error;
            if(results.length>0){
                request.session.is_logined=true;
                request.session.nickname=username;
                request.session.save(function(){
                    response.redirect('/');
                });
            }
            else{
                response.send(`<script type="text/javascript">
                alert("로그인 정보가 일치하지 않습니다.");
                document.location.href="/login"; </script>`);
            }
        });
    }
    else{
        response.send(`<script type="text/javascript">
        alert("아이디와 비밀번호를 입력하세요!);
        document.location.href="/login"; </script>`);
    }
});

//로그아웃
router.get('/logout',function(request,response){
    request.session.destroy(function(err){
        response.redirect('/');
    });
});

//회원가입 화면
router.get('/signIn');

//회원가입 과정
router.post('/signIn_process',function(request,response){
    let username=request.body.username;
    let password=request.body.password;
    let password2=request.body.password2;

    if(username&&password&&password2){
        db.query('SELECT * FROM USER WHERE username=?',[username],function(error,results,fields){
            if(error)throw error;
            if(results.length<=0&&password==password2){  //DB에 같은 이름의 회원아이디가 없고, 비밀번호가 올바르게 입력된 경우
                db.query('INSERT INTO USER (username,password) VALUES(?,?)',[username,password],function(error,data){
                    if(error)throw error2;
                    response.send(`<script type="text/javascript">
                    alert("회원가입이 완료되었습니다.");
                    document.location.href="/";
                    </script>`);
                });
            }
            else if(password!=password2){
                response.send(`<script type="text/javascript">
                alert("입력된 비밀번호가 서로 다릅니다.")
                document.location.href="/signIn";
                </script>`);
            }
            else{
                response.send(`<script type="text/javascript">
                alert("이미 존재하는 아이디 입니다.")
                document.location.href="/signIn";
                </script>`)
            }
        });
    }
    else{
        response.send(`<script type="text/javascript">    
        alert("입력되지 않은 정보가 있습니다.");
        document.location.href="signIn";
        </script>`);
    }
});
module.exports=router;
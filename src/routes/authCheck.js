module.exports={
    isOwner:function(request,response){
        if(request.session.is_logined){
            return true;
        }
        else{
            return false;
        }
    },
    statusUI:function(request,response){
        let authStatusUI='로그인 후 사용 가능합니다.';
        if(this.isOwner(request,response)){
            authStatusUI=`${request.session.nickname}님 환영합니다! | <a href="/logout">로그아웃</>`;
        }
        return authStatusUI;
    }
}  //로그인 여부를 확인해서 실행하는 함수를 모아 분리
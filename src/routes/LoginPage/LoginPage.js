import styles from './loginpage.module.css';
import { Button, Paper, TextField, Box, Checkbox, FormControlLabel } from '@mui/material';
import {styled} from "@mui/material/styles"


const LoginPage=()=>{
    const MyTextField=styled(TextField)({
        width:280,
        marginTop:30,
        marginLeft:30,
    });
    const MyButton=styled(Button)({
        width:180,
        marginTop:40,
        marginBottom:20,
    })

    return(
        <>
        <div className={styles.viewport}>
            <div className={styles.contents}>
                <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 380,
          height: 480,
          textAlign:'center',
          margin: 17,
          marginLeft:63,

        },
      }}
    >
      <Paper elevation={3} >
        <div className={styles.loginwrap}>
      <div className={styles.headtext}>로그인</div>
      <div className={styles.inputbox}>
      <MyTextField variant='standard' label='아이디'/>
      <MyTextField variant='standard' label='비밀번호'/>
      </div>
      <div className={styles.checkbox}>
      <FormControlLabel required control={<Checkbox/>} label='로그인 정보 저장'/>
      </div>
      <MyButton variant='contained'>로그인</MyButton>
      <div className={styles.foottext}>
      <a href='/signIn'>회원가입하기</a>
      </div>
        </div>
      </Paper>
    </Box>
            </div>
        </div>
        </>
    );
}
export default LoginPage;
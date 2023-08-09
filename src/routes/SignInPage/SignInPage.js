import styles from './signinpage.module.css';
import { Button, Paper, TextField, Box, Checkbox, FormControlLabel } from '@mui/material';
import {styled} from "@mui/material/styles"

const SignInPage=()=>{
    const MyTextField=styled(TextField)({
        width:300,
        height:20,
    });
    const MyButton=styled(Button)({
        width:150,
        marginTop:10,
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
          width: 400,
          height: 550,
          textAlign:'center',
          marginTop:3,
          marginLeft:63,

        },
      }}
    >
      <Paper elevation={3} >
        <div className={styles.signInwrap}>
      <div className={styles.headtext}>회원가입</div>
      <div className={styles.inputbox}>
       <div className={styles.wrap}><p className={styles.text}>아이디</p>
      <MyTextField variant='outlined' label='아이디 입력'/>
      </div>
      <div className={styles.wrap}><p className={styles.text}>비밀번호</p>
      <MyTextField variant='outlined' label='비밀번호 입력'/>
      </div>
      <div className={styles.wrap}><p className={styles.text}>비밀번호 확인</p>
      <MyTextField variant='outlined' label='비밀번호 재입력'/>
      </div>
      </div>
      <MyButton variant='contained'>가입</MyButton>
      </div>
      </Paper>
    </Box>
    </div>
    </div>
        </>
    );
}
export default SignInPage;
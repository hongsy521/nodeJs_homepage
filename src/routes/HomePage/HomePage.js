import styles from './homepage.module.css';
import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import { Paper, Typography, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';
import ShowTable from '../../components/ShowTable';
import { useState } from 'react';


const HomePage=()=>{
  const [isAdding,setIsAdding]=useState(false);

  const AddHandler=()=>{
    setIsAdding(true);
  }

  const MyPaper=styled(Paper)({
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    width: 1050,
    height: 600,
    marginTop: 40,
    marginLeft: 100,
    
  });
    return(
        <>
        <div className={styles.viewport}>
           <Header />
           <div className={styles.contents}>
            <SideBar/>
            <MyPaper elevation={3}>
           {isAdding?(
            <></>
           ):(
              <div className={styles.title}>
                <Typography variant='h5' component='div' sx={{marginTop:5, marginLeft:5, fontWeight:600}}>자유게시판</Typography>
              <div className={styles.buttonicons}>
              <Fab color="primary" aria-label="add" onClick={AddHandler}>
                <AddIcon />
              </Fab>
              <Fab color="secondary" aria-label="edit" sx={{marginLeft:2}}>
                <EditIcon />
              </Fab>
              </div>
              </div>
              <div className={styles.table}>
              <ShowTable/>
              </div>
            )}
            </MyPaper>
          </div>
            </div>
        </>
    );
}
export default HomePage;
import styled from '@emotion/styled';
import styles from './sidebar.module.css';
import {Box, List, ListItem, ListItemButton, ListItemText,Divider} from '@mui/material';

const SideBar=()=>{
    const MyList=styled(List)({
        width:250,
        marginTop:10,
        
    });
    const MyListItem=styled(ListItem)({
        width:250,
        height:60,
    });
    const MyListItemButton=styled(ListItemButton)({
        width:250,
        height:60,
    });
    return(
        <>
            <nav>
               <MyList>
                <MyListItem disablePadding>
                    <MyListItemButton component="a" href="#simple-list">
                    <ListItemText primary="자유게시판" />
                    </MyListItemButton>
                </MyListItem>
                <Divider />
                <MyListItem disablePadding>
                    <MyListItemButton component="a" href="#simple-list">
                    <ListItemText primary="토론게시판" />
                    </MyListItemButton>
                </MyListItem>
                <Divider />
                <MyListItem disablePadding>
                    <MyListItemButton component="a" href="#simple-list">
                    <ListItemText primary="공지게시판" />
                    </MyListItemButton>
                </MyListItem>
                <Divider />
                <MyListItem disablePadding>
                    <MyListItemButton component="a" href="#simple-list">
                    <ListItemText primary="질문게시판" />
                    </MyListItemButton>
                </MyListItem>
                <Divider />
                <MyListItem disablePadding>
                    <MyListItemButton component="a" href="#simple-list">
                    <ListItemText primary="게시판" />
                    </MyListItemButton>
                </MyListItem>
                
                
                </MyList> 
            </nav>
        
        </>
    );
}
export default SideBar;
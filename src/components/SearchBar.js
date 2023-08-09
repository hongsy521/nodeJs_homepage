import styles from './searchbar.module.css';
import {IconButton, InputBase, Paper} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';

const SearchBar=()=>{
    const MyPaper=styled(Paper)({
        width:500,
        marginTop:50,
        marginLeft:200,
    });

    return(
        <>
            <MyPaper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
            </IconButton>
            <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="검색어를 입력하세요..."
            inputProps={{ 'aria-label': 'search google maps' }}
            />
            </MyPaper>
        </>
    );
}
export default SearchBar;
import styles from './header.module.css';
import { AppBar, Box, Toolbar, IconButton, Typography, Button,Paper,InputBase} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Header=()=>{
    return(
        <>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Paper
            component="form"
            sx={{ p: '2px 2px', display: 'flex', alignItems: 'center', width: 350,height:35,marginRight:80 }}
            >
            <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="검색어를 입력하세요..."
            inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
            </IconButton>
            </Paper>
          <Button color="inherit" component="a" href='/login'>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
        </>
    );
}
export default Header;
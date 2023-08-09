import styles from './showtable.module.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ShowTable=()=>{

    function createData(ID, Title, Date, Read){
        return{ID, Title, Date, Read};
    }
    const rows=[
        createData('홍시','야호',2023/8/9,17),
        createData('홍시','야호',2023/8/9,17),
        createData('홍시','야호',2023/8/9,17),
        createData('홍시','야호',2023/8/9,17),
        createData('홍시','야호',2023/8/9,17),
        createData('홍시','야호',2023/8/9,17),
        createData('홍시','야호',2023/8/9,17),
    ];

    return(
        <>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Read</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.ID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.ID}
              </TableCell>
              <TableCell>{row.Title}</TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right">{row.Read}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>
        </>
    );
}
export default ShowTable;
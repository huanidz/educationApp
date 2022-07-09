import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import IconButton from '@mui/material/IconButton';
import { height } from '@mui/system';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

var rows = [];
const getData = async () => {
    const res = await fetch("https://huy-huan.herokuapp.com/course");
    const datas = await res.json();
    console.log('data', datas);
    rows=datas;
    console.log('a',rows)
}

const handleDelete = (id)=>{
  axios.delete('https://huy-huan.herokuapp.com/lesson', {
    id: id,
  })
  .then();
}

console.log('row',rows)
export default function CustomizedTables(datatb,handledit,handledelete) {
  return (
    <TableContainer sx={{ maxHeight: 800 }}>
      <Table style={{ height:'700px' }} sx={{  maxHeight:700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Mã số bài học</StyledTableCell>
            <StyledTableCell align="right">Tên Bài Học</StyledTableCell>

            <StyledTableCell align="right">link video bài học</StyledTableCell>


            <StyledTableCell align="right">Chức năng&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            
          {console.log('tb',datatb,datatb.datatb.length)}
          
          {datatb.datatb && datatb.datatb.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.nameLesson}</StyledTableCell>

              <StyledTableCell align="right">{row.linkvideo}</StyledTableCell>
              <StyledTableCell align="right"><Tooltip title="Sửa" >
  <IconButton onClick={handledit}>
    <DesignServicesIcon />
  </IconButton>
</Tooltip><Tooltip title="Xóa">
  <IconButton onClick={() =>handleDelete(row.id)}>
    <DeleteIcon/>
  </IconButton>
</Tooltip></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

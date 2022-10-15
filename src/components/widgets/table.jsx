import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, email, product, price, date,city,status) {
  return { name, email, product, price, date,city,status };
}

const rows = [
  createData('Driver 1', 'driver1@example.com', 'Raw Materials', '25,244Rs', '11 May 2022', 'Trivandrum', 'Sent'),
  createData('Driver 2', 'driver2@example.com', 'Raw Materials', '4,254Rs', '04 June 2022', 'Bangalore', 'Completed'),
  createData('Driver 3', 'driver3@example.com', 'Raw Materials', '6,7590s', '27 June 2022', 'Chennai', 'Pending'),
  createData('Driver 4', 'driver4@example.com', 'Raw Materials', '2,000Rs', '06 August 2022', 'Mumbai', 'Pending'),
  createData('Driver 5', 'driver5@example.com', 'Raw Materials', '25,244Rs', '27 August 2022', 'Kolkata', 'Completed'),
];

export default function BTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell align="right">EMAIL</TableCell>
            <TableCell align="right">PRODUCT</TableCell>
            <TableCell align="right">PRICE</TableCell>
            <TableCell align="right">DATE</TableCell>
            <TableCell align="right">CITY</TableCell>
            <TableCell align="right">STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.product}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
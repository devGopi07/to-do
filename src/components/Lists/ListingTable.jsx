import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ListingTable =({ tableMeta, tableData, customActions })=> {
  let columnHeader = Object.values(tableMeta);
  let keysToMap = Object.keys(tableMeta);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columnHeader?.map((d,idx) => (
             idx == 0 ? <TableCell  key={d}>{d}</TableCell> : <TableCell align="center">{d}</TableCell> 
            ))}
            {customActions && <TableCell component="th" scope="row" ></TableCell> }
            
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {keysToMap?.map((d,idx) => (
                idx == 0 ? <TableCell component="th" scope="row" >{row?.[d]}</TableCell> : <TableCell align="center">{row?.[d]}</TableCell> 
              ))}
              {customActions && <TableCell component="th" scope="row"  > <p className=" font-semibold text-red-700 cursor-pointer" onClick={()=>customActions?.handler(row)} >{customActions?.text}</p> </TableCell> }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default ListingTable

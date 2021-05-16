import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TablePersons = ({ data }) => {
  const classes = useStyles();
  if (!data) {
    return <div></div>;
  }

  return (
    <div>
      <table className='flat-table'>
        <thead>
          <th>Nombre</th>
          <th>Numero de Fotos</th>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
            <td> {row.name} </td>
            <td> {row.persistedFaceIds.length} </td>
            </tr>
          ))} 
        </tbody>
      </table>
    </div>
  );
};

export default TablePersons;

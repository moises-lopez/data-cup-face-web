import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EmotionChart from "./EmotionChart";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable({ data }) {
  const classes = useStyles();

  if (!data) {
    return <div></div>;
  }

  const keys = Object.keys(data);

  const emojiArray = {
    anger: "😠",
    contempt: "😒",
    disgust: "🤢",
    fear: "😨",
    happiness: "😃",
    neutral: "😐",
    sadness: "😰",
    surprise: "😮",
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableRow>
          <TableHead>
            {keys.map((key) => (
              <TableCell component="th" scope="row">
                {key + emojiArray[key]}
              </TableCell>
            ))}
          </TableHead>
          <TableBody>
            {keys.map((key) => (
              <TableCell component="th" scope="row">
                {data[key]}
                <EmotionChart props={{ data: data, key: key }}></EmotionChart>
              </TableCell>
            ))}
          </TableBody>
        </TableRow>
      </Table>
    </TableContainer>
  );
}

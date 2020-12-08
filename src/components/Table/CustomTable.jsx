import React from 'react'
import { TableContainer, TableHead, TableRow, TableCell, Paper, TableBody, Table } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    background: "#191818",
    minWidth: 650,
  },
});

export default function CustomTable({ columns, rows }) {
  const classes = useStyles();
  const keys = Object.keys(rows[0])

  return (
    columns !== undefined ? (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {
                columns.map(column => (
                  <TableCell key={column}>{column}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                {
                  keys.map(obKey => (
                    <TableCell>
                      <Link to={`/${row.id}`}>
                        {row[obKey]}
                      </Link>
                    </TableCell>
                  ))
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    ) : (<div>oops nothing found</div>)

  )
}

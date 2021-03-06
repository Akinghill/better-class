import React from 'react'
import { DataGrid } from '@material-ui/data-grid'
import roster from '../../data/student.js'
const columns = [
  { field: 'id', headerName: 'DOC #', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'grade',
    headerName: 'Grade',
    width: 90,
  },
];

const rows = roster; 

export default function ClassRoster() {
  return (
    <div style={{"height": "90vh"}}>
      <DataGrid rows={rows} columns={columns}/>
    </div>
  )
}

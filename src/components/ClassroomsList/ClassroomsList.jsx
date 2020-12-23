import React from 'react'
import { Link } from "react-router-dom";

export default function ClassroomsList({classrooms}) {
  return (
    <div>
      {
        classrooms && classrooms.map((classroom) => (
          <Link to={`/classroom/${classroom.id}`} key={classroom.id}>
            <h1>{classroom.roomName}</h1>
          </Link>
        ))
      }
    </div>
  )
}


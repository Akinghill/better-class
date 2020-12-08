import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core'

import TabPanel from './TabPanel'
import CustomTable from '../Table/CustomTable'
import List from '../List/List'
import classrooms from '../../data/classroom'
import roster from '../../data/roster'
import EnhancedTable from '../Table/EnhancedTable';

const useStyles = makeStyles((theme) => ({
  tabMenu: {
    flexGrow: 1,
    background: "#191818",
    marginBottom: ".5rem"
  },
}));

const TabMenu = ({ tabOptions }) => {
  const rosterColunms = [
    {
      id: "firstName",
      numeric: false,
      disablePadding: false,
      label: "First Name"
    },
    {
      id: "lastName",
      numeric: false,
      disablePadding: false,
      label: "Last Name"
    },
    {
      id: "id",
      numeric: false,
      disablePadding: false,
      label: "ID"
    },
    {
      id: "grade",
      numeric: false,
      disablePadding: false,
      label: "Grade"
    }
  ]

  const classroomsColumns = ["Room Name", "State"]
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Paper className={classes.tabMenu}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          {
            tabOptions.map(option => (<Tab label={option} key={option} />))
          }
        </Tabs>
      </Paper>

      {
        tabOptions.map((option, index) => (
          <TabPanel value={value} index={index} key={option}>

            {option.toLowerCase() === "roster" && <EnhancedTable rows={roster} columns={rosterColunms}></EnhancedTable>}
            {/* {option.toLowerCase() === "roster" && <CustomTable rows={roster} columns={rosterColunms}></CustomTable>} */}
            {option.toLowerCase() === "classrooms" && <CustomTable rows={classrooms} columns={classroomsColumns}></CustomTable>}
            {/* {option.toLowerCase() === "roster" && <List listItems={roster}></List>} */}
          </TabPanel>
        ))
      }
    </div>
  )
}

export default TabMenu
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core'

import TabPanel from './TabPanel'
import List from '../List/List'
import ClassRoster from '../ClassRoster/ClassRoster';

const useStyles = makeStyles((theme) => ({
  tabMenu: {
    flexGrow: 1,
    background: "#191818"
  },
}));

const TabMenu = ({ tabOptions }) => {
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
            tabOptions.map(option => (<Tab label={option} />))
          }
        </Tabs>
      </Paper>

      {
        tabOptions.map((option, index) => (
          <TabPanel value={value} index={index}>
            {option.toLowerCase() === "classrooms" && <List listItems={["Whetstone", "Perryville"]}></List>}
          </TabPanel>
        ))
      }
    </div>
  )
}

export default TabMenu
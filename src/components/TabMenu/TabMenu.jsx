import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab } from '@material-ui/core'

import TabPanel from './TabPanel'

const useStyles = makeStyles((theme) => ({
  tabMenu: {
    flexGrow: 1,
    background: "#191818",
    marginBottom: ".5rem"
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
            tabOptions.map(option => (<Tab label={option} key={option} />))
          }
        </Tabs>
      </Paper>

      {
        tabOptions.map((option, index) => (
          <TabPanel value={value} index={index} key={option} option={option} />
        ))
      }
    </div>
  )
}

export default TabMenu
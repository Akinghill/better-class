import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import clsx from 'clsx'

import { Drawer, IconButton, List, ListItemText, ListItemIcon, Divider, ListItem } from '@material-ui/core'
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import InfoIcon from '@material-ui/icons/Info';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import { toggleDrawer, openClassroomForm, openStudentForm } from '../../store/actions/buttonActions'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

function DrawerMenu(props) {
  const open = props.drawerOpen
  const classes = useStyles()
  const theme = useTheme();

  return (
    <div>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={props.toggleDrawer} >
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button onClick={props.openStudentForm}>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Student" />
            </ListItem>

            <ListItem button onClick={props.openClassroomForm}>
              <ListItemIcon>
                <GroupAddIcon />
              </ListItemIcon>
              <ListItemText primary="Add Classroom" />
            </ListItem>



          {/* {['Info', 'Add Student', 'Add Classroom'].map((text, index) => (
            <ListItem button key={text} onClick={props.toggleStudentForm}>
              <ListItemIcon>
                {index === 0 && <InfoIcon />}
                {index === 1 && <PersonAddIcon />}
                {index === 2 && <GroupAddIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>
        <Divider />
      </Drawer>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.buttons.drawerOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: () => dispatch(toggleDrawer()),
    openClassroomForm: () => dispatch(openClassroomForm()),
    openStudentForm: () => dispatch(openStudentForm()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu)
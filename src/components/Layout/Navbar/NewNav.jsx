import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { List, Toolbar, AppBar, Drawer, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import InfoIcon from '@material-ui/icons/Info';

import { toggleDrawer } from '../../../store/actions/buttonActions'

import SignedInLinks from '../Navbar/SignedInLinks'
import SignedOutLinks from '../Navbar/SignedOutLinks'
import DrawerMenu from '../DrawerMenu';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  title: {
    flex: 1
  }
}));

function NewNav(props) {
  const classes = useStyles();
  const open = props.drawerOpen
  const { auth } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.toggleDrawer}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            Better Class
          </Typography>
          {
            auth.uid ? <SignedInLinks /> : <SignedOutLinks />
          }
        </Toolbar>
      </AppBar>
      {
        auth.uid && <DrawerMenu />
      }
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    drawerOpen: state.buttons.drawerOpen
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrawer: () => dispatch(toggleDrawer()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNav)
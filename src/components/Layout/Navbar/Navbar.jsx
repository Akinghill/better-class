import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux'
import { fade, makeStyles, useTheme } from '@material-ui/core/styles';
import { List, Toolbar, AppBar, Drawer, InputBase, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import InfoIcon from '@material-ui/icons/Info';
import SearchIcon from '@material-ui/icons/Search';


import { toggleDrawer } from '../../../store/actions/buttonActions'

import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  navLinks: {
    flex: 1,
    display: "flex",
    justifyContent: 'flex-end'
  }
}));

function Navbar(props) {
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
          {
            auth.uid &&
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
          }
          <Typography variant="h6" noWrap className={classes.title}>
            Better Class
          </Typography>

          {
            auth.uid &&
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          }

          <div className={classes.navLinks}>
            {
              auth.uid ? <SignedInLinks /> : null
            }
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
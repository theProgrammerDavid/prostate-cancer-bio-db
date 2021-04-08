import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { setUserCurrentPage, selectPage, getUser } from './features/counter/counterSlice'
import {
  Avatar, Drawer, AppBar, Toolbar, List, CssBaseline, Typography,
  Divider, IconButton, ListItem, ListItemIcon, ListItemText
} from '@material-ui/core'


import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ContactMail as ContactMailIcon,
  LockOpen as LockOpenIcon,
  PersonAdd as PersonAddIcon,
  Search as SearchIcon,
  Assessment as AssesmentIcon
} from '@material-ui/icons'

import LoginPage from 'pages/LoginPage';
import SignupPage from 'pages/SignUp';
import ContactUs from 'pages/ContactUs';
import HomePageCarousel from 'components/HomePageCarousel';
import RawQuery from 'pages/RawQuery';

const drawerWidth = 240;


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    whiteText: {
      color: 'white'
    }
  }),
);

export default function MiniDrawer() {
  const dispatch = useDispatch();
  const userLogin = useSelector(getUser);
  const getPage = useSelector(selectPage);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const drawLoginContent = () => {
    if (userLogin.length <= 0) {
      return <></>;
    }

    return (
      <>
        <ListItem button onClick={e => { dispatch(setUserCurrentPage('rawQuery')) }}>
          <ListItemIcon> <SearchIcon /></ListItemIcon>
          <ListItemText primary="RAW query"></ListItemText>
        </ListItem>

        <ListItem button onClick={e => { dispatch(setUserCurrentPage('statistics')) }}>
          <ListItemIcon> <AssesmentIcon /></ListItemIcon>
          <ListItemText primary="Statistics"></ListItemText>
        </ListItem>
      </>
    );
  }

  const drawContent = () => {
    switch (getPage) {

      case 'homepage':
        return <>
          <HomePageCarousel animation="fade"
            autoPlay={true}
            indicators={true}
            timeout={500}
            navButtonsAlwaysVisible={true}
            navButtonsAlwaysInvisible={false}
            cycleNavigation={true}
          />
          
        </>;

      case 'signup':
        return <SignupPage />;

      case 'login':
        return <LoginPage />;

      case 'contact':
        return <ContactUs />;
      
      case 'rawQuery':
        return <RawQuery />
    }
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Button>
            <Typography variant="h6"
              className={classes.whiteText}
              onClick={e => { dispatch(setUserCurrentPage('homepage')) }} noWrap>

              Prostate Cancer DB
          </Typography>
          </Button>
        </Toolbar>
      </AppBar>
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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={e => { dispatch(setUserCurrentPage('login')) }}>
            <ListItemIcon> <LockOpenIcon /></ListItemIcon>
            <ListItemText primary="Login"></ListItemText>
          </ListItem>

          <ListItem button onClick={e => { dispatch(setUserCurrentPage('signup')) }}>
            <ListItemIcon> <PersonAddIcon /></ListItemIcon>
            <ListItemText primary="Sign Up"></ListItemText>
          </ListItem>

          <ListItem button onClick={e => { dispatch(setUserCurrentPage('contact')) }}>
            <ListItemIcon> <ContactMailIcon /></ListItemIcon>
            <ListItemText primary="Contact Us"></ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List>
          {drawLoginContent()}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {drawContent()}
      </main>
    </div>
  );
}

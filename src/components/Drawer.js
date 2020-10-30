import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Miletus from './Miletus';
import Medieval from './Medieval';
import Home from './Home';
import Copyright from './Copyright';
import agora from '../agora.jpg';
import { Backdrop } from '@material-ui/core';
import Athens from './Athens';
import Imperial from './Imperial';
import Republican from './Republican';
import Corinth from './Corinth';
import Shipping from './Shipping';
import SignIn from './SignIn';
import British from './British';
import Spanish from './Spanish';
import French from './French';
import German from './German';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background:`linear-gradient(grey, black)`,
    color: 'white',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    backgroundColor:`white`,
    boxShadow: 'none',
    color: 'white',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    background:'linear-gradient(black, grey)',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: '100%',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

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
        style={{ background: 'transparent', boxShadow: 'none'}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h3" noWrap style={{ fontFamily:'Lateef', textShadow:'3px 3px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white', color: 'black'}}>
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <List>
            <dl>
                <dt style={{textAlign: 'center', color: 'white',   paddingLeft: '20px'}}>Agora Antiquities</dt>
                <dd>
                <Link to="/" style={{textAlign: 'center', color: 'white',   paddingLeft: '20px'}}>Home</Link>
                </dd>
                <dd>
                <Link to="/signin" style={{textAlign: 'center', color: 'white',   paddingLeft: '20px'}}>Profile</Link>
                </dd>
                <dd>
                <Link to="/shipping" style={{textAlign: 'center', color: 'white',   paddingLeft: '20px'}}>Shipping</Link>
                </dd>
            </dl>
        </List>
        <Divider />
        <List>
            <dl>
                <dt style={{textAlign: 'center', color: 'white',   paddingLeft: '20px'}}>Greek</dt>
                <dd>
                <Link to="/athens" style={{textAlign: 'center', color: 'white',   paddingLeft: '20px'}}>Athens</Link>
                </dd>
                <dd>
                <Link to="/miletus" style={{textAlign: 'center', color: 'white',   paddingLeft: '20px'}}>Miletus</Link>
                </dd>
                <dd>
                <Link to="/corinth" style={{textAlign: 'center', color: 'white',   paddingLeft: '20px'}}>Corinth</Link>
                </dd>
            </dl>
        </List>
        <Divider />
        <List>
            <dl>
                <dt style={{textAlign: 'center', color: 'white',   paddingLeft: '20px'}}>Roman</dt>
                <dd>
                <Link to="/republican" style={{textAlign: 'center', color: 'white',   paddingLeft: '20px'}}>Republican</Link>
                </dd>
                <dd>
                <Link to="/imperial" style={{textAlign: 'center', color: 'white',   paddingLeft: '20px'}}>Imperial</Link>
                </dd>
            </dl>
        </List>
        <Divider />
        <List>
            <dl>
                <dt style={{textAlign: 'center', color: 'white',   paddingLeft: '20px'}}>Early Modern</dt>
                <dd>
                <Link to="/british" style={{textAlign: 'center', color: 'white',   paddingLeft: '20px'}}>British</Link>
                </dd>
                <dd>
                <Link to="/french" style={{textAlign: 'center', color: 'white',   paddingLeft: '20px'}}>French</Link>
                </dd>
                <dd>
                <Link to="/german" style={{textAlign: 'center', color: 'white',   paddingLeft: '20px'}}>German</Link>
                </dd>
                <dd>
                <Link to="/spanish" style={{textAlign: 'center', color: 'white',   paddingLeft: '20px'}}>Spanish</Link>
                </dd>
            </dl>
        </List>
      </Drawer>
      <main className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      <Switch>
      <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/miletus">
            <Miletus />
          </Route>
          <Route exact path="/athens">
            <Athens />
          </Route>
          <Route exact path="/imperial">
            <Imperial />
          </Route>
          <Route exact path="/republican">
            <Republican />
          </Route>
          <Route exact path="/corinth">
            <Corinth />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/shipping">
            <Shipping />
          </Route>
          <Route exact path="/british">
            <British />
          </Route>
          <Route exact path="/french">
            <French />
          </Route>
          <Route exact path="/spanish">
            <Spanish />
          </Route>
          <Route exact path="/german">
            <German />
          </Route>
      </Switch>
      </main>
      </Router>
    </div>
  );
}
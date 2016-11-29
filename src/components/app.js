import React, { Component } from 'react'
import { Router, Route, hashHistory } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Home from './home/home'

import {blueHiThere} from './../styling/index'

//With this object you are able to overwrite the MU Theme
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blueHiThere,
        primary2Color: blueHiThere,
        accent1Color: blueHiThere
    }
})
 
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <Router history={hashHistory}>
            <Route path="/" component={Home}/>
          </Router>
        </MuiThemeProvider>
    );
  }
}

export default App;

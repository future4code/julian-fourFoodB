import React from 'react';
import Routes from './Routes'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';


function App() {
  return (
      <div className="App">
        <Routes />
      </div>
  );
}

export default App;

import React from 'react';
import Routes from './Routes'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e8222e",
    },
  },
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider >
    </div>
  );
}

export default App;

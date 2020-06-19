import React, { useReducer } from 'react';
import Routes from './Routes'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import FilterContext from './Context/FilterContext'
import { storeReducer, initialState } from './Reducers/store'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e8222e",
    },
  },
});


function App() {

  const [state, dispatch] = useReducer(storeReducer, initialState)

  return (
    <div className="App">
      <FilterContext.Provider value={{ filter: state.filter, dispatch: dispatch }}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider >
      </FilterContext.Provider>
    </div>
  );
}

export default App;

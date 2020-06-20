import React, { useReducer } from 'react';
import Routes from './Routes'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';
import CartContext from './Context/CartContext'
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
      <CartContext.Provider value={{ cart: state.cart, dispatch: dispatch }}>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider >
      </CartContext.Provider>
    </div>
  );
}

export default App;

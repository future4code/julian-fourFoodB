import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import Cart from "../Pages/Cart";
import NewAddress from "../Components/NewAddress";
import Restaurant from "../Pages/Restaurant";

const Routes = () => {

  const token = localStorage.getItem('token')

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          {token !== null ? <Home /> : <Login />}
        </Route>

        <Route exact path='/cadastro'>
          <SignUp />
        </Route>

        <Route exact path='/novoendereco'>
          <NewAddress />
        </Route>

        <Route exact path='/home'>
          <Home />
        </Route>

        <Route exact path='/restaurante/:restaurantId'>
          <Restaurant />
        </Route>

        <Route exact path='/perfil'>
          <Profile />
        </Route>

        <Route exact path='/carrinho'>
          <Cart />
        </Route>

        <Route exact path="/home/:id">
          <Restaurant />
        </Route>

        <Route path='/'>Erro 404 - página não encontrada</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

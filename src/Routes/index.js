import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../Pages/Login'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">Funciona</Route>

                <Route exact path="/cadastro">Cadastro funciona</Route>

                <Route exact path="/login"><Login /></Route>

                <Route path="/">Erro 404 - página não encontrada</Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Page404 from "./pages/Page404";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import RouterProvider from "./router/RouterProvider";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={RouterProvider.getByAlias("home")}>
          <Dashboard />
        </Route>

        <Route exact path={RouterProvider.getByAlias("login")}>
          <Login />
        </Route>

        <Route exact path={RouterProvider.getByAlias("signup")}>
          <Signup />
        </Route>

        <Route exact path={RouterProvider.getByAlias("admin")}>
          <Home />
        </Route>

        <Route exact path={RouterProvider.getByAlias("product")}>
          <Product />
        </Route>

        <Route exact path={RouterProvider.getByAlias("cart")}>
          <Cart />
        </Route>

        <Route exact path={RouterProvider.getByAlias("page404")}>
          <Page404 />
        </Route>
        <Redirect from="*" to={RouterProvider.getByAlias("page404")} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

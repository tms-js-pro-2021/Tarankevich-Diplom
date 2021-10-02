import Home from './pages/Home';
import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';

import { StyleDashboard } from "./components/Styles";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <Router>
        <Switch>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/productlist">
            <ProductList/>
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;




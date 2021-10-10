import Home from './pages/Home';
import React from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Cart from './pages/Cart';
import { state } from './components/State';

import { StyleDashboard } from "./components/Styles";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useState } from 'react';




function App() {
  let [object, setObject] = useState(state.items[0])
  const openCart = (itemId) => {
     let item = state.items.filter(i => i.id == itemId)
  setObject(item)

  }
  
  console.log(object)
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
            <Dashboard state={state} openCart={openCart}/>
          </Route>
          <Route path="/productlist">
            <ProductList items={state.items} openCart={openCart}/>
          </Route>
          <Route path={"/product"}>
            <Product items={state.items[0]}/>
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




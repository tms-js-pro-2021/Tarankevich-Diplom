
import Home from './pages/Home';
import React from "react";
import Login from "./pages/Login";

import { StyledContainer } from "./components/Styles";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <StyledContainer>
        <Login />
      </StyledContainer>
    </Router>
 
  );
}

export default App;

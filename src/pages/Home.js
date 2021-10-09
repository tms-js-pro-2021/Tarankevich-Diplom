import {StyledTitle, StyledSubTitle, Avatar, StyledButton,ButtonGroup} 
from './../components/Styles';
import React from "react";
import Logo from "./../assets/logo.jpg";
import { StyledContainer } from "../components/Styles";

const Home= () => {
  return (
    <StyledContainer>
    <div > 
      <div style = {{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor:'transparent',
        width: "100%",
        padding: "15px",
        display: "flex",
        justifyContent: "flex-start",
      }}>
        <Avatar image={Logo} />
      </div>
      <StyledTitle size={65}>
        Хоккейный магазин
      </StyledTitle>
      <StyledSubTitle size={27}>
        
      </StyledSubTitle>
      <ButtonGroup>
        <StyledButton to= "/login">Login</StyledButton>
        <StyledButton to= "/signup">Signup</StyledButton>
      </ButtonGroup>
    </div>
    </StyledContainer>
  )
};

export default Home;
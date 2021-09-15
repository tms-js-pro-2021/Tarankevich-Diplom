import {
  StyledTitle, 
  StyledSubTitle, 
  Avatar, 
  StyledButton,
  ButtonGroup,
  StyledFormArea,
  colors
} 
from './../components/Styles';
import React from "react";

import Logo from "./../assets/logo.jpg";

const Dashboard= () => {
  return (
    <div>
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
      <StyledFormArea bg={colors.aliceblue}>
          <StyledTitle size={65}>
            Хоккейный магазин
          </StyledTitle>
        
          <ButtonGroup>
            <StyledButton to= "#">Logout</StyledButton>
          </ButtonGroup>
      </StyledFormArea>
    </div>
  )
};

export default Dashboard;
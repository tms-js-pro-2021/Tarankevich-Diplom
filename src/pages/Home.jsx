import React from "react";
import {
  StyledTitle,
  StyledSubTitle,
  StyledContainer,
  Avatar,
  StyledButton,
  ButtonGroup,
} from "../components/Styles";
import Logo from "../assets/logo.jpg";

const Home = () => (
  <StyledContainer>
    <div>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "transparent",
          width: "100%",
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Avatar image={Logo} />
      </div>
      <StyledTitle size={65}>Хоккейный магазин</StyledTitle>
      <StyledSubTitle size={27} />
      <ButtonGroup>
        <StyledButton to="/login">Login</StyledButton>
        <StyledButton to="/signup">Signup</StyledButton>
      </ButtonGroup>
    </div>
  </StyledContainer>
);

export default Home;

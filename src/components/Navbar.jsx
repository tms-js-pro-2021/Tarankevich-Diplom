import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Mobile from "../responsive";
import RouterProvider from "../router/RouterProvider";

const Container = styled.div`
  height: 60px;
  ${Mobile({ backgroundColor: "red" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = ({ cart }) => (
  <Container>
    <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
          <Input />
          <Search style={{ color: "gray", fontSize: 16 }} />
        </SearchContainer>
      </Left>
      <Center>
        <NavLink to={RouterProvider.getByAlias("home")}>
          <Logo>Hockey Shop</Logo>
        </NavLink>
      </Center>
      <Right>
        <NavLink to={RouterProvider.getByAlias("admin")}>
          <MenuItem>Admin Panel</MenuItem>
        </NavLink>
        <MenuItem>
          <NavLink to={RouterProvider.getByAlias("cart")}>
            <Badge badgeContent={cart.quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </NavLink>
        </MenuItem>
      </Right>
    </Wrapper>
  </Container>
);

export default Navbar;

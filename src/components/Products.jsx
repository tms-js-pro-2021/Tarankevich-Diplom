import styled from "styled-components";
import React from "react";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
padding: 20px;
display: grid;
grid-template-columns: repeat(4, 1fr);
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map(item=>(
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Products
import styled from "styled-components";
import React from "react";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
padding: 20px;
display: grid;
grid-template-columns: repeat(4, 1fr);
`;

const Products = (props) => {
  return (
    <Container>
      {props.items.map(item=>(
        //<Product item={item} key={item.id}/>
        <Product img={item.image} key={item.id} id={item.id} openCart={props.openCart}/>
      ))}
    </Container>
  )
}

export default Products
import React from "react";
import styled from "styled-components";
import ProductContainer from "./ProductContainer";

const Container = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
`;

const Products = ({ items }) => (
  <Container>
    {items.map((item) => (
      <ProductContainer key={item.id} item={item} />
    ))}
  </Container>
);

export default Products;

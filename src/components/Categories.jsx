import styled from "styled-components"
import React from "react"
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding: 20px;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map(item=>(
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories
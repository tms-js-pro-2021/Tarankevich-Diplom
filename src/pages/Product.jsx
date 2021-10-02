import styled from "styled-components";
import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";


const Container = styled.div``;
const Wrapper = styled.div`
display: flex;
padding: 50px;
background-color: #f2f2f2;
`;

const ImgContainer = styled.div`
flex: 1;
`;

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`;

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`;

const Title = styled.h1`
font-weight: 600;
`;

const Desc = styled.p`
margin: 20px 0px;
`;

const Price = styled.span`
font-weight: 350;
font-size: 40px;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin: 30px 0px;
`;

const Filter = styled.div`
display: flex;
align-items: center;
`;

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px ;
cursor: pointer;
`;

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;

const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin:0px 5px;
`;

const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;



const Product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImgContainer>
          <Image src = "https://cdn.shopify.com/s/files/1/0020/1585/4658/products/pens-outerstuff-both_78cc8a8c-e49a-49f8-b8a8-987c7964fcdc_720x.jpg?v=1610653635"/>
        </ImgContainer>
        <InfoContainer>
          <Title>Pittsburgh Penguins</Title>
          <Desc>Home Outer Stuff Replica Youth Jersey</Desc>
          <Price>$79.99</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color = "black"/>
              <FilterColor color = "blue"/>
              <FilterColor color = "gray"/>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove/>
              <Amount>1</Amount>
              <Add/>
            </AmountContainer>
            <Button>ADD TO BAG</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
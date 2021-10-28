import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import NavbarContainer from "../components/NavbarContainer";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import API from "../api/API";
import { addToCart } from "../redux/Cart/cart-actions";

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
  width: 50%;
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
  background-color: ${(props) => props.color};
  margin: 0px 5px;
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
  margin: 0px 5px;
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

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { product: [], quantity: 1 };
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.handleAddItemToCart = this.handleAddItemToCart.bind(this);
  }

  componentDidMount() {
    const api = new API();
    const { match } = this.props;
    api.getProduct(match.params.id).then((response) => {
      this.setState({
        product: response.data,
      });
    });
  }

  handleAddItemToCart() {
    const { addProductToCart } = this.props;
    const { product, quantity } = this.state;
    addProductToCart(product, quantity);
  }

  incrementCount() {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  }

  decrementCount() {
    let quantity = this.state.quantity - 1;
    this.setState({
      quantity: quantity > 0 ? quantity : 1,
    });
  }

  render() {
    const { product, quantity } = this.state;
    return (
      <Container>
        <NavbarContainer />
        <Announcement />
        <Wrapper>
          <ImgContainer>
            <Image src={product.image} />
          </ImgContainer>
          <InfoContainer>
            <Title>{product.name}</Title>
            <Desc>{product.description}</Desc>
            <Price>{product.price}$</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color={product.color} />
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>{product.size}</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Remove onClick={this.decrementCount} />
                <Amount>{quantity}</Amount>
                <Add onClick={this.incrementCount} />
              </AmountContainer>
              <Button onClick={this.handleAddItemToCart}>ADD TO BAG</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product, quantity) => {
    dispatch(addToCart(product, quantity));
  },
});

const ProductWithRouter = withRouter(Product);
export default connect(null, mapDispatchToProps)(ProductWithRouter);

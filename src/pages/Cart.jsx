import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Add, Remove, Delete } from "@material-ui/icons";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import NavbarContainer from "../components/NavbarContainer";
import RouterProvider from "../router/RouterProvider";
import {
  adjustItemQty,
  removeFromCart,
  cleanCart,
} from "../redux/Cart/cart-actions";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

class Cart extends Component {
  constructor(props) {
    super(props);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.buy = this.buy.bind(this);
    this.cleanCart = this.cleanCart.bind(this);
  }

  buy() {
    this.cleanCart();
    alert("Thank you for your order!");
  }

  cleanCart() {
    const { removeAllItemsFromCart } = this.props;
    removeAllItemsFromCart();
  }

  incrementCount(itemId) {
    const { adjustProductCart } = this.props;
    adjustProductCart(itemId, 1);
  }

  decrementCount(itemId) {
    const { adjustProductCart } = this.props;
    adjustProductCart(itemId, -1);
  }

  removeItemFromCart(itemId) {
    const { removeProductFromCart } = this.props;
    removeProductFromCart(itemId);
  }

  render() {
    const { items, cart } = this.props;
    let totalPrice = 0;
    return (
      <Container>
        <NavbarContainer />
        <Announcement />
        <Wrapper>
          <Title>YOUR CART</Title>
          <Top>
            <NavLink to={RouterProvider.getByAlias("home")}>
              <TopButton>CONTINUE SHOPPING</TopButton>
            </NavLink>
            <TopButton onClick={this.cleanCart}>CLEAN CART</TopButton>
            <TopTexts>
              <TopText>Shapping Bag({cart.quantity})</TopText>
              <TopText>Your Wishlist</TopText>
            </TopTexts>
          </Top>
          <Bottom>
            <Info>
              {items.length > 0 ? (
                items.map((item, index) => {
                  totalPrice += item.totalPrice;
                  return (
                    <Product key={index}>
                      <ProductDetail>
                        <Image src={item.image} />
                        <Details>
                          <ProductName>
                            <b>Product: </b>
                            {item.name}
                          </ProductName>
                          <ProductId>
                            <b>ID: </b>
                            {item.id}
                          </ProductId>
                          <ProductColor color={item.color} />
                          <ProductSize>
                            <b>Size: </b>
                            {item.size}
                          </ProductSize>
                        </Details>
                      </ProductDetail>
                      <PriceDetail>
                        <ProductAmountContainer>
                          <Add onClick={() => this.incrementCount(item.id)} />
                          <ProductAmount>{item.quantity}</ProductAmount>
                          <Remove
                            onClick={() => this.decrementCount(item.id)}
                          />
                        </ProductAmountContainer>
                        <ProductPrice>$ {item.totalPrice}</ProductPrice>
                        <button
                          onClick={() => this.removeItemFromCart(item.id)}
                          type="button"
                        >
                          <Delete /> Remove
                        </button>
                      </PriceDetail>
                    </Product>
                  );
                })
              ) : (
                <h1>Cart is empty</h1>
              )}
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
              </SummaryItem>
              <Button onClick={this.buy}>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.shop.cart.products,
  cart: {
    quantity: state.shop.cart.quantity,
  },
});

const mapDispatchToProps = (dispatch) => ({
  removeProductFromCart: (product, quantity) => {
    dispatch(removeFromCart(product, quantity));
  },
  adjustProductCart: (itemId, quantity) => {
    dispatch(adjustItemQty(itemId, quantity));
  },
  removeAllItemsFromCart: () => {
    dispatch(cleanCart());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

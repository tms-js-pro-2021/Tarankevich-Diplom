import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { addToCart } from "../redux/Cart/cart-actions";

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAddItemToCart = this.handleAddItemToCart.bind(this);
  }

  handleAddItemToCart() {
    const { item, addProductToCart } = this.props;
    return addProductToCart(item, 1);
  }

  render() {
    const { item } = this.props;
    return (
      <Product
        key={item.id}
        id={item.id}
        img={item.image}
        addItemToCart={this.handleAddItemToCart}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product, quantity) => {
    dispatch(addToCart(product, quantity));
  },
});

export default connect(null, mapDispatchToProps)(ProductContainer);

import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";
import { adjustItemQty } from "../redux/Cart/cart-actions";

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.handleAddItemToCart = this.handleAddItemToCart.bind(this);
  }

  handleAddItemToCart() {
    const { item, addItemToCart } = this.props;
    return addItemToCart(item.id, 1);
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
  addItemToCart: (itemId, quantity) => {
    dispatch(adjustItemQty(itemId, quantity));
  },
});

export default connect(null, mapDispatchToProps)(ProductContainer);

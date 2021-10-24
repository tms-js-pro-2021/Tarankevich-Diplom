import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../redux/store";
import Navbar from "./Navbar";

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = this.getCurrentStateFromStore();
  }

  getCurrentStateFromStore() {
    return {
      cart: store.getState().shop.cart,
    };
  }

  updateStateFromStore = () => {
    const currentState = this.getCurrentStateFromStore();

    if (this.state !== currentState) {
      this.setState(currentState);
    }
  };

  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  render() {
    const { cart } = this.state;
    return <Navbar cart={cart} />;
  }
}

export default NavbarContainer;

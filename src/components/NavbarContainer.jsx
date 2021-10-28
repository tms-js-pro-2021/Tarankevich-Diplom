import React, { Component } from "react";
import Navbar from "./Navbar";
import { store } from "../redux/store";

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.store = store;
    this.getCurrentStateFromStore = this.getCurrentStateFromStore.bind(this);
    this.updateStateFromStore = this.updateStateFromStore.bind(this);
    this.state = this.getCurrentStateFromStore();
  }

  componentDidMount() {
    this.unsubscribeStore = store.subscribe(this.updateStateFromStore);
  }

  componentWillUnmount() {
    this.unsubscribeStore();
  }

  getCurrentStateFromStore() {
    return {
      cart: this.store.getState().shop.cart,
    };
  }

  updateStateFromStore() {
    const currentState = this.getCurrentStateFromStore();

    if (this.state !== currentState) {
      this.setState(currentState);
    }
  }

  render() {
    const { cart } = this.state;
    return <Navbar cart={cart} />;
  }
}

export default NavbarContainer;

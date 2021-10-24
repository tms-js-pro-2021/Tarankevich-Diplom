import React, { Component } from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import NavbarContainer from "../components/NavbarContainer";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import API from "../api/API";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  componentDidMount() {
    const api = new API();
    api.getProducts().then((response) => {
      this.setState({ products: response.data });
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Announcement />
        <NavbarContainer />
        {/* <Slider />
        <Categories /> */}
        <Products items={products} />
        <Newsletter />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;

import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";



const Dashboard = (props) => {
  return (
    <div >
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products items={props.state.items} openCart={props.openCart}/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Dashboard






















































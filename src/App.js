import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Product from "./client/product/product";

import Cartpage from "./client/cart/Cartpage";

import Catagory from "./client/catagories/Catagory";

import Appbar from "./client/cart/Appbar";

import Home from "./client/ecom_home/Home/Home";

function App(props) {
  return (
    <Router>
      <Route exact strict path="/"  component={Home} />
      <Route exact strict path="/product"  component={Product} />
      <Route exact strict path="/cart"  component={Cartpage} />
      <Route exact strict path="/catagory"  component={Catagory} />
      <Route exact strict path="/navbar"  component={Appbar} />
    </Router>
  );
}

export default App;

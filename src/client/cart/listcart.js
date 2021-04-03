import React from "react";
import "./cartpage.css";
import Divider from "@material-ui/core/Divider";
import { Qtyctrl } from "./Qty";

export default function Listcart() {
  return (
    <div className="four_coulmn_grid">

      <div className="show_hide_heading">
        <h4>Products</h4>
      </div>

      <div className="show_hide_heading">
        <h4>Price</h4>
      </div>

      <div className="show_hide_heading">
        <h4>Quantity</h4>
      </div>

      <div className="show_hide_heading">
        <h4>Total</h4>
      </div>

      <Divider />
      <Divider />
      <Divider />
      <Divider />

      <div className="two_column_grid">
        <figure>
          <img src="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/inspiron_notebooks/14_5401_5408/pdp/notebooks-inspiron-14-5401-5408-laptop-pdp-design-gallery504x350_silver.jpg?fmt=jpg&wid=570&hei=400" />
        </figure>
        <figcaption style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
          <h4 className="show_hide"> Products </h4>
          Dell Laptop i5 processer
        </figcaption>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h4 className="show_hide"> Price </h4>
        <h4>25000Rs</h4>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h4 className="show_hide"> Quantity </h4>
        <Qtyctrl />
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h4 className="show_hide"> Total </h4>
        <h4>25000Rs</h4>
      </div>
      <Divider />
      <Divider />
      <Divider />
      <Divider />
      <div className="two_column_grid">
        <figure>
          <img
            src="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/dell_client_products/notebooks/inspiron_notebooks/14_5401_5408/pdp/notebooks-inspiron-14-5401-5408-laptop-pdp-design-gallery504x350_silver.jpg?fmt=jpg&wid=570&hei=400"
            width="90px"
            height="auto"
          />
        </figure>

        <figcaption className="show_hide" style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>

          <div className="show_hide">
            <h4>Products</h4>
          </div>

          Dell Laptop i5 processer

        </figcaption>

      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
        <h4 className="show_hide"> Price </h4>
        <h4>25000Rs</h4>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
        <h4 className="show_hide"> Quantity </h4>
        <Qtyctrl />
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
        <h4 className="show_hide"> Total </h4>
        <h4>25000Rs</h4>
      </div>
    </div>
  );
}

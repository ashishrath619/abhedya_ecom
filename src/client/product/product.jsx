import React from "react";

import "./Product.css"


import ProductPreview from "./ProductPreview"

import ProductDescription from "./ProductDescription"

import MayYouAlsoLike from "./MayYouAlsoLike";

function Product() {
    return (
        <section className="product_container">  
            <ProductPreview/>
            <ProductDescription/>
            <MayYouAlsoLike/>
        </section>
    )
}

export default Product;
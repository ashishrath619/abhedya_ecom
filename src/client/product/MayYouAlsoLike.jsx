import React from "react";

import "./MayYouAlsoLike.css"

import ProductCard from "./ProductCard";

function MayYouAlsoLike () {
    return (
        <>
            <h3 className="you_may_also_like_h3"> You may also like </h3>

            <section className="you_may_also_like_container">
                <ProductCard
                    product_card_img = "./product1.jpg"
                    product_status = "New"
                    product_card_preview_1 = "./product1_preview1.jpg"
                    product_card_preview_2 = "./product1_preview2.jpg"
                    product_card_preview_3 = "./product1_preview3.jpg"
                    dress_type = "Suit"
                    product_name = "Brown PaperBag Waist pencil Skirt"
                    product_price= "$60.00"
                />
                     
                <ProductCard
                    product_card_img = "./product1.jpg"
                    product_status = "New"
                    product_card_preview_1 = "./product1_preview1.jpg"
                    product_card_preview_2 = "./product1_preview2.jpg"
                    product_card_preview_3 = "./product1_preview3.jpg"
                    dress_type = "Suit"
                    product_name = "Brown PaperBag Waist pencil Skirt"
                    product_price= "$60.00"
                />     
                
                <ProductCard
                    product_card_img = "./product1.jpg"
                    product_status = "New"
                    product_card_preview_1 = "./product1_preview1.jpg"
                    product_card_preview_2 = "./product1_preview2.jpg"
                    product_card_preview_3 = "./product1_preview3.jpg"
                    dress_type = "Suit"
                    product_name = "Brown PaperBag Waist pencil Skirt"
                    product_price= "$60.00"
                />

                <ProductCard
                    product_card_img = "./product1.jpg"
                    product_status = "New"
                    product_card_preview_1 = "./product1_preview1.jpg"
                    product_card_preview_2 = "./product1_preview2.jpg"
                    product_card_preview_3 = "./product1_preview3.jpg"
                    dress_type = "Suit"
                    product_name = "Brown PaperBag Waist pencil Skirt"
                    product_price= "$60.00"
                />

            </section>

        </>
    )
}

export default MayYouAlsoLike;
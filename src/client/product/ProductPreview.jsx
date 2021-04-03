import React from "react"

import "./ProductPreview.css";


import Rating from '@material-ui/lab/Rating';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import CompareArrowsIcon from '@material-ui/icons/CompareArrows';

import FacebookIcon from '@material-ui/icons/Facebook';

import TwitterIcon from '@material-ui/icons/Twitter';

import InstagramIcon from '@material-ui/icons/Instagram';

import PinterestIcon from '@material-ui/icons/Pinterest';


function ProductPreview() {

    const [value, setValue] = React.useState(3);

    return (
        <>
            <section className="product_preview_header">
                <h3> home > product > default </h3>
            </section>

            <section className="product_preview_conatiner">

                <div className="product_preview_image_container">

                    <div className="product_preview_option_container">
                        
                        <div>
                            <img src="./main_product_preview1.jpg" alt=" Product Preview 1 "/>
                        </div>

                        <div>
                            <img src="./main_product_preview2.jpg" alt=" Product Preview 2 "/>
                        </div>

                        <div>
                            <img src="./main_product_preview3.jpg" alt=" Product Preview 3 "/>
                        </div>    

                        <div>
                            <img src="./main_product_preview4.jpg" alt=" Product Preview 4 "/>
                        </div>

                    </div>

                    <div className="product_preview_main_img_container">
                        <img src="./main_product1.jpg" alt=" Product Image"/>
                    </div>

                </div>

                <div className="product_preview_details_container">
                    
                    <h2> Dark yellow lace cut out swing dress </h2>

                    <div className="review_container">

                        <Rating

                            style={{fontSize: "1rem", paddingBottom: "0.5rem"}}

                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        
                        <small> (2 reviews) </small>

                    </div>

                    <h3> $84.00 </h3>

                    <p>
                        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing. Sed lectus.
                    </p>

                    <div className="product_color">

                        <div>
                            <small> color: </small>
                        </div>

                        <div> 
                            <img src="./main_product_color1.jpg" alt=" Product Color Choice "/>
                        </div>

                        <div>
                            <img src="./main_product_color2.jpg" alt=" Product Color Choice "/>
                        </div>

                    </div>

                    <div className="product_size">
                        <div>
                            size: 
                        </div>

                        <div>
                            <select name="producr size" id="size">
                                <option value=" Select a Size "> Select a Size </option>
                                <option value="Small"> Small </option>
                                <option value="Medium"> Medium </option>
                                <option value="Large"> Large </option>
                                <option value="Extra Large"> Extra Large </option>
                            </select>
                        </div>

                        <div>
                            Size Guide
                        </div>
                    </div>

                    <div className="cart_wish_list_compare">

                        <div className="add_to_cart_button">

                            <div>
                                <AddShoppingCartIcon/>
                            </div>

                            <div>
                                    Add TO CART
                            </div>

                        </div>

                        <div className="add_to_wish_list_button">
                            
                            <div>
                                <FavoriteBorderIcon style={{color:"#b26c3b"}}/>
                            </div>
                            
                            <div>
                                Add to Wishlist
                            </div>
                        </div> 
                        
                        <div className="add_to_compare_button">
                            
                            <div>
                                <CompareArrowsIcon style={{color:"#b26c3b"}}/>
                            </div>

                            <div>
                                Add to Compare        
                            </div>

                        </div>

                    </div>

                    <div className="catagory_share_section">

                            <div>
                                catagory: women, dresses, yellow
                            </div>

                            <div className="product_share">

                                <small> share:  </small>

                                <FacebookIcon/>

                                <TwitterIcon/>

                                <InstagramIcon/>

                                <PinterestIcon/>

                            </div>

                    </div>
            
                </div>

            </section>
        </>
    )
}

export default ProductPreview;
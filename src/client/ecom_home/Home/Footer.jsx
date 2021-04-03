import React from 'react'
import './Footer.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
import { DiJqueryUiLogo } from 'react-icons/di';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="footer__topLeft">
                    {/* <img 
                        src="https://cdn.pixabay.com/photo/2015/04/18/07/49/shopping-cart-728430_1280.png" 
                    /> */}
                    <DiJqueryUiLogo
                        className="footer__topLeftLogo"
                    />
                    <p className="footer__topLeftDetails">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    <p className="footer__topLeftContect">Ask anything</p>
                    <a href="tel:123456789">+0123 456 789</a>
                </div>
                <div className="footer__topRight">
                    <div className="footer__topRightLeft">
                        <ul className="footer__topRightLeftMenu">
                            <li><h5 className="footer__topRightLeftMenuTitle">Information</h5></li>
                            <li><a href="" className="footer__topRightLeftMenuItem">About</a></li>
                            <li><a href="" className="footer__topRightLeftMenuItem">How to shop</a></li>
                            <li><a href="" className="footer__topRightLeftMenuItem">FAQ</a></li>
                            <li><a href="" className="footer__topRightLeftMenuItem">Contact us</a></li>
                            <li><a href="" className="footer__topRightLeftMenuItem">Log in</a></li>
                        </ul>
                    </div>
                    <div className="footer__topRightMiddle">
                        <ul className="footer__topRightMiddleMenu">
                            <li><h5 className="footer__topRightMiddleMenuTitle">Customer Service</h5></li>
                            <li><a href="" className="footer__topRightMiddleMenuItem">Payment Methods</a></li>
                            <li><a href="" className="footer__topRightMiddleMenuItem">Money-back guarantee!</a></li>
                            <li><a href="" className="footer__topRightMiddleMenuItem">Returns</a></li>
                            <li><a href="" className="footer__topRightMiddleMenuItem">Shipping</a></li>
                        </ul>
                    </div>
                    <div className="footer__topRightRight">
                        <ul className="footer__topRightRightMenu">
                            <li><h5 className="footer__topRightRightMenuTitle">My Account</h5></li>
                            <li><a href="" className="footer__topRightRightMenuItem">Sign In</a></li>
                            <li><a href="" className="footer__topRightRightMenuItem">View Cart</a></li>
                            <li><a href="" className="footer__topRightRightMenuItem">Track My Order</a></li>
                            <li><a href="" className="footer__topRightRightMenuItem">Help</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="footer__bottom">
                <div className="footer__bottomLeft">
                    CopyRight
                </div>
                <div className="footer__bottomRight">
                    <a href="https://www.facebook.com/" target="_blank">
                        <FaFacebook 
                            className="fb__icon"
                        />
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                        <FaTwitter 
                            className="tw__icon"
                        />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank">
                        <FaInstagram 
                            className="ig__icon"
                        />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank">
                        <FaYoutube 
                            className="yb__icon"
                        />
                    </a>
                    <a href="https://www.pinterest.com/" target="_blank">
                        <FaPinterest 
                            className="pi__icon"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer

import React from 'react'
import { FaPhoneAlt, FaRegHeart, FaLaptop, FaTshirt, FaBlender, FaHeartbeat, FaMapSigns } from 'react-icons/fa';
import { ImSearch } from 'react-icons/im';
import { IoBagSharp } from 'react-icons/io5';
import { FiGift, FiSmartphone } from 'react-icons/fi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { DiJqueryUiLogo } from 'react-icons/di';
import { GiConverseShoe, GiCookingPot, GiHamburgerMenu, GiMusicalNotes, GiSofa } from 'react-icons/gi';
import { RiArrowDropRightLine, RiTv2Fill } from 'react-icons/ri';
import './Header.css'
import { useStateValue } from '../../../StateProvider';

function Header() {


  const   [{cart, wishList}, dispatch ] = useStateValue();

    return (
        <div classname="header">
            <div className="header__upper">
                {/* upper header */}
                <div className="header__upperLeft">
                    <a href="tel:#"><FaPhoneAlt />Call: +0123 456 789</a>
                </div>
                <div className="header__upperRight">
                    <select class="form-select header__upperRightCurrencyMenu">
                      <option selected>INR</option>
                      <option value="1">USD</option>
                    </select>
                    <select class="form-select header__upperRightLanguageMenu">
                      <option selected>English</option>
                      <option value="1">Hindi</option>
                    </select>
                    <h6 className="header__upperRightLogin">
                        Sign in / Sign up
                    </h6>
                </div>
            </div>
            <div className="header__middle">
                <div className="header__middleLeft">
                    {/* Logo */}
                    {/* <img 
                    src="https://cdn.pixabay.com/photo/2015/04/18/07/49/shopping-cart-728430_1280.png" 
                    className="header__middleLeftLogo"
                    /> */}
                    <DiJqueryUiLogo
                    className="header__middleLeftLogo"
                    />
                    <h2 className="header__middleLeftLogoText">E.Com</h2>
                    {/* Seaarch bar */}
                    <div className="header__middleLeftSearch">
                        <select class="form-select header__middleLeftSearchMenu">
                          <option selected>All Departments</option>
                          <option value="1">Fashion</option>
                          <option value="2">- Women</option>
                          <option value="3">- Men</option>
                          <option value="4">- Jewellery</option>
                          <option value="5">- Kids Fashion</option>
                          <option value="6">Electronics</option>
                          <option value="7">- Smart TVs</option>
                          <option value="8">- Cameras</option>
                          <option value="9">- Games</option>
                          <option value="10">Home &amp; Garden</option>
                          <option value="11">Motors</option>
                          <option value="12">- Cars and Trucks</option>
                          <option value="15">- Boats</option>
                          <option value="16">- Auto Tools &amp; Supplies</option>
                        </select>
                        <div className="header__middleLeftSearchSeparator"></div>
                        <input type="text" class="form-control header__middleLeftSearchInput" placeholder="Search product ..." />
                        <button className="btn header__middleLeftSearchIcon"><ImSearch  /></button>
                    </div>
                </div>
                <div className="header__middleRight">
                    <div className="header__middleRightWish">
                        <FaRegHeart className="header__middleRightWishIcon" />
                        <span className="header__middleRightWishCount">{wishList?.length}</span>
                        <p className="header__middleRightWishText">Wishlist</p>
                    </div>
                    <div className="header__middleRightCart">
                        <HiOutlineShoppingCart className="header__middleRightCartIcon" />
                        <span className="header__middleRightCartCount">{cart?.length}</span>
                        <p className="header__middleRightCartText">Cart</p>
                    </div>
                </div>
            </div>
            <div className="header__bottom">
                 <nav class="navbar  navbar-expand-lg navbar-light bg-dark">
                      <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span><GiHamburgerMenu /></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul class="navbar-nav header__bottomHover me-auto mb-2 mb-lg-0">
                            <li class="nav-item dropdown">
                                <div class="dropdown">
                                  <button class="btn bg-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Browse Categories  <GiHamburgerMenu/>
                                  </button>
                                  <ul class="dropdown-menu header__bottomHoverMenu" aria-labelledby="dropdownMenuButton1">
                                    <li class="dropdown dropend header__bottomSubHover"><a class="dropdown-item "><FaLaptop />&nbsp;&nbsp; Electronics <RiArrowDropRightLine className="header__bottomHoverMenuElectronicsArrowIcon" /></a>
                                      <ul class="dropdown-menu header__bottomHoverSubMenu" aria-labelledby="dropdownMenuButton1">
                                        
                                          <div className="header__bottomMenuItems">
                                            <div className="header__bottomMenuItemsLeft">
                                              <h6 className="header__bottomMenuItemsLeftTitle">Laptops & Computers</h6>
                                              <ul>
                                                  <li><a href="#">Desktop Computers</a></li>
                                                  <li><a href="#">Monitors</a></li>
                                                  <li><a href="#">Laptops</a></li>
                                                  <li><a href="#">iPad & Tablets</a></li>
                                                  <li><a href="#">Hard Drives & Storage</a></li>
                                                  <li><a href="#">Printers & Supplies</a></li>
                                                  <li><a href="#">Computer Accessories</a></li>
                                              </ul>

                                              <h6 className="header__bottomMenuItemsLeftTitle">TV & Video</h6>
                                              <ul>
                                                  <li><a href="#">TVs</a></li>
                                                  <li><a href="#">Home Audio Speakers</a></li>
                                                  <li><a href="#">Projectors</a></li>
                                                  <li><a href="#">Media Streaming Devices</a></li>
                                              </ul>

                                            </div>
                                            <div className="header__bottomMenuItemsMiddle">
                                              <h6 className="header__bottomMenuItemsLeftTitle">Cell Phones</h6>
                                              <ul>
                                                  <li><a href="#">Carrier Phones</a></li>
                                                  <li><a href="#">Unlocked Phones</a></li>
                                                  <li><a href="#">Phone & Cellphone Cases</a></li>
                                                  <li><a href="#">Cellphone Chargers </a></li>
                                              </ul>
                                              <h6 className="header__bottomMenuItemsLeftTitle">Digital Cameras</h6>
                                              <ul>
                                                  <li><a href="#">Digital SLR Cameras</a></li>
                                                  <li><a href="#">Sports & Action Cameras</a></li>
                                                  <li><a href="#">Camcorders</a></li>
                                                  <li><a href="#">Camera Lenses</a></li>
                                                  <li><a href="#">Photo Printer</a></li>
                                                  <li><a href="#">Digital Memory Cards</a></li>
                                                  <li><a href="#">Camera Bags, Backpacks & Cases</a></li>
                                              </ul>
                                            </div>
                                            <div className="header__bottomMenuItemsRight">
                                              <img src="https://rhythmsandgraceblog.com/wp-content/uploads/2016/05/code-e1464487661716-250x400.jpg"/>
                                            </div>
                                          </div>
                                        
                                      </ul>
                                    </li>


                                    <li class="dropdown dropend header__bottomSubHover"><a class="dropdown-item "><GiSofa />&nbsp;&nbsp; Furniture <RiArrowDropRightLine className="header__bottomHoverMenuFurnitureArrowIcon" /></a>
                                      <ul class="dropdown-menu header__bottomHoverSubMenu" aria-labelledby="dropdownMenuButton1">
                                        
                                          <div className="header__bottomMenuItems">
                                            <div className="header__bottomMenuItemsLeft">
                                              <h6 className="header__bottomMenuItemsLeftTitle">Bedroom</h6>
                                              <ul>
                                                  <li><a href="#">Beds, Frames & Bases</a></li>
                                                  <li><a href="#">Dressers</a></li>
                                                  <li><a href="#">Nightstands</a></li>
                                                  <li><a href="#">Kids' Beds & Headboards</a></li>
                                                  <li><a href="#">Armoires</a></li>
                                              </ul>

                                              <h6 className="header__bottomMenuItemsLeftTitle">Living Room</h6>
                                              <ul>
                                                  <li><a href="#">Coffee Tables</a></li>
                                                  <li><a href="#">Chairs</a></li>
                                                  <li><a href="#">Tables</a></li>
                                                  <li><a href="#">Futons & Sofa Beds</a></li>
                                                  <li><a href="#">Cabinets & Chests</a></li>
                                              </ul>

                                            </div>
                                            <div className="header__bottomMenuItemsMiddle">
                                              <h6 className="header__bottomMenuItemsLeftTitle">Office</h6>
                                              <ul>
                                                  <li><a href="#">Office Chairs</a></li>
                                                  <li><a href="#">Desks</a></li>
                                                  <li><a href="#">Bookcases</a></li>
                                                  <li><a href="#">File Cabinets</a></li>
                                                  <li><a href="#">Breakroom Tables</a></li>
                                              </ul>
                                              <h6 className="header__bottomMenuItemsLeftTitle">Kitchen & Dining</h6>
                                              <ul>
                                                  <li><a href="#">Dining Sets</a></li>
                                                  <li><a href="#">Kitchen Storage Cabinets</a></li>
                                                  <li><a href="#">Bakers Racks</a></li>
                                                  <li><a href="#">Dining Chairs</a></li>
                                                  <li><a href="#">Dining Room Tables</a></li>
                                                  <li><a href="#">Bar Stools</a></li>
                                              </ul>
                                            </div>
                                            <div className="header__bottomMenuItemsRight">
                                              <img src="https://i.pinimg.com/originals/32/4b/b7/324bb70f03d25abed75b00211e5e5073.jpg"/>
                                            </div>
                                          </div>
                                        
                                      </ul>
                                    </li>
                                    
                                    <li class="dropdown dropend header__bottomSubHover"><a class="dropdown-item"><GiCookingPot />&nbsp;&nbsp; Cooking <RiArrowDropRightLine className="header__bottomHoverMenuCookingArrowIcon" /></a>
                                      <ul class="dropdown-menu header__bottomHoverSubMenu" aria-labelledby="dropdownMenuButton1">
                                        <div className="header__bottomMenuItems">
                                            <div className="header__bottomMenuItemsLeft">
                                              <h6 className="header__bottomMenuItemsLeftTitle">Cookware</h6>
                                              <ul>
                                                  <li><a href="#">Cookware Sets</a></li>
                                                  <li><a href="#">Pans, Griddles & Woks</a></li>
                                                  <li><a href="#">Pots</a></li>
                                                  <li><a href="#">Skillets & Grill Pans</a></li>
                                                  <li><a href="#">Kettles</a></li>
                                                  <li><a href="#">Soup & Stockpots</a></li>
                                              </ul>
                                              <img 
                                                className="header__bottomMenuItemsLeftBottImg"
                                                src="https://images-na.ssl-images-amazon.com/images/I/819U3sLLk2L._AC_UL200_SR200,200_.jpg" 
                                                alt=""
                                              /> 
                                            </div>
                                            <div className="header__bottomMenuItemsMiddle">
                                              <h6 className="header__bottomMenuItemsLeftTitle">Dinnerware & Tabletop</h6>
                                              <ul>
                                                  <li><a href="#">Plates</a></li>
                                                  <li><a href="#">Cups & Mugs</a></li>
                                                  <li><a href="#">Trays & Platters</a></li>
                                                  <li><a href="#">Coffee & Tea Serving</a></li>
                                                  <li><a href="#">Salt & Pepper Shaker</a></li>
                                              </ul>
                                              <img 
                                                className="header__bottomMenuItemsMiddleBottImg"
                                                src="https://images-eu.ssl-images-amazon.com/images/I/61Lq%2Bll10PL._AC_UL200_SR200,200_.jpg" 
                                                alt="" 
                                              />
                                            </div>
                                            <div className="header__bottomMenuItemsRight">
                                              <h6 className="header__bottomMenuItemsLeftTitle">Cooking Appliances</h6>
                                              <ul>
                                                  <li><a href="#">Microwaves</a></li>
                                                  <li><a href="#">Coffee Makers</a></li>
                                                  <li><a href="#">Mixers & Attachments</a></li>
                                                  <li><a href="#">Slow Cookers</a></li>
                                                  <li><a href="#">Air Fryers</a></li>
                                                  <li><a href="#">Toasters & Ovens</a></li>
                                              </ul>
                                              <img 
                                                className="header__bottomMenuItemsRightBottImg"
                                                src="https://i.pinimg.com/474x/8a/0f/f8/8a0ff8f630cc15b351f6ae7cf979ea6b.jpg" 
                                                alt="" 
                                              />
                                            </div>
                                          </div>
                                      </ul>
                                    </li>

                                    <li class="dropdown dropend header__bottomSubHover"><a class="dropdown-item "><FaTshirt />&nbsp;&nbsp; Clothing <RiArrowDropRightLine className="header__bottomHoverMenuClothingArrowIcon" /></a>
                                      <ul class="dropdown-menu header__bottomHoverSubMenu" aria-labelledby="dropdownMenuButton1">
                                        
                                          <div className="header__bottomMenuItems">
                                            <div className="header__bottomMenuItemsLeft">
                                              <h6 className="header__bottomMenuItemsLeftTitle">Women</h6>
                                              <ul>
                                                <li><a href="#"><strong>New Arrivals</strong></a></li>
                                                <li><a href="#"><strong>Best Sellers</strong></a></li>
                                                <li><a href="#"><strong>Trending</strong></a></li>
                                                <li><a href="#">Clothing</a></li>
                                                <li><a href="#">Shoes</a></li>
                                                <li><a href="#">Bags</a></li>
                                                <li><a href="#">Accessories</a></li>
                                                <li><a href="#">Jewlery & Watches</a></li>
                                                <li><a href="#"><strong>Sale</strong></a></li>
                                              </ul>

                                    

                                            </div>
                                            <div className="header__bottomMenuItemsMiddle">
                                              <h6 className="header__bottomMenuItemsLeftTitle">Men</h6>
                                              <ul>
                                                  <li><a href="#"><strong>New Arrivals</strong></a></li>
                                                  <li><a href="#"><strong>Best Sellers</strong></a></li>
                                                  <li><a href="#"><strong>Trending</strong></a></li>
                                                  <li><a href="#">Clothing</a></li>
                                                  <li><a href="#">Shoes</a></li>
                                                  <li><a href="#">Bags</a></li>
                                                  <li><a href="#">Accessories</a></li>
                                                  <li><a href="#">Jewlery & Watches</a></li>
                                              </ul>
                                              
                                            </div>
                                            <div className="header__bottomMenuItemsRight">
                                              <img src="https://www.5minutesformom.com/wp-content/uploads/2016/02/Souris-Mini-Kids-Clothes-250x400.jpg"/>
                                            </div>
                                          </div>
                                        
                                      </ul>
                                    </li>
                                    
                                    <li><a class="dropdown-item" href="#"><FaBlender />&nbsp;&nbsp; Home Appliances</a></li>
                                    
                                    <li><a class="dropdown-item" href="#"><FaHeartbeat />&nbsp;&nbsp; Healt & Beauty</a></li>
                                    
                                    <li><a class="dropdown-item" href="#"><GiConverseShoe />&nbsp;&nbsp;Shoes & Boots</a></li>
                                    
                                    <li><a class="dropdown-item" href="#"><FaMapSigns />&nbsp;&nbsp;Travel & Outdoor</a></li>
                                    
                                    <li><a class="dropdown-item" href="#"><FiSmartphone />&nbsp;&nbsp;Smart Phones</a></li>
                                    
                                    <li><a class="dropdown-item" href="#"><RiTv2Fill />&nbsp;&nbsp;TV & Audio</a></li>
                                    
                                    <li><a class="dropdown-item" href="#"><IoBagSharp />&nbsp;&nbsp;Backpack & Bag</a></li>
                                    
                                    <li><a class="dropdown-item" href="#"><GiMusicalNotes />&nbsp;&nbsp;Musical Instruments</a></li>
                                    
                                    <li><a class="dropdown-item" href="#"><FiGift />&nbsp;&nbsp;Gift Ideas</a></li>
                                  </ul>
                                </div>
                            </li>
                            <li>
                                <div class="dropdown">
                                  <button class="btn dropdown-toggle text-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home
                                  </button>
                                  <ul class="dropdown-menu header__bottomHoverMenu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li class="dropdown dropend header__bottomSubHover"><a class="dropdown-item">Another Dropdown</a>
                                      <ul class="dropdown-menu header__bottomHoverSubMenu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">hohoh</a></li>
                                        <li><a class="dropdown-item" href="#">sdsdsd</a></li>
                                        <li><a class="dropdown-item" href="#">sdsdsd</a></li>
                                      </ul>
                                    </li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                  </ul>
                                </div>
                            </li>    
                            <li>
                                <div class="dropdown">
                                  <button class="btn dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop
                                  </button>
                                  <ul class="dropdown-menu header__bottomHoverMenu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                  </ul>
                                </div>
                            </li> 
                            <li>
                                <div class="dropdown">
                                  <button class="btn dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Product
                                  </button>
                                  <ul class="dropdown-menu header__bottomHoverMenu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                  </ul>
                                </div>
                            </li> 
                            <li>
                                <div class="dropdown">
                                  <button class="btn dropdown-toggle text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    About Us
                                  </button>
                                  <ul class="dropdown-menu header__bottomHoverMenu" aria-labelledby="dropdownMenuButton1">
                                    <li class="dropdown dropend header__bottomSubHover"><a class="dropdown-item">About </a>
                                      <ul class="dropdown-menu header__bottomHoverSubMenu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Company Details</a></li>
                                        <li><a class="dropdown-item" href="#">Ratings</a></li>
                                      </ul>
                                    </li>
                                    <li class="dropdown dropend header__bottomSubHover"><a class="dropdown-item">Contect</a>
                                      <ul class="dropdown-menu header__bottomHoverSubMenu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">NO .1</a></li>
                                        <li><a class="dropdown-item" href="#">NO .2</a></li>
                                        <li><a class="dropdown-item" href="#">Email</a></li>
                                      </ul>
                                    </li>
                                    <li><a class="dropdown-item" href="#">FAQs</a></li>
                                    <li><a class="dropdown-item" href="#">Coming Soon</a></li>
                                  </ul>
                                </div>
                            </li> 
                            <li class="nav-item">
                              <a class="btn text-white" aria-current="page" href="#">Find Out</a>
                            </li>
                            
                         </ul>
                        </div>
                      </div>
                  </nav>
                
            </div>
           
        </div>
    )
}

export default Header

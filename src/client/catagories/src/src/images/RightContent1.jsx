import React from "react";
import "./RightContent.css";

const RightContent1 = () => {
  return (
    <div>
      <div className="sidebar">
<hr/>
          <div id="accordion">
            <div className="items">
              <div className="right_content_heading1">
                <a data-toggle="collapse" href="#collapseOne">
                  Category
                  <img
                    src="https://img.flaticon.com/icons/png/512/25/25623.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                    width="30px"
                  />
                </a>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                data-parent="#accordion"
              >
                <div className="right_content_product">
                  <input type="checkbox" id="Dresses"/>
                  <label> Dresses</label>
                  <span className="right_content_slide0">3</span>
                  <br />

                  <input type="checkbox" id="T-shirts" />
                  <label> T-shirts</label>
                  <span className="right_content_slide1">0</span>
                  <br />

                  <input type="checkbox" id="Bags" />
                  <label> Bags</label>
                  <span className="right_content_slide2">1</span>
                  <br />

                  <input type="checkbox" id="Jackets" />
                  <label> Jackets</label>
                  <span className="right_content_slide3">4</span>
                  <br />

                  <input type="checkbox" id="Shoes" />
                  <label> Shoes</label>
                  <span className="right_content_slide4">2</span>
                  <br />

                  <input type="checkbox" id="Jumpers" />
                  <label> Jumpers</label>
                  <span className="right_content_slide5">2</span>
                  <br />

                  <input type="checkbox" id="Jeans" />
                  <label> Jeans</label>
                  <span className="right_content_slide6">1</span>
                  <br />

                  <input type="checkbox" id="Sportwear" />
                  <label> Sportwear</label>
                  <span className="right_content_slide7">0</span>
                  <br />
                </div>
              </div>
            </div>
        </div>
<hr/>
          <div id="accordion">
            <div className="right_content_items">
              <div className="right_content_heading2">
                <a data-toggle="collapse" href="#collapseTwo">
                  Size
                  <img
                    src="https://img.flaticon.com/icons/png/512/25/25623.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                    width="30px"
                  />
                </a>
              </div>
              <div
                id="collapseTwo"
                className="collapse show"
                data-parent="#accordion"
              >
                <div className="right_content_product">
                  <input type="checkbox" id="XS" />
                  <label> XS</label>
                  <br />

                  <input type="checkbox" id="S" />
                  <label> S</label>
                  <br />

                  <input type="checkbox" id="M" checked/>
                  <label> M</label>
                  <br />

                  <input type="checkbox" id="L" checked/>
                  <label> L</label>
                  <br />

                  <input type="checkbox" id="XL" />
                  <label> XL</label>
                  <br />

                  <input type="checkbox" id="XXL" />
                  <label> XXL</label>
                  <br />
                </div>
              </div>
            </div>
        </div>
<hr/>
           <div id="accordion">
            <div className="right_content_items">
              <div className="right_content_heading3">
                <a data-toggle="collapse" href="#collapseThree">
                  Brand
                  <img
                    src="https://img.flaticon.com/icons/png/512/25/25623.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                    width="30px"
                  />
                </a>
              </div>
              <div
                id="collapseThree"
                className="collapse show"
                data-parent="#accordion"
              >
                <div className="right_content_product">
                  <input type="checkbox" id="Next" />
                  <label> Next</label>
                  <br />

                  <input type="checkbox" id="River Island" />
                  <label> River Island</label>
                  <br />

                  <input type="checkbox" id="Geox" />
                  <label> Geox</label>
                  <br />

                  <input type="checkbox" id="New Balance" />
                  <label> New Balance</label>
                  <br />

                  <input type="checkbox" id="UGG" />
                  <label> UGG</label>
                  <br />

                  <input type="checkbox" id="F&F" />
                  <label> F&F</label>
                  <br />

                  <input type="checkbox" id="Nike" />
                  <label> Nike</label>
                </div>
              </div>
            </div>
          </div>

<hr/>
          <div id="accordion">
            <div className="right_content_items">
              <div className="right_content_heading4">
                <a data-toggle="collapse" href="#collapseFour">
                  Color
                  <img
                    src="https://img.flaticon.com/icons/png/512/25/25623.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                    width="30px"
                  />
                </a>
              </div>
              <div
                id="collapseFour"
                className="collapse show"
                data-parent="#accordion"
              >
                <div className="right_content_product">
        <div className="right_content_custom-radios">
  <div className="right_content_cutom_radios_radio">
    <input type="radio" id="color-1" name="color" value="color-1"/>
    <label for="color-1">
      <span>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>
  
  <div>
    <input type="radio" id="color-2" name="color" value="color-2"/>
    <label for="color-2">
      <span>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>
  
  <div>
    <input type="radio" id="color-3" name="color" value="color-3"/>
    <label for="color-3">
      <span>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>

  <div>
    <input type="radio" id="color-4" name="color" value="color-4" checked/>
    <label for="color-4">
      <span>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>

  <div>
    <input type="radio" id="color-5" name="color" value="color-5"/>
    <label for="color-5">
      <span>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>

  <div>
    <input type="radio" id="color-6" name="color" value="color-6"/>
    <label for="color-6">
      <span>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>
  
  <div>
    <input type="radio" id="color-7" name="color" value="color-7"/>
    <label for="color-7">
      <span>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
      </span>
    </label>
  </div>
</div>
</div>
</div>
</div>
 </div>
 </div>
 <hr className="right_content_line"/>
 </div>

  );
};
export default RightContent1;

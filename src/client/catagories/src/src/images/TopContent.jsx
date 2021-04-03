import React from "react";
import "./TopContent.css";

const TopContent = () => {
  return (
    <>
      <div className="topcontent">
        <img
          src="https://wallpaperaccess.com/full/1424947.jpg"
          alt="mypic"
          width="100%"
          height="250px"
        />
        <div className="topcontent_nav">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>Grid 3 Columns</li>
          </ul>
        </div>
        <hr className="topcontent_line"/>
          <div className="topcontent_subheading">
            <h6>Filters:</h6>
            <a className="topcontent_clean" href="">Clean All</a>
            <span>Showing 9 of 56 Products</span>

            <label for="select">Sort by:</label>
            <select id="select">
              <option value="a">Most Popular</option>
              <option value="b">Most Rated</option>
              <option value="c">Date</option>
            </select>

            <div className="topcontent_images">
              <a href="#">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/user-interface-ii-3/32/User_Interface-55-128.png"
                  height="30px"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/ui-basic-glyph/512/UI_Basic_GLYPH-49-128.png"
                  height="30px"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/menu-17/24/_round_menu_three-128.png"
                  height="30px"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/oakcons-2/16/List-256.png"
                  height="30px"
                />
              </a>
            </div>
          </div>
        </div>
    </>
  );
};
export default TopContent;

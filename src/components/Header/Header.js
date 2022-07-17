import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import "./Header.css";

const Header = (AddtoCardHandler) => {
  const [badgeCart, SetBadgeCart] = useState(0);

  AddtoCardHandler = () => {
    return SetBadgeCart(badgeCart + 1);
  };
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* Logo Start */}
              <Link to="index.html" className="logo">
                <img src={logo} alt="logo" />
              </Link>
              {/* Logo End */}
              {/* Menu Start */}
              <ul className="nav">
                <li className="scroll-to-section">
                  <Link to="#top" className="active">
                    Home
                  </Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="#men">Men's</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="#women">Women's</Link>
                </li>
                <li className="scroll-to-section">
                  <Link to="#kids">Kid's</Link>
                </li>
                <li className="submenu">
                  <Link to="#">Pages</Link>
                  <ul>
                    <li>
                      <Link to="about.html">About Us</Link>
                    </li>
                    <li>
                      <Link to="products.html">Products</Link>
                    </li>
                    <li>
                      <Link to="single-product.html">Single Product</Link>
                    </li>
                    <li>
                      <Link to="contact.html">Contact Us</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#">Features</Link>
                  <ul>
                    <li>
                      <Link to="#">Features Page 1</Link>
                    </li>
                    <li>
                      <Link to="#">Features Page 2</Link>
                    </li>
                    <li>
                      <Link to="#">Features Page 3</Link>
                    </li>
                    <li>
                      <Link
                        rel="nofollow"
                        to="https://templatemo.com/page/4"
                        target="_blank"
                      >
                        Template Page 4
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="scroll-to-section">
                  <Link to="#explore">Explore</Link>
                </li>
                <li>
                  <Link
                    to="/checkout"
                    className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeMedium css-zylse7-MuiButtonBase-root-MuiIconButton-root"
                  >
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    <span className="MuiBadge-colorError MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRightRectangular css-to4x1n-MuiBadge-badge">
                      {badgeCart}
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/account">
                    <i className="fa fa-user"></i>
                  </Link>
                </li>
              </ul>
              <Link to="#" className="menu-trigger">
                <span>Menu</span>
              </Link>
              {/* Menu End */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

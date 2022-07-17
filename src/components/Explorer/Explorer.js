import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import OwlCarousel from "react-owl-carousel";

import image01 from "../../assets/images/explore-image-01.jpg";
import image02 from "../../assets/images/explore-image-02.jpg";

const Explorer = () => {
  return (
    <section className="section" id="explore">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="left-content">
              <h2>Explore Our Products</h2>
              <span>
                You are allowed to use this HexaShop HTML CSS template. You can
                feel free to modify or edit this layout. You can convert this
                template as any kind of ecommerce CMS theme as you wish.
              </span>
              <div className="quote">
                <i className="fa fa-quote-left"></i>
                <p>
                  You are not allowed to redistribute this template ZIP file on
                  any other website.
                </p>
              </div>
              <p>
                There are 5 pages included in this HexaShop Template and we are
                providing it to you for absolutely free of charge at our
                TemplateMo website. There are web development costs for us.
              </p>
              <p>
                If this template is beneficial for your website or business,
                please kindly{" "}
                <Link
                  rel="nofollow"
                  to="https://paypal.me/templatemo"
                  target="_blank"
                >
                  support us
                </Link>{" "}
                a little via PayPal. Please also tell your friends about our
                great website. Thank you.
              </p>
              <div className="main-border-button">
                <Link to="products.html">Discover More</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="right-content">
              <div className="row">
                <div className="col-lg-6">
                  <div className="leather">
                    <h4>Leather Bags</h4>
                    <span>Latest Collection</span>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="first-image">
                    <img src={image01} alt="image01" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="second-image">
                    <img src={image02} alt="image02" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="types">
                    <h4>Different Types</h4>
                    <span>Over 304 Products</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explorer;

import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

import kid01 from "../../assets/images/kid-01.jpg";
import kid02 from "../../assets/images/kid-02.jpg";
import kid03 from "../../assets/images/kid-03.jpg";
import kid04 from "../../assets/images/kid-04.jpg";

const Kids = () => {
  return (
    <section className="section" id="kids">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>kid's Latest</h2>
              <span>
                Details to details is what makes Hexashop different from the
                other themes.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="men-item-carousel">
              <OwlCarousel className="owl-theme" loop margin={30} nav>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <Link to="single-product.html">
                            <i className="fa fa-eye"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-product.html">
                            <i className="fa fa-star"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-product.html">
                            <i className="fa fa-shopping-cart"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <img src={kid01} alt="kid01" />
                  </div>
                  <div className="down-content">
                    <h4>classNameic Spring</h4>
                    <span>$120.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <Link to="single-product.html">
                            <i className="fa fa-eye"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-product.html">
                            <i className="fa fa-star"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-product.html">
                            <i className="fa fa-shopping-cart"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <img src={kid02} alt="kid02" />
                  </div>
                  <div className="down-content">
                    <h4>Air Force 1 X</h4>
                    <span>$90.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <Link to="single-product.html">
                            <i className="fa fa-eye"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-product.html">
                            <i className="fa fa-star"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-product.html">
                            <i className="fa fa-shopping-cart"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <img src={kid03} alt="kid03" />
                  </div>
                  <div className="down-content">
                    <h4>Love Nana ‘20</h4>
                    <span>$150.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="item">
                  <div className="thumb">
                    <div className="hover-content">
                      <ul>
                        <li>
                          <Link to="single-product.html">
                            <i className="fa fa-eye"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-product.html">
                            <i className="fa fa-star"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="single-product.html">
                            <i className="fa fa-shopping-cart"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <img src={kid04} alt="kid04" />
                  </div>
                  <div className="down-content">
                    <h4>classNameic Spring</h4>
                    <span>$120.00</span>
                    <ul className="stars">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kids;

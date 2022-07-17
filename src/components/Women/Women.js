import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";

import women01 from "../../assets/images/women-01.jpg";
import women02 from "../../assets/images/women-02.jpg";
import women03 from "../../assets/images/women-03.jpg";
import women04 from "../../assets/images/women-04.jpg";

const Women = () => {
  return (
    <section className="section" id="women">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2>Women's Latest</h2>
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
                          <Link to="/product/1">
                            <i className="fa fa-eye"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product/1">
                            <i className="fa fa-star"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product/1">
                            <i className="fa fa-shopping-cart"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <img src={women01} alt="women01" />
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
                          <Link to="/product/1">
                            <i className="fa fa-eye"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product/1">
                            <i className="fa fa-star"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product/1">
                            <i className="fa fa-shopping-cart"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <img src={women02} alt="women02" />
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
                          <Link to="/product/1">
                            <i className="fa fa-eye"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product/1">
                            <i className="fa fa-star"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product/1">
                            <i className="fa fa-shopping-cart"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <img src={women03} alt="women03" />
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
                          <Link to="/product/1">
                            <i className="fa fa-eye"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product/1">
                            <i className="fa fa-star"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/product/1">
                            <i className="fa fa-shopping-cart"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <img src={women04} alt="women04" />
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

export default Women;

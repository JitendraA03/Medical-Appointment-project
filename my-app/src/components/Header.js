import React from "react";
import { NavLink, Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <header>
        <div class="header-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-7 col-md-12 left-item">
                <ul>
                  <li>
                    <i class="fas fa-envelope-square"></i> sales@gmail.com
                  </li>
                  <li>
                    <i class="fas fa-phone-square"></i> +123 987 887 765
                  </li>
                </ul>
              </div>
              <div class="col-lg-5 d-none d-lg-block right-item">
                <ul>
                  <li>
                    <a>
                      <i class="fab fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a>
                      <i class="fab fa-pinterest-p"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a>
                      <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="nav-head" class="header-nav">
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-md-3 no-padding col-sm-12 nav-img">
                <img src="assets/images/logo.jpg" alt="" />
                <a data-toggle="collapse" data-target="#menu" href="#menu">
                  <i class="fas d-block d-md-none small-menu fa-bars"></i>
                </a>
              </div>
              <div
                id="menu"
                class="col-lg-8 col-md-9 d-none d-md-block nav-item"
              >
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="about_us">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="services">Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="news">News</NavLink>
                  </li>
                  <li>
                    <NavLink to="gallery">Gallery</NavLink>
                  </li>
                  <li>
                    <NavLink to="contact_us">Contact Us</NavLink>
                  </li>
                </ul>
              </div>
              <div class="col-sm-2 d-none d-lg-block appoint">
                <NavLink to="register">
                  <button class="btn btn-info">Book an Appointment</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

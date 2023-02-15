import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg mynavbar">
        <div className="container row">
          <div className="col-7">
            <div className="d-flex justify-content-center">
              <div className="logo">
                <a className="navbar-brand ms-5" href="#">
                  <img src="./img/logo3.png" alt="" className="img" />
                  <span className="logoname ">Scripple</span>
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>

              <div
                id="navbarSupportedContent"
                class="navbar-collapse collapse justify-content-start  mx-5"
              >
                <ul class="navbar-nav ">
                  <li class="nav-item">
                    <a href="index.html" className="nav-link me-2">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#aboutus" className="nav-link me-2">
                      AboutUs
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="#features" className="nav-link me-2">
                      Features
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="#faqs" className="nav-link me-2">
                      Pages
                    </a>
                  </li>

                  <li class="nav-item">
                    <a href="#subscribe" className="nav-link me-2">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-3">
            <input
              type="text"
              placeholder="Search products..."
              className="form-control"
            />
          </div>

          <div className="col-2 d-flex justify-content-end">
            <i class="fa-regular fa-circle-user fa-2x me-3"></i>
            <i class="fa-sharp fa-solid fa-cart-shopping fa-2x"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

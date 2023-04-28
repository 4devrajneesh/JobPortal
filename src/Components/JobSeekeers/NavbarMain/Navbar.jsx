import React, { useState, useEffect } from "react";
import { Logo, Google, Facebook, Linkedin } from "../../../assets";
import { Link, useLocation, useParams } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  const path = useLocation();

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
  };
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <div className={path.pathname == "/" && "header-banner"}>
        <header className="site-header">
          <div
            className={`top-header  py-3  ${
              scrollPosition >= 37 ? "position-fixed" : ""
            }`}
          >
            <nav className="navbar navbar-expand-lg navbar-light py-0">
              <div className="container">
                <div className="logo">
                  <Link className="navbar-brand" to="/">
                    <img src={Logo} alt="logo" />
                  </Link>
                </div>
                <button
                  className="navbar-toggler justify-content-end collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="navbar-collapse justify-content-end collapse"
                  id="navbarSupportedContent"
                >
                  {path.pathname == "/login" || path.pathname == "/register" ? (
                    "For employers"
                  ) : (
                    <>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link fw400" to="/find-jobs">
                            Find jobs
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link fw400" to="/">
                            Company reviews
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link fw400" to="/">
                            Salary Guide<span className="px-3">|</span>{" "}
                          </Link>
                        </li>
                      </ul>
                      <div className="post align align-self-center d-flex justify-content-between">
                        <Link
                          to="/login"
                          className="radius-36 mx-3 login fw500"
                        >
                          Login
                        </Link>
                        <Link
                          to="/register"
                          className="radius-36 post-job  fw500 mb-0 register-hover"
                        >
                          Register
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Navbar;

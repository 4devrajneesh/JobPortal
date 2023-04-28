import React from "react";
import Footer from "../../Components/JobSeekeers/Footer/Footer";
import Navbar from "../../Components/JobSeekeers/NavbarMain/Navbar";
import './login.css'
import { Logo, Google, Facebook, Linkedin } from "../../assets";
function LoginSeekers() {
  return (
    <>
      <Navbar />
      <section className="login-banner">
        <h1 className="login-heading fw500 mb-0 font30 text-center black-color">
          Login
        </h1>
      </section>
      <section className="login-sec py-md-5 py-3">
        <div className="container">
          <div className="login-box mx-auto border p-3 rounded-3">
            <form>
              
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label font20 fw500 black-color mb-3"
                >
                  Email/Mobile
                </label>
                <input
                  type="Name"
                  className="form-control rounded-3 py-3 font16 fw600"
                  id="exampleInputName"
                  aria-describedby="emailHelp"
                  placeholder="Username *"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label font20 fw500 black-color mb-3"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control rounded-3 py-3 font16 fw600"
                  id="exampleInputPassword1"
                  placeholder="Password *"
                />
              </div>
              <div className="mb-3">
                <a
                  href="forgot.html"
                  className="fw400 text-decoration-none forget font14"
                >
                  Forget Your Password
                </a>
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  className="btn w-100 text-white login-btn p-2  rounded-3 py-3 font18 fw600"
                >
                  Login
                </button>
              </div>
              <p
                className="font20 fw400 text-center"
                style={{ color: "#959595" }}
              >
                -<span className="mx-2">OR</span>-
              </p>
            </form>
            <div className="d-md-flex d-block justify-content-center  align-items-center gap-3 mb-2 img-fluid ">
                    <div className="border rounded-3 mt-2 gap-2 p-2 d-flex justify-content-center align-items-center gap-2 text-gray">
                      <img className="img-fluid" src={Google} alt="Google" />
                      Google
                    </div>
                    <div className="border rounded-3 mt-2 p-2 d-flex justify-content-center align-items-center gap-2 text-gray">
                      <img className=" img-fluid" src={Facebook} alt="Facebook" />
                      Facebook
                    </div>
                    <div className="border rounded-3 mt-2 p-2 d-flex justify-content-center align-items-center gap-2 text-gray">
                      <img className=" img-fluid" src={Linkedin} alt="LinkedIn" />
                      LinkedIn
                    </div>
                  </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default LoginSeekers;

import React from "react";
import { Logo, Google, Facebook, Linkedin, Arrow2 } from "../../.././assets";

function BasicDetails({ handleClick }) {
  
  return (
    <>
      <div className="border rounded-4  p-4">
        <div className="d-flex justify-content-center gap-4 mt-2 mb-4 ">
          <div class="form-check account-type  d-flex align-items-center">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked
            />
            <label class="form-check-label loging-radio-text">
              For Jobseekers
            </label>
          </div>
          <div class="form-check account-type d-flex align-items-center">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label class="form-check-label loging-radio-text">
              For Employers
            </label>
          </div>
        </div>

        <h2 className="text-center mt-4 "> Create an Account</h2>
        <p className="text-center text-gray">
          It only takes a couple of minutes to get started!{" "}
        </p>
        <div className="d-md-flex d-block justify-content-center align-items-center gap-4 mb-4 mt-4 img-fluid ">
          <div className="border rounded-3 m-2 p-2 d-flex justify-content-center px-4 align-items-center gap-2 text-gray">
            <img className="img-fluid" src={Google} alt="" /> Google
          </div>
          <div className="border rounded-3 m-2 p-2 d-flex justify-content-center px-4 align-items-center gap-2 text-gray">
            <img className=" img-fluid" src={Facebook} alt="" />
            Facebook
          </div>
          <div className="border rounded-3 m-2 p-2 d-flex justify-content-center px-4 align-items-center gap-2 text-gray">
            <img className=" img-fluid" src={Linkedin} alt="" />
            LinkedIn
          </div>
        </div>

        {/* <div className="row"> */}
          {/* <div className="col-12 col-md-6"> */}
            <label className="form-text mb-2 mt-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter Full Name*"
              cla
              className="form-control rounded-3 py-3 font16 fw600"
            />
          {/* </div> */}
          {/* <div className="col-12 col-md-6"> */}
            <label className="form-text  mb-2 mt-2">Email ID</label>
            <input
              type="email"
              placeholder="Enter Email ID*"
              className="form-control rounded-3 py-3 font16 fw600"
            />
          {/* </div> */}
        {/* </div> */}

        <label className="form-text  mb-2 mt-2">Password</label>
        <input
          type="password"
          placeholder="Enter Password*"
          className="form-control rounded-3 py-3 font16 fw600"
        />
        <label className="form-text  mb-2 mt-2">Mobile Number</label>
        <input
          type="number"
          placeholder="Enter Mobile Number*"
          className="form-control rounded-3 py-3 font16 fw600"
        />
        <label className="form-text  mb-2 mt-2">Resume</label>
        <div className="d-flex justi upload-resume-border gap-3 align-items-center">
          <div class="upload-resume-1  ">
            <input type="file" id="actual-btn" hidden />
            <label for="actual-btn">
              {/* <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        ></svg> */}
              Upload Resume
            </label>
          </div>
          DOC, DOCx, PDF, RTF | Max: 2 MB
        </div>
        <div className="text-gray d-flex gap-2 align-items-center  mb-2 mt-2 pt-1">
        <input class="form-check-input " type="checkbox" />
        <div className="mt-1">    Send me important
          updates on Whatsapp</div>
        </div>
        <label className="text-gray">
          By clicking Register, you agree to the Terms and Conditions & Privacy
          Policy of Naukri.com
        </label>
        <div className="mb-3 mt-2 ">
          <button
            type="submit"
            className="btn verify-btn px-5  btn-register-mobile"
            onClick={() => {
              handleClick(2);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default BasicDetails;

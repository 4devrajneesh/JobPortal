import React from "react";
import { Logo, Google, Facebook, Linkedin, Arrow2 } from "../../.././assets";

function EducationDetails({ handleClick }) {
  return (
    <>
      <div className="card rounded-4  p-4">
 
        <h2 className="text-center "> Education Details</h2>
        <p className="text-center text-gray">
          Tell recruiters about your educational qualifications
        </p>
      
        <div>
          <div class="form-group">
            <label className="form-text  mb-2 mt-2">
              Highest Qualification
            </label>
            <select class="form-select form-control rounded-3 py-3 font16 fw600" id="exampleFormControlSelect1">
              <option></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label className="form-text  mb-2 mt-2">Specialization/Major</label>

            <select class="form-select form-control rounded-3 py-3 font16 fw600">
              <option></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label className="form-text  mb-2 mt-2">
              {" "}
              University/Institute
            </label>

            <select class="form-select form-control rounded-3 py-3 font16 fw600" id="exampleFormControlSelect1">
              <option></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div class="form-group">
            <label className="form-text  mb-2 mt-2"> Year of Graduation</label>

            <select class="form-select form-control rounded-3 py-3 font16 fw600" id="exampleFormControlSelect1">
              <option></option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

            <label className="form-text  mb-2 mt-2">Education Type</label>
          <div className="d-flex align-items-center gap-4">
            
            <div className="text-gray d-flex align-items-center gap-2">
              <input type="checkbox" name="" id="" className=" form-check-input " /> Full
              Time
            </div>
            <div className=" text-gray d-flex align-items-center gap-2">
              <input type="checkbox" name="" id="" className="form-check-input" /> Part
              Time
            </div>
          </div>


          <div className="mb-3 mt-4 ">
            <button
              type="submit"
              className="btn verify-btn px-5  btn-register-mobile"
              onClick={() => {
                handleClick("success");
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EducationDetails;

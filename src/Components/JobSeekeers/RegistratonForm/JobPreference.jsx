import React from 'react'
import { Logo, Google, Facebook, Linkedin, Arrow2 } from "../../.././assets";


function JobPreference({handleClick}) {
  return (
    <>
      <div className="card rounded-4  p-4">
  
                  <h2 className="text-center "> Job Preference</h2>
                  <p className="text-center text-gray">
                    Helps to find better matching jobs!{" "}
                  </p>

                  <div>
                    <label className="form-text  mb-2 mt-2">Key Skills</label>
                    <input type="text"  className="form-control rounded-3 py-3 font16 fw600" />
                    <div class="form-group">
                      <label className="form-text  mb-2 mt-2">Industry</label>

                      <select
                        className="form-select form-control rounded-3 py-3 font16 fw600"
                        id="exampleFormControlSelect1"
                      >
                        <option></option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>

                    <div class="form-group">
                      <label className="form-text  mb-2 mt-2">
                        Department / Function
                      </label>

                      <select class="form-select form-select form-control rounded-3 py-3 font16 fw600">
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
                        Prefered Location{"(s)"}
                      </label>

                      <select
                        class="form-select form-select form-control rounded-3 py-3 font16 fw600"
                        id="exampleFormControlSelect1"
                      >
                        <option></option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="mb-3 mt-4 ">
                      <button
                        type="submit"
                       
                        className="btn verify-btn px-5  btn-register-mobile"
                        onClick={() => {
                          handleClick(4);
                        }}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default JobPreference

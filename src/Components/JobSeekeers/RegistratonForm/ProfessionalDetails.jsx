import React,{useState} from 'react'
import { Logo, Google, Facebook, Linkedin, Arrow2 } from "../../.././assets";
function ProfessionalDetails({handleClick}) {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheck1 = () => {
    setIsChecked1(true);
    setIsChecked2(false);
  };

  const handleCheck2 = () => {
    setIsChecked1(false);
    setIsChecked2(true);
  };
  return (
    <>
    <div className="card rounded-4  p-4">
         <h2 className="text-center ">Professional Details</h2>
                  <p className="text-center text-gray">
                    Help us understand you better{" "}
                  </p>

                  <div className="card p-3 m-3">
                    <div className=" d-flex gap-3  align-items-center">
                      <div className='check-box-div' >
                        <input
                        checked={isChecked1}
                       
                        onChange={handleCheck1}
                          type="checkbox"
                          className=" form-check-input"
                        />
                      </div>
                      <div>
                        <label className="form-text"> I am a Fresher</label> <br />
                        <small>
                          I am a student/ Haven't worked after graduation
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="card p-3 m-3">
                    <div className=" d-flex gap-3  align-items-center">
                    <div className='check-box-div' >
                        <input
                          type="checkbox"
                          className=" form-check-input"
                          checked={isChecked2}
                          onChange={handleCheck2}
                        />
                      </div>
                      <div>
                        <b className="form-text"> I'm Experienced</b> <br />
                        <small>
                         
                          I have work experience (excluding internships)
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3 mt-4 mx-3 ">
                    <button
                      type="submit"
                      className="btn verify-btn px-5  btn-register-mobile"
                      onClick={() => {
                        handleClick(5);
                      }}
                    >
                      Continue
                    </button>
                  </div>
                </div>
      
    </>
  )
}

export default ProfessionalDetails

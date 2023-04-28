import React from 'react'
import { useRef } from "react";
import { Logo, Google, Facebook, Linkedin, Arrow2 } from "../../.././assets";

function VeryficationCenter({handleClick}) {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const inputRef5 = useRef(null);
  const inputRef6 = useRef(null);

  const handleInputChange = (e, inputRef) => {
    const value = e.target.value;
    const nextInputRef = getNextInputRef(inputRef);
    const prevInputRef = getPrevInputRef(inputRef);

    // If a digit is entered, move focus to the next input field
    if (/^\d+$/.test(value) && nextInputRef) {
      nextInputRef.current.focus();
    }

    // If a digit is deleted, move focus to the previous input field
    if (value === "" && prevInputRef) {
      prevInputRef.current.focus();
    }
  };

  const getNextInputRef = (currentInputRef) => {
    if (currentInputRef === inputRef1) return inputRef2;
    if (currentInputRef === inputRef2) return inputRef3;
    if (currentInputRef === inputRef3) return inputRef4;
    if (currentInputRef === inputRef4) return inputRef5;
    if (currentInputRef === inputRef5) return inputRef6;
    return null;
  };

  const getPrevInputRef = (currentInputRef) => {
    if (currentInputRef === inputRef6) return inputRef5;
    if (currentInputRef === inputRef5) return inputRef4;
    if (currentInputRef === inputRef4) return inputRef3;
    if (currentInputRef === inputRef3) return inputRef2;
    if (currentInputRef === inputRef2) return inputRef1;
    return null;
  };
  return (
    <>
    <div className="card rounded-4 p-4">


                  <h2 className="text-center "> Verification Center</h2>
                  <p className="text-center text-gray">
                    {" "}
                    It only takes a couple of minutes to get started!{" "}
                  </p>

                  <b className="form-text">Mobile</b>

                  <div className="mt-4 mb-4 text-gray">
                    We have sent an OTP to your phone number{" "}
                    <p
                      style={{
                        float: "right",
                        marginRight: "155px",
                        color: " #3292E7",
                      }}
                    >
                      <u>Change</u>{" "}
                    </p>
                    <br />
                    +917018403386
                  </div>
                  <b className="form-text">Enter OTP</b>

                  <div className=" d-flex gap-3 mt-4 mb-4">
                    <input type="number" className="otp-input "
                     maxLength="1"
                     ref={inputRef1}
                     onChange={(e) => handleInputChange(e, inputRef1)}
                     autoFocus
                    />
                    <input type="text" className="otp-input" 
                     maxLength="1"
                     ref={inputRef2}
                     onChange={(e) => handleInputChange(e, inputRef2)}
                    />
                    <input type="text" className="otp-input" 
                      maxLength="1"
                      ref={inputRef3}
                      onChange={(e) => handleInputChange(e, inputRef3)}
                    />
                    <input type="text" className="otp-input"
                    maxLength="1"
                    ref={inputRef4}
                    onChange={(e) => handleInputChange(e, inputRef4)}
                    />
                    <input type="text" className="otp-input"
                    maxLength="1"
                    ref={inputRef5}
                    onChange={(e) => handleInputChange(e, inputRef5)}
            
                    />
                    <input type="text" className="otp-input" 
                     maxLength="1"
                     ref={inputRef6}
                     onChange={(e) => handleInputChange(e, inputRef6)}/>
                  </div>
                  <p className="text-gray">Didn't receive your OTP? Resend</p>

                  <div className="mb-3 ">
                    <button
                      type="submit"
                     
                      className="btn verify-btn px-5  btn-register-mobile"
                      onClick={() => handleClick(3)}
                    >
                      Verify Mobile Number
                    </button>
                  </div>
                </div>
      
    </>
  )
}

export default VeryficationCenter

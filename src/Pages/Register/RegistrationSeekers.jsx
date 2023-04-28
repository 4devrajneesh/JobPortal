import React, { useState } from "react";
import Navbar from "../../Components/JobSeekeers/NavbarMain/Navbar";
import Footer from "../../Components/JobSeekeers/Footer/Footer";
import { Logo, Google, Facebook, Linkedin, Arrow2 } from "../../assets";
import { toast } from "react-toastify";
import BasicDetails from "../../Components/JobSeekeers/RegistratonForm/BasicDetails";
import VeryficationCenter from "../../Components/JobSeekeers/RegistratonForm/VeryficationCenter";
import JobPreference from "../../Components/JobSeekeers/RegistratonForm/JobPreference";
import ProfessionalDetails from "../../Components/JobSeekeers/RegistratonForm/ProfessionalDetails";
import EducationDetails from "../../Components/JobSeekeers/RegistratonForm/EducationDetails";
import './register.css'
function RegistrationSeekers() {
  const [firstBtn, setfirstBtn] = useState(false);
  const [secondBtn, setsecondBtn] = useState(false);
  const [thirdBtn, setthirdBtn] = useState(false);
  const [fourthBtn, setfourthBtn] = useState(false);

  const [formState, setformState] = useState(1);

  const handleClick = (val) => {
    if (val === 2) {
      setformState(val)
      setfirstBtn(true)
    }

    if (val === 3) {
      setformState(val)
      setsecondBtn(true)
    }

    if (val === 4) {
      setformState(val)
      setthirdBtn(true)
    }

    if (val === 5) {
      setformState(val);
      setfourthBtn(true);
    }
    if (val === "success") {
     
    }
  };

  return (
    <>
      <Navbar />
      <section className="login-banner">
        <h1 className="login-heading fw500 mb-0 font30 text-center black-color">
          Seeker/Registration
        </h1>
      </section>
      <div className="container mt-5 mb-5">
        <div className="row " >
        <div className="container col-md-5 col-lg-3 basic-detail-sec position-relative pt-3">
  <ul className="list-unstyled basic-detail-sec-ul">
    <li>
      <span className="d-flex ">
        <span className={` ${firstBtn && "back"} mt-2 ${ formState === 1 ? "basic-detail-active":"basic-detail-1" } text-center d-flex justify-content-center align-items-center font22 fw400 me-3`}>
          1
        </span>
        <p className="align-self-center  detail-active mt-2 fw400 font16 mb-0">
          Basic Details
          <span>
            <br />
            <span className="font14 sub-title">15 seconds to complete</span>
          </span>
        </p>
        <div className="d-flex justify-content-end  ps-5">
        <img className={` mt-3 ${ formState === 1 ? "d-block" : "d-none"  }`} src={Arrow2}  alt="" />
        </div>
      </span>
    </li>
    <li className="py-2 py-md-4">
      <span className="d-flex ">
        <span className={`${secondBtn && "back"} mt-4 ${ formState === 2 ? "basic-detail-active":"basic-detail-1" }  text-center d-flex justify-content-center align-items-center font22 fw400 me-3`}>
          2
        </span>
        <p className={`  ${firstBtn && "active-text"} mt-3 align-self-center detail-active-1 fw400 font16 mb-0`}>
          Verification Center
          <span>
            <br />
            <span className="font14 sub-title">15 seconds to complete</span>
          </span>
        </p>
        <div className="d-flex justify-content-end  ps-5">
        <img className={` mt-3 ${ formState === 2 ? "d-block" : "d-none"  }`} src={Arrow2}  alt="" />

        </div>
      </span>
    </li>
    <li className="">
      <span className="d-flex ">
        <span className={`${thirdBtn && "back"} mt-3 ${ formState === 3 ? "basic-detail-active":"basic-detail-1" } text-center d-flex justify-content-center align-items-center font22 fw400 me-3`}>
          3
        </span>
        <p className={` ${secondBtn && "active-text"} mt-3 align-self-center detail-active-1 fw400 font16 mb-0`}>
          Job Preference
          <span>
            <br />
            <span className="font14 sub-title">15 seconds to complete</span>
          </span>
        </p>
        <div className="d-flex justify-content-end  ps-5">
        <img className={` mt-3 ${ formState === 3 ? "d-block" : "d-none"  }`} src={Arrow2}  alt="" />

        </div>
      </span>
    </li>
    <li className="py-2 py-md-4">
      <span className="d-flex ">
        <span className={`${fourthBtn && "back"} mt-3 ${ formState === 4 ? "basic-detail-active":"basic-detail-1" } text-center d-flex justify-content-center align-items-center font22 fw400 me-3`}>
          4
        </span>
        <p className={`  ${thirdBtn && "active-text"} mt-3 align-self-center detail-active-1 fw400 font16 mb-0 `}>
          Professional Details
          <span>
            <br />
            <span className="font14 sub-title">15 seconds to complete</span>
          </span>
        </p>
        <div className="d-flex justify-content-end  ps-5">
        <img className={` mt-3 ${ formState === 4 ? "d-block" : "d-none"  }`} src={Arrow2}  alt="" />
        </div>
      </span>
    </li>
    <li className="">
      <span className="d-flex ">
        <span className={` ${ formState === 5 ?  "basic-detail-active":"basic-detail-1" } mt-3 text-center d-flex justify-content-center align-items-center font22 fw400 me-3`}>
          <svg
            width={9}
            height={12}
            viewBox="0 0 9 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.256 0.719877H3.016L8.824 6.21588L3.016 11.7359H0.256L6.064 6.21588L0.256 0.719877Z"
              fill="#6E00BE"
              fillOpacity="0.35"
            />
          </svg>
        </span>
        <p className={`  ${fourthBtn && "active-text"} mt-3 align-self-center detail-active-1 fw400 font16 mb-`}>
          Start Job Search
          <span>
            <br />
            <span className="font14 sub-title">15 seconds to complete</span>
          </span>
        </p>
        <div className="d-flex justify-content-end  ps-5">
        <img className={` mt-2 ${ formState === 5 ? "d-block" : "d-none"  }`} src={Arrow2}  alt="" />
        </div>
      </span>
    </li>
  </ul>
</div>

          <div className=" col-md-7 col-lg-9 ">
            {formState == 1 && <BasicDetails handleClick={handleClick} />}
            {formState == 2 && <VeryficationCenter handleClick={handleClick} />}
            {formState == 3 && <JobPreference handleClick={handleClick} />}
            {formState == 4 &&  <ProfessionalDetails handleClick={handleClick} />}
            {formState == 5 && <EducationDetails handleClick={handleClick} />}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RegistrationSeekers;

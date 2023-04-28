import React from 'react'
import Navbar from '../../../Components/JobSeekeers/NavbarMain/Navbar'
import Footer from '../../../Components/JobSeekeers/Footer/Footer'
import {  Faceboot_rect,Gmail,Twiter, Linkedin } from '../../../assets'
import './jobdescription.css'
import { Link } from 'react-router-dom'
function JobDiscription() {

  const [copyValue,setCopyValue]= React.useState("https://www.kreate.com/job-apply-325...")
  function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }


  return (
    <>
      <Navbar/>
      <section class="login-banner">
    <div class="container">
        <h1 class="login-heading fw500 mb-0 font30 text-center black-color">Job Description</h1>
    </div>
</section>
<section className="job-descriotion py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="d-flex justify-content-between">
            <div className="">
              <p className="fw600 font25 mb-0 heading-color">
                Bepoj Technology
              </p>
              <p className="font16 fw500 mb-1">30+ Jobs</p>
              <span className="font16 heading-color fw600">Full time</span>
            </div>
            <div className="align-self-center apply-now-btn d-none d-md-block">
              <button className="btn fw400">Apply Now</button>
            </div>
            <div className="">
              <svg
                width={30}
                height={30}
                viewBox="0 0 34 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28.6666 0H5.33329C2.76663 0 0.68996 2.1 0.68996 4.66667L0.666626 42L17 35L33.3333 42V4.66667C33.3333 2.1 31.2333 0 28.6666 0ZM28.6666 35L17 29.9133L5.33329 35V4.66667H28.6666V35Z"
                  fill="#333333"
                />
              </svg>
              <br />
              <span className="fw-400 font14 discover-jobsTitle">Save</span>
            </div>
          </div>
        </div>
        <div className="card mt-4">
          <h2 className="fw600 font25 mb-0 heading-color">
            Full stack web developer (React/node js)
          </h2>
          <p className="font18 fw400 heading-color">Basic Job Information</p>
          <div className="d-flex">
            <div className="">
              <p className="me-5 fw500 font20 mb-1">Job category</p>
              <p className="me-5 fw500 font20 mb-1">Job level</p>
              <p className="me-5 fw500 font20 mb-1">No. of vacancy</p>
              <p className="me-5 fw500 font20 mb-1">Job type</p>
              <p className="me-5 fw500 font20 mb-1">Location</p>
              <p className="me-5 fw500 font20 mb-1">Offered salary</p>
              <p className="me-5 fw500 font20 mb-1">Apply before</p>
            </div>
            <div className="">
              <p className="fw400 font20 mb-1">: IT(Software)</p>
              <p className="fw400 font20 mb-1">: Senior (2+ years)</p>
              <p className="fw400 font20 mb-1">: [6]</p>
              <p className="fw400 font20 mb-1">: Full time</p>
              <p className="fw400 font20 mb-1">: Kathmandu, Nepal</p>
              <p className="fw400 font20 mb-1">: $500/month (negotiable)</p>
              <p className="fw400 font20 mb-1">: 11th Sept, 2022</p>
            </div>
          </div>
        </div>
        <div className="card mt-4">
          <h2 className="fw600 font25 mb-0 heading-color">Job description:</h2>
          <p className="font20 fw400 heading-color">
            We are looking for highly potential candidate
            .............................
            .................................................................................................................................................................................
          </p>
          <h2 className="fw600 font25 mb-0 heading-color pt-3">
            Requirements:
          </h2>
          <ul className="requirement">
            <li className="fw400 font18 heading-color">1/2 years experience</li>
            <li className="fw400 font18 heading-color">
              {" "}
              Academic: Bachelor/High School
            </li>
            <li className="fw400 font18 heading-color">
              {" "}
              Expert in HTML, CSS JS
            </li>
            <li className="fw400 font18 heading-color">
              {" "}
              Experience with RDBMS
            </li>
            <li className="fw400 font18 heading-color">
              {" "}
              Integration of payment system
            </li>
            <li className="fw400 font18 heading-color">
              {" "}
              Should be able to work on bug fixing and maintain code quality
            </li>
            <li className="fw400 font18 heading-color">
              Good knowledge of modern UI/UX standards
            </li>
          </ul>
          <h2 className="fw600 font25 mb-0 heading-color pt-3">Other skills</h2>
          <ul className="requirement">
            <li className="fw400 font18 heading-color">Communication skills</li>
            <li className="fw400 font18 heading-color"> +ve attitude</li>
            <li className="fw400 font18 heading-color">
              {" "}
              Curious to learn and adapt new technologies
            </li>
            <li className="fw400 font18 heading-color"> Time management</li>
            <li className="fw400 font18 heading-color"> Team work</li>
            <li className="fw400 font18 heading-color">
              {" "}
              Meeting client requirements
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn fw400 requirment-btn me-4">Apply Now</button>
            <button className="btn fw400 requirment-btn-1">Apply Later</button>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <h2 className="fw600 font25 mb-1 heading-color">About Company</h2>
        <p className="font16 fw300 heading-color">
          Foodmandu is the fastest, easiest and most convenient way to enjoy the
          best food of your favourite restaurants at home, at the office or
          wherever you want to.
        </p>
        <p className="font16 fw300 heading-color">
          We know that your time is valuable and sometimes every minute in the
          day counts. That’s why we deliver! So you can spend more time doing
          the things you love.
        </p>
        <button className="learn-more border-0 bg-transparent font20 fw300">
          Learn more
        </button>
        <div className="location pt-4">
          <h2 className="fw600 font25 mb-1 heading-color pb-3">Our Location</h2>
          <iframe
            className="w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.398725983553!2d76.6882861146101!3d30.707189293915373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef21c0504347%3A0xc333e5f7c7b2c813!2sBepoj%20Technology%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1666009220457!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="py-4">
          <h2 className="fw600 font25 mb-1 heading-color pb-3 social-link">
            Refer to a friend
          </h2>
          <Link to="">
            <img src={Faceboot_rect} style={{ width: 40 }} />
          </Link>
          <Link to="" className="mx-3">
            <img src={Linkedin} style={{ width: 40 }} />
          </Link>
          <Link to="" className="me-3">
            <img src={Twiter} style={{ width: 40 }} />
          </Link>
          <Link to="">
            <img src={Gmail} style={{ width: 40 }} />
          </Link>
        </div>
        <div className="">
          <h2 className="fw600 font25 mb-1 heading-color pb-3">
            Copy job URL link
          </h2>
          <div className="copy-link">
            <input
              type="text"
              id="myInput"
              onChange={(e)=>setCopyValue(e.target.value)}
            value={copyValue}
              className="w-100 position-relative"
            />
            <button
              onClick={()=>copyToClipboard(copyValue)}
              className="text-white position-absolute copy-link-btn text-white border-0"
            >
              Copy link
            </button>
          </div>
        </div>
        <div className="card my-4">
          <h2 className="fw600 font25 mb-1 heading-color pb-3">Recent Jobs</h2>
          <div className="border-bottom py-2">
            <h3 className="fw400 font18 heading-color mb-1">
              Senior UI Designer
            </h3>
            <p className="font14 fw400">Fulltime</p>
            <div className="d-flex justify-content-between">
              <p className="fw400 font16">NRs. 25000</p>
              <button className="fw400 font18 span-color border-0 bg-transparent">
                Apply Now
              </button>
            </div>
          </div>
          <div className="border-bottom py-2">
            <h3 className="fw400 font18 heading-color mb-1">
              Senior UI Designer
            </h3>
            <p className="font14 fw400">Fulltime</p>
            <div className="d-flex justify-content-between">
              <p className="fw400 font16">NRs. 25000</p>
              <button className="fw400 font18 span-color border-0 bg-transparent">
                Apply Now
              </button>
            </div>
          </div>
          <div className="py-2">
            <h3 className="fw400 font18 heading-color mb-1">
              Senior UI Designer
            </h3>
            <p className="font14 fw400">Fulltime</p>
            <div className="d-flex justify-content-between">
              <p className="fw400 font16">NRs. 25000</p>
              <button className="fw400 font18 span-color border-0 bg-transparent">
                Apply Now
              </button>
            </div>
          </div>
          <button className="view-more-btn border-0 bg-transparent font20 fw300 text-start">
            View More
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </>
  )
}

export default JobDiscription

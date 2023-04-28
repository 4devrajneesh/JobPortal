import React from 'react'
import Navbar from '../../../Components/JobSeekeers/NavbarMain/Navbar'
import Footer from '../../../Components/JobSeekeers/Footer/Footer'
import './jobdetails.css'
import { Link } from 'react-router-dom'
function Jobdetails() {
  return (
    <>
      <Navbar/>
      <section class="login-banner">
    <div class="container">
        <h1 class="login-heading fw500 mb-0 font30 text-center black-color">Laravel Developer(Full Time) - Match Company Limited </h1>
    </div>
</section>
<section className="py-5">
  <div className="container">
    <div className="align d-flex justify-content-center pb-4">
      <Link to="/job-discription" className="company mx-5 black-color fw500 font20">
        View Company
      </Link>
      <a href="" className="applyjob text-white fw500 font20">
        Apply This Job
      </a>
    </div>
    <div className="pb-4">
      <p className="fw600  black-color mb-1">
        Minimum Qualification<span className="fw400 font16">: Bachelor</span>
      </p>
      <p className="fw600  black-color  mb-1">
        {" "}
        Experience Level<span className="fw400 font16"> : Mid level</span>
      </p>
      <p className="fw600 black-color  mb-1">
        {" "}
        Experience Length<span className="fw400 font16"> : 2 years</span>
      </p>
      <p className="fw600  black-color  mb-1">
        {" "}
        Location<span className="fw400 font16"> : San Francisco, USA</span>
      </p>
      <p className="fw600  black-color  mb-1">
        {" "}
        Application Deadline<span className="fw400 font16"> : 12/08/2022</span>
      </p>
      <p className="fw600  black-color  mb-1">
        {" "}
        Salary Range:<span className="fw400 font16"> $ 105,000 - 150,000</span>
      </p>
    </div>
    <div className="">
      <h2 className="fw600 font25 black-color">Job descriptions</h2>
      <p className="fw300 black-color">
        We are searching for a Laravel developer to build web applications for
        our company. In this role, you will design and create projects using
        Laravel framework and PHP, and assist the team in delivering
        high-quality web applications, services, and tools for our business.
      </p>
      <p className="fw300  black-color">
        {" "}
        To ensure success as a Laravel developer you should be adept at
        utilizing Laravel's GUI and be able to design a PHP application from
        start to finish. A top-notch Laravel developer will be able to leverage
        their expertise and experience o f the framework to independently
        produce complete solutions in a short turnaround time.
      </p>
      <h3 className="py-4 fw600 font22">Laravel Developer Requirements:</h3>
      <ul>
        <li className="fw300 black-color">
          A degree in programming, computer science, or a related field.
        </li>
        <li className="fw300 black-color">
          Experience working with PHP, performing unit testing, and managing
          APIs such as REST.
        </li>
        <li className="fw300 black-color">
          A solid understanding of application design using Laravel.
        </li>
        <li className="fw300 black-color">
          Knowledge of database design and querying using SQL.
        </li>
        <li className="fw300 black-color">
          Proficiency in HTML and JavaScript. Experience developing in Vue is
          considered a plus.
        </li>
        <li className="fw300 black-color">
          Practical experience using the MVC architecture.
        </li>
        <li className="fw300 black-color">
          The ability to work on LAMP development environment
        </li>
        <li className="fw300 black-color">
          Problem-solving skills and critical mindset.
        </li>
        <li className="fw300 black-color">Great communication skills.</li>
        <li className="fw300 black-color">The desire and ability to learn.</li>
      </ul>
      <h3 className="fw600 font22">Responsibilities:</h3>
      <ul>
        <li className="fw300 black-color">
          Discussing project aims with the client and development team.
        </li>
        <li className="fw300 black-color">
          Designing and building web applications using Laravel.
        </li>
        <li className="fw300 black-color">
          Troubleshooting issues in the implementation and debug builds.
        </li>
        <li className="fw300 black-color">
          Working with front-end and back-end developers on projects.
        </li>
        <li className="fw300 black-color">
          Testing functionality for users and the backend.
        </li>
        <li className="fw300 black-color">
          Ensuring that integrations run smoothly.
        </li>
        <li className="fw300 black-color">
          Scaling projects based on client feedback.
        </li>
        <li className="fw300 black-color">
          Problem-solving skills and critical mindset.
        </li>
        <li className="fw300 black-color">
          Recording and reporting on work done in Laravel.
        </li>
        <li className="fw300 black-color">
          Maintaining web-based applications..
        </li>
        <li className="fw300 black-color">
          Presenting work in meetings with clients and management.
        </li>
      </ul>
    </div>
  </div>
</section>

<Footer/>
    </>
  )
}

export default Jobdetails

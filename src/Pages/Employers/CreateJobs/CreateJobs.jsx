import React from 'react'
import Navbar from '../../../Components/JobSeekeers/NavbarMain/Navbar'
import Footer from '../../../Components/JobSeekeers/Footer/Footer'
import './createjob.css'
function CreateJobs() {
  return (
    <>
        <Navbar/>
        <section class="login-banner">
    <div class="container">
        <h1 class="login-heading fw500 mb-0 font30 text-center black-color">Create a Job</h1>
    </div>
</section>

<section className="form-sec py-5">
  <div className="container">
    <form className="row">
      <div className="mb-3 col-12 col-md-6">
        <label
          htmlFor="exampleInputname"
          className="form-label fw500 font20 black-color"
        >
          Company Name
        </label>
        <input
          type="email"
          className="form-control input-style fw-bold font16"
          id="exampleInputname"
          aria-describedby="emailHelp"
          placeholder="Name"
        />
      </div>
      <div className="mb-3 col-12 col-md-6">
        <label
          htmlFor="exampleInputname"
          className="form-label fw500 font20 black-color"
        >
          Company Website
        </label>
        <input
          type="email"
          className="form-control input-style fw-bold font16"
          id="exampleInputname"
          aria-describedby="emailHelp"
          placeholder="Website Link"
        />
      </div>
      <div className="mb-3 col-12">
        <label
          htmlFor="exampleInputname"
          className="form-label fw500 font20 black-color"
        >
          Job Title
        </label>
        <input
          type="email"
          className="form-control input-style fw-bold font16"
          id="exampleInputname"
          aria-describedby="emailHelp"
          placeholder="Title"
        />
      </div>
      <div className="mb-3 col-12 col-md-6">
        <label
          htmlFor="exampleInputname"
          className="form-label fw500 font20 black-color"
        >
          Job Category
        </label>
        <select
          className="form-select form-select-lg mb-3 input-style"
          aria-label=".form-select-lg example"
        >
          <option selected="">Technology</option>
          <option value={1}>Technology</option>
          <option value={2}>Technology</option>
          <option value={3}>Technology</option>
        </select>
      </div>
      <div className="mb-3 col-12 col-md-6">
        <label
          htmlFor="exampleInputname"
          className="form-label fw500 font20 black-color"
        >
          Job Type
        </label>
        <select
          className="form-select form-select-lg mb-3 input-style"
          aria-label=".form-select-lg example"
        >
          <option selected="">Technology</option>
          <option value={1}>Technology</option>
          <option value={2}>Technology</option>
          <option value={3}>Technology</option>
        </select>
      </div>
      <div className="mb-3 col-12 col-md-6">
        <label
          htmlFor="location"
          className="form-label fw500 font20 black-color"
        >
          Job Location
        </label>
        <input
          type="name"
          className="form-control input-style fw-bold font16"
          id="exampleInputname"
          aria-describedby="nameHelp"
          placeholder="Location"
        />
      </div>
      <div className="mb-3 col-12 col-md-6">
        <label htmlFor="text" className="form-label fw500 font20 black-color">
          Salary Range
        </label>
        <input
          type="name"
          className="form-control input-style fw-bold font16"
          id="exampleInputname"
          aria-describedby="namelHelp"
          placeholder="Salary Range"
        />
      </div>
      <div className="mb-3 col-12 col-md-6">
        <label
          htmlFor="exampleInputname"
          className="form-label fw500 font20 black-color"
        >
          Experience
        </label>
        <input
          type="name"
          className="form-control input-style fw-bold font16"
          id="exampleInputname"
          aria-describedby="nameHelp"
          placeholder="Experience"
        />
      </div>
      <div className="mb-3 col-12 col-md-6">
        <label
          htmlFor="exampleInputname"
          className="form-label fw500 font20 black-color"
        >
          Qualification
        </label>
        <input
          type="name"
          className="form-control input-style fw-bold font16"
          id="exampleInputname"
          aria-describedby="nameHelp"
          placeholder="Qualification"
        />
      </div>
      <div className="mb-3 col-12">
        <label
          htmlFor="exampleInputname"
          className="form-label fw500 font20 black-color"
        >
          Application Deadline
        </label>
        <input
          type="name"
          className="form-control input-style fw-bold font16"
          id="exampleInputname"
          aria-describedby="nameHelp"
          placeholder="Job application deadline"
        />
      </div>
      <div className="mb-3 col-12">
        <label
          htmlFor="exampleInputname"
          className="form-label fw500 font20 black-color"
        >
          Job Application Link
        </label>
        <input
          type="name"
          className="form-control input-style fw-bold font16"
          id="exampleInputname"
          aria-describedby="nameHelp"
          placeholder="Job application link url"
        />
      </div>
      <div className="mb-3 col-12 pb-5">
        <label
          htmlFor="exampleInputname"
          className="form-label fw500 font20 black-color"
        >
          Job Description
        </label>
        <input
          type="name"
          className="form-control input-style fw-bold font16 h-100"
          id="exampleInputname"
          aria-describedby="nameHelp"
        />
      </div>
      <div className="d-flex justify-content-end pt-4">
        <a href="post-job.html" className="radius-36 post-job mx-3 form-post">
          Post a job
        </a>
      </div>
    </form>
  </div>
</section>
      <Footer/>
    </>
  )
}

export default CreateJobs

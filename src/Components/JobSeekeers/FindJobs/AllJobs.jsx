import React from 'react'
 import { Link } from 'react-router-dom'
function AllJobs() {

    const jobsData =[
        {id:"1", jobTitle:"UI/UX Designer",companyName:"Foodmandu",type:"Full time",locatiom:"Koteshwor Nepal"},
        {id:"2", jobTitle:"UI/UX Designer",companyName:"Foodmandu",type:"Full time",locatiom:"Koteshwor Nepal"},
        {id:"3", jobTitle:"UI/UX Designer",companyName:"Foodmandu",type:"Full time",locatiom:"Koteshwor Nepal"},
        {id:"4", jobTitle:"UI/UX Designer",companyName:"Foodmandu",type:"Full time",locatiom:"Koteshwor Nepal"},
        {id:"5", jobTitle:"UI/UX Designer",companyName:"Foodmandu",type:"Full time",locatiom:"Koteshwor Nepal"},
        {id:"6", jobTitle:"UI/UX Designer",companyName:"Foodmandu",type:"Full time",locatiom:"Koteshwor Nepal"},
    ]
  return (
    <div>
      
<section className="py-5 all-job">
  <div className="container px-4">
    <div className="row">
      <div className="col-md-3">
        <div className="job-rightBox h-100">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item border-0">
              <h2 className="accordion-header border-0" id="flush-headingOne">
                <button
                  className="accordion-button fw600 font20 px-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="true"
                  aria-controls="flush-collapseOne"
                >
                  Job Type
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body pt-0">
                  <div className="form-check">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault"
                    >
                      Full time
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckChecked"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckChecked"
                    >
                      Part time
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault"
                    >
                      Remote
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault"
                    >
                      Internship
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault"
                    >
                      Contract
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed fw600 font20 px-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Job Categories
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse show"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body pt-0">
                  <div className="form-check">
                    <input
                      className="form-check-input me-5"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault"
                    >
                      Design
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckChecked"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckChecked"
                    >
                      Sales
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault"
                    >
                      Marketting
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault"
                    >
                      Finance
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault"
                    >
                      Technology
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault"
                    >
                      Engineering
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault"
                    >
                      Business
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault"
                    >
                      Human Resource
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item border-0">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed fw600 font20 px-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Salary Range
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse show"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body pt-0">
                  <div className="form-check">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault"
                    >
                      $5 - $100
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckChecked"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckChecked"
                    >
                      $100 - $1000
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault"
                    >
                      $1000 - $5000
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault"
                    >
                      $5000 and above
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-9 design-job">
        <div className="d-flex justify-content-between">
          <div className="">
            <h2 className="mb-0 font25 fw600 showing">All Jobs</h2>
            <p className="fw400 font18 result mt-0">Showing 22 results</p>
          </div>
          <div className="">
            <p className="mb-0 fw600 relevant">
              Sort by <span className="most-relevant">: Most relevant</span>
            </p>
          </div>
        </div>

        {
            jobsData && jobsData.map((elm,ind)=>
           
            <Link to={`/job-details/${elm.id}`}>
        <div className="card mt-3">
          <div className="d-flex justify-content-between">
            <div className="">
              <h3 className="fw600 font25 mb-0 heading-color">
              {elm.jobTitle}
              </h3>
              <p className="font18 fw500 mb-1">{elm.companyName}</p>
              <span className="fw600 me-4 heading-color">{elm.type}</span>
              <span className="fw600 heading-color">{elm.locatiom}</span>
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
        </Link>

)
}
        

        <nav aria-label="Page navigation example" className="d-flex pt-3">
          <input type="hidden" className="get_total_record" defaultValue={20} />
          <ul className="pagination navs d-none d-md-block">
            <li className="page-item prev">
              <a
                className="page-link border-0"
                href="#"
                aria-label="Previous"
                data-type="prev"
              >
                <span aria-hidden="true">&lt;</span>
              </a>
            </li>
          </ul>
          <ul className="pagination dotts justify-content-center">
            <li className="page-item">
              <a className="page-link border-0 active" href="#" data-num={1}>
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link border-0 " href="#" data-num={2}>
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link border-0" href="#" data-num={3}>
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link border-0" href="#" data-num={4}>
                4
              </a>
            </li>
            <li className="page-item">
              <a className="page-link border-0" href="#" data-num={4}>
                5
              </a>
            </li>
            <li className="page-item">
              <a className="page-link border-0" href="#" data-num={4}>
                {" "}
                33
              </a>
            </li>
          </ul>
          <ul className="pagination navs d-none d-md-block">
            <li className="page-item">
              <a
                className="page-link border-0"
                href="#"
                aria-label="Next"
                data-type="next"
              >
                <span aria-hidden="true">&gt;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default AllJobs

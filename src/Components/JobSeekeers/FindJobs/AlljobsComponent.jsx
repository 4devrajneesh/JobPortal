import React from "react";
import { Link } from "react-router-dom";
import Pagination from 'react-bootstrap/Pagination';

function AlljobsComponent() {
  const jobsData = [
    {
      id: "1",
      jobTitle: "UI/UX Designer",
      companyName: "Foodmandu",
      type: "Full time",
      locatiom: "Koteshwor Nepal",
    },
    {
      id: "2",
      jobTitle: "UI/UX Designer",
      companyName: "Foodmandu",
      type: "Full time",
      locatiom: "Koteshwor Nepal",
    },
    {
      id: "3",
      jobTitle: "UI/UX Designer",
      companyName: "Foodmandu",
      type: "Full time",
      locatiom: "Koteshwor Nepal",
    },
    {
      id: "4",
      jobTitle: "UI/UX Designer",
      companyName: "Foodmandu",
      type: "Full time",
      locatiom: "Koteshwor Nepal",
    },
    {
      id: "5",
      jobTitle: "UI/UX Designer",
      companyName: "Foodmandu",
      type: "Full time",
      locatiom: "Koteshwor Nepal",
    },
    {
      id: "6",
      jobTitle: "UI/UX Designer",
      companyName: "Foodmandu",
      type: "Full time",
      locatiom: "Koteshwor Nepal",
    },
  ];
  return (
    <>
      {jobsData &&
        jobsData.map((elm, ind) => (
          <Link to={`/job-details/${elm.id}`}>
            <div className="card rounded-4 mt-3 p-4">
              <div className="d-flex justify-content-between">
                <div className="">
                  <h3 className="fw600 font25 mb-0 heading-color">
                    {elm.jobTitle}
                  </h3>
                  <p className="font18 text-dark fw500 mb-1">
                    {elm.companyName}
                  </p>
                  <span className="fw600 me-4  heading-color">{elm.type}</span>
                  <span className="fw600 heading-color">{elm.locatiom}</span>
                </div>
                <div className="align-self-center apply-now-btn d-none d-md-block">
                  <button className="btn fw400 apply-now-btn ">Apply Now</button>
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
        ))}

<Pagination className="mt-3">
    
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      

      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
  

      <Pagination.Ellipsis />
      <Pagination.Item>{33}</Pagination.Item>
      <Pagination.Next />
  
    </Pagination>
    </>
  );
}

export default AlljobsComponent;

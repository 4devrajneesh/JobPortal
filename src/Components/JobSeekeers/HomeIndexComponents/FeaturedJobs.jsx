import React from "react";
import { Link } from "react-router-dom";
function FeaturedJobs() {
  const dummyJobs = [
    {
      id: "1",
      title: "Senior UI Designer",
      type: "Fulltime",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum.",
      salary: "25000",
    },
    {
      id: "2",
      title: "Senior UI Designer",
      type: "Fulltime",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum.",
      salary: "25000",
    },
    {
      id: "3",
      title: "Senior UI Designer",
      type: "Fulltime",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum.",
      salary: "25000",
    },
    {
      id: "4",
      title: "Senior UI Designer",
      type: "Fulltime",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum.",
      salary: "25000",
    },
    {
      id: "5",
      title: "Senior UI Designer",
      type: "Fulltime",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum.",
      salary: "25000",
    },
    {
      id: "6",
      title: "Senior UI Designer",
      type: "Fulltime",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum.",
      salary: "25000",
    },
    {
      id: "7",
      title: "Senior UI Designer",
      type: "Fulltime",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum.",
      salary: "25000",
    },
    {
      id: "8",
      title: "Senior UI Designer",
      type: "Fulltime",
      disc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum.",
      salary: "25000",
    },
  ];

  return (
    <div>
      <section className="pb-4 featured-jobs">
        <div className="container">
          <h3 className="fw600 font25 mb-4">
            Featured <span className="span-color">Jobs</span>
          </h3>
          <div className="row ">
            {dummyJobs &&
              dummyJobs.map((elm, id) => (

                <div className="col-md-3 mb-3" key={id}>
              <Link to={`/job-details/${id}`}>
                  <div className="card p-3 rounded-4">
                    <h3 className="mb-0 card-heading">{elm.title}</h3>
                    <span className="fw400 fulltime py-lg-2">{elm.type}</span>
                    <p className="fw400 font14 card-sub-title">{elm.disc}</p>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0 fw400  job-item font16">
                        NRs.{elm.salary}
                      </p>
                      <a href="" className="span-color fw400 font18 apply-now">
                        Apply Now
                      </a>
                    </div>
                  </div>
                  </Link>
                </div>

              ))}

          </div>
          <div className="text-center">
            <button className="my-5 btn view-more border-0 text-white fw400 font20">
              View More
              <svg
                width={22}
                height={23}
                viewBox="0 0 22 23"
              style={{marginLeft:"15px"}}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 21.5839C16.5228 21.5839 21 16.976 21 11.2919C21 5.60786 16.5228 1 11 1C5.47715 1 1 5.60786 1 11.2919C1 16.976 5.47715 21.5839 11 21.5839Z"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                <path
                  d="M11 15.4086L15 11.2918L11 7.17499"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
                <path
                  d="M7 11.2919H15"
                  stroke="white"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  />
              </svg>
            </button>
          
          </div>
        </div>
        </section>
    </div>
    );
}

export default FeaturedJobs;

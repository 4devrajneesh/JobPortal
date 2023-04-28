import React from "react";

function Recommended() {
  const dummyData = [
    {
      id: "1",
      title: "Senior UI Designer",
      type: "Fulltime",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequatnunc ac a magna at elementum.",
      salary: "25000",
    },
    {
      id: "2",
      title: "Senior UI Designer",
      type: "Fulltime",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequatnunc ac a magna at elementum.",
      salary: "25000",
    },
    {
      id: "3",
      title: "Senior UI Designer",
      type: "Fulltime",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequatnunc ac a magna at elementum.",
      salary: "25000",
    },
    {
      id: "4",
      title: "Senior UI Designer",
      type: "Fulltime",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequatnunc ac a magna at elementum.",
      salary: "25000",
    },
  ];
  return (
    <>
      <section className="pb-4 featured-jobs">
        <div className="container">
          <h3 className="fw600 font25 mb-4 mx-2">
            Recommended <span className="span-color">Jobs</span>
          </h3>
          <div className="row px-2">
            {dummyData &&
              dummyData.map((elm) => {
                return (
                  <div className="col-md-3 mb-3" key={elm.id}>
                    <div className="card p-3 rounded-3">
                      <h3 className="mb-0 card-heading">{elm.title}</h3>
                      <span className="fw400 fulltime py-lg-2">{elm.type}</span>
                      <p className="fw400 font14 card-sub-title">
                        {elm.discription}
                      </p>
                      <div className="d-flex justify-content-between">
                        <p className="mb-0 fw400  job-item font16">
                          NRs. {elm.salary}
                        </p>
                        <a
                          href=""
                          className="span-color fw400 font18 apply-now"
                        >
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Recommended;

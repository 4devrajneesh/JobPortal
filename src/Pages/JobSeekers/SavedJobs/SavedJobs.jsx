import React from "react";
import Navbar from "../../../Components/JobSeekeers/NavbarMain/Navbar";
import Footer from "../../../Components/JobSeekeers/Footer/Footer";

function SavedJobs() {
  const dummyData = [
    {
      id: "1",
      title: "Laravel Developer",
      jobType: "Full Time",
      postedDate: "12/06/2022",
      applicationDeadline: "Full Time",
    },
    {
      id: "2",
      title: "Laravel Developer",
      jobType: "Full Time",
      postedDate: "12/06/2022",
      applicationDeadline: "Full Time",
    },
    {
      id: "3",
      title: "Laravel Developer",
      jobType: "Full Time",
      postedDate: "12/06/2022",
      applicationDeadline: "Full Time",
    },
    {
      id: "4",
      title: "Laravel Developer",
      jobType: "Full Time",
      postedDate: "12/06/2022",
      applicationDeadline: "Full Time",
    },
    {
      id: "5",
      title: "Laravel Developer",
      jobType: "Full Time",
      postedDate: "12/06/2022",
      applicationDeadline: "Full Time",
    },
    {
      id: "6",
      title: "Laravel Developer",
      jobType: "Full Time",
      postedDate: "12/06/2022",
      applicationDeadline: "Full Time",
    },
    {
      id: "7",
      title: "Laravel Developer",
      jobType: "Full Time",
      postedDate: "12/06/2022",
      applicationDeadline: "Full Time",
    },
  ];

  return (
    <>
      <Navbar />
      <section class="login-banner">
        <div class="container">
          <h1 class="login-heading fw500 mb-0 font30 text-center black-color">
            My Jobs List
          </h1>
        </div>
      </section>
      
        <section className="py-5">
          <div className="container">
            <div className="table-responsive">
              <table className="table attendance-tab border">
                <tbody>
                  <tr className="border-bottom">
                    <th className="fw600 font18 black-color ps-4 pt-3">
                      Title
                    </th>
                    <th className="fw600 font18 black-color ps-4 pt-3">
                      Job Type
                    </th>
                    <th className="fw600 font18 black-color ps-4 pt-3">
                      Posted Date
                    </th>
                    <th className="fw600 font18 black-color ps-4 pt-3">
                      Application Deadline
                    </th>
                    <th className="fw600 font18 black-color ps-4 pt-3">
                      Action
                    </th>
                  </tr>

                  {dummyData &&
                    dummyData.map((elm) => {
                      return (
                        <>
                          <tr className="border-bottom" key={elm.id}>
                            <td className="fw400 font16 black-color ps-4 pt-3">
                              {elm.title}
                            </td>
                            <td className="fw400 font16 black-color ps-4 pt-3">
                              {elm.jobType}
                            </td>
                            <td className="fw400 font16 black-color ps-4 pt-3">
                              {elm.postedDate}
                            </td>
                            <td className="fw400 font16 black-color ps-4 pt-3">
                              {elm.applicationDeadline}
                            </td>
                            <td className="fw400 font16 black-color ps-4 pt-3">
                              <span className="d-inline-block  view align-items-center text-center rounded-2 p-1">
                                <a href="#">
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g clipPath="url(#clip0_178_254)">
                                      <path
                                        d="M1.49805 12C1.49805 12 5.28299 4 11.9067 4C18.5303 4 22.3153 12 22.3153 12C22.3153 12 18.5303 20 11.9067 20C5.28299 20 1.49805 12 1.49805 12Z"
                                        stroke="#338573"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                      <path
                                        d="M11.9071 15C13.4748 15 14.7458 13.6569 14.7458 12C14.7458 10.3431 13.4748 9 11.9071 9C10.3393 9 9.06836 10.3431 9.06836 12C9.06836 13.6569 10.3393 15 11.9071 15Z"
                                        stroke="#338573"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_178_254">
                                        <rect
                                          width="22.7097"
                                          height={24}
                                          fill="white"
                                          transform="translate(0.551758)"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </a>
                              </span>
                              <span className="d-inline-block  edit align-items-center text-center rounded-2  p-1">
                                <a href="#">
                                  <svg
                                    width={22}
                                    height={22}
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M15.9455 2C16.194 1.73735 16.4891 1.52901 16.8138 1.38687C17.1385 1.24473 17.4865 1.17157 17.838 1.17157C18.1894 1.17157 18.5375 1.24473 18.8622 1.38687C19.1869 1.52901 19.4819 1.73735 19.7304 2C19.979 2.26264 20.1761 2.57444 20.3106 2.9176C20.4451 3.26077 20.5143 3.62856 20.5143 4C20.5143 4.37143 20.4451 4.73923 20.3106 5.08239C20.1761 5.42555 19.979 5.73735 19.7304 6L6.95625 19.5L1.75195 21L3.17131 15.5L15.9455 2Z"
                                      stroke="#04BCF7"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </a>
                              </span>
                              <span className="d-inline-block  delete align-items-center text-center rounded-2 p-1">
                                <a href="#">
                                  <svg
                                    width={23}
                                    height={24}
                                    viewBox="0 0 23 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M3.00684 6H4.89931H20.0391"
                                      stroke="#FA0606"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M7.73812 6V4C7.73812 3.46957 7.93751 2.96086 8.29242 2.58579C8.64732 2.21071 9.12868 2 9.6306 2H13.4155C13.9175 2 14.3988 2.21071 14.7537 2.58579C15.1086 2.96086 15.308 3.46957 15.308 4V6M18.1467 6V20C18.1467 20.5304 17.9473 21.0391 17.5924 21.4142C17.2375 21.7893 16.7562 22 16.2543 22H6.79189C6.28997 22 5.80861 21.7893 5.45371 21.4142C5.0988 21.0391 4.89941 20.5304 4.89941 20V6H18.1467Z"
                                      stroke="#FA0606"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </a>
                              </span>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
     <Footer />
    </>
  );
}

export default SavedJobs;

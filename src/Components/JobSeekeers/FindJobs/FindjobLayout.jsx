import React from "react";
import Accordion from "react-bootstrap/Accordion";
import AlljobsComponent from "./AlljobsComponent";

function FindjobLayout() {
  return (
    <div className="container">
 
    <div className="row pt-3">
      <div className="col-12 col-md-4 col-lg-3 p-1 ">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" >
            <Accordion.Header ><p className=" fw600 font20">Job Type</p></Accordion.Header>
            <Accordion.Body>
                            <div className="form-check mt-3">
                <input
                  className="form-check-input me-3 mt-1"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault1"
                />
                <label
                  className="form-check-label fw400 font18"
                  htmlFor="flexCheckDefault1"
                >
                  Full time
                </label>
              </div>
                <div className="form-check mt-3">
                <input
                  className="form-check-input me-3 mt-1"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckChecked2"
                  defaultChecked=""
                />
                <label
                  className="form-check-label fw400 font18"
                  htmlFor="flexCheckChecked2"
                >
                  Part time
                </label>
              </div>
                <div className="form-check mt-3">
                <input
                  className="form-check-input me-3 mt-1"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault3"
                />
                <label
                  className="form-check-label fw400 font18"
                  htmlFor="flexCheckDefault3"
                >
                  Remote
                </label>
              </div>
                <div className="form-check mt-3">
                <input
                  className="form-check-input me-3 mt-1"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault4"
                />
                <label
                  className="form-check-label fw400 font18"
                  htmlFor="flexCheckDefault4"
                >
                  Internship
                </label>
              </div>
                <div className="form-check mt-3">
                <input
                  className="form-check-input me-3 mt-1"
                  type="checkbox"
                  defaultValue=""
                  id="flexCheckDefault5"
                />
                <label
                  className="form-check-label fw400 font18"
                  htmlFor="flexCheckDefault5"
                >
                  Contract
                </label>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>





        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="1" >
            <Accordion.Header> <p className=" fw600 font20">Job Categories</p></Accordion.Header>
            <Accordion.Body>
          
                                <div className="form-check mt-3">
                    <input
                      className="form-check-input me-3 mt-1"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckChecked6"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckChecked6"
                    >
                     Design
                    </label>
                  </div>
                                <div className="form-check mt-3">
                    <input
                      className="form-check-input me-3 mt-1"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckChecked7"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckChecked7"
                    >
                      Sales
                    </label>
                  </div>
                                <div className="form-check mt-3">
                    <input
                      className="form-check-input me-3 mt-1"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault8"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault8"
                    >
                      Marketting
                    </label>
                  </div>
                                <div className="form-check mt-3">
                    <input
                      className="form-check-input me-3 mt-1"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault9"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault9"
                    >
                      Finance
                    </label>
                  </div>
                                <div className="form-check mt-3">
                    <input
                      className="form-check-input me-3 mt-1"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault10"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault10"
                    >
                      Technology
                    </label>
                  </div>
                                <div className="form-check mt-3">
                    <input
                      className="form-check-input me-3 mt-1"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault11"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault11"
                    >
                      Engineering
                    </label>
                  </div>
                                <div className="form-check mt-3">
                    <input
                      className="form-check-input me-3 mt-1"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault12"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault12"
                    >
                      Business
                    </label>
                  </div>
                                <div className="form-check mt-3">
                    <input
                      className="form-check-input me-3 mt-1"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault13"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault13"
                    >
                      Human Resource
                    </label>
                  </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>




        <Accordion defaultActiveKey="2">
          <Accordion.Item eventKey="2" >
            <Accordion.Header><p className=" fw600 font20 p-0"> Salary Range</p></Accordion.Header>
            <Accordion.Body>
                          <div className="form-check mt-3">
                    <input
                      className="form-check-input me-3 mt-1"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault14"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault14"
                    >
                      $5 - $100
                    </label>
                  </div>
                                <div className="form-check mt-3">
                    <input
                      className="form-check-input me-3 mt-1"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckChecked15"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckChecked15"
                    >
                      $100 - $1000
                    </label>
                  </div>
                                <div className="form-check mt-3">
                    <input
                      className="form-check-input me-3 mt-1"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault16"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault16"
                    >
                      $1000 - $5000
                    </label>
                  </div>
                                <div className="form-check mt-3">
                    <input
                      className="form-check-input me-3 mt-1"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault17"
                    />
                    <label
                      className="form-check-label fw400 font18"
                      htmlFor="flexCheckDefault17"
                    >
                      $5000 and above
                    </label>
                  </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>




       



      </div>
      <div className="col-12 col-md-8 col-lg-9 pt-3">
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
<AlljobsComponent/>
      </div>
    </div>
    </div>
  );
}

export default FindjobLayout;

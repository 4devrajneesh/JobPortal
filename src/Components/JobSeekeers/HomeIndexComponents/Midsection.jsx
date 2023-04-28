import React,{useState} from "react";



function Midsection() {
const [activeBtn ,setActiveBtn]= useState()
const [activeBtn1 ,setActiveBtn1]= useState()

  return (

       <>
  <div className="header-banner ">
    <div className="position-relative container-xxl">
    <section className="home-banner">
      <div className="container">
      <div className="d-flex  flex-wrap justify-content-center align-items-center">
  <div className={`${activeBtn == 1 ?"custum-border-1-active":"custum-border-1"} d-flex w-lg-25 `}>
    <svg
      className="svg-size"
      width="{16}"
      height="{16}"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.7983 14.8596L11.2077 10.2619C12.1127 9.17567 12.657 7.78751 12.657 6.27136C12.657 2.81243 9.82068 0 6.3318 0C2.84291 0 0 2.81571 0 6.27464C0 9.73356 2.83636 12.546 6.32524 12.546C7.80736 12.546 9.17143 12.0373 10.2535 11.1874L14.8605 15.7982C15.1294 16.0673 15.5295 16.0673 15.7983 15.7982C16.0672 15.5291 16.0672 15.1287 15.7983 14.8596ZM1.3444 6.27464C1.3444 3.55738 3.58069 1.34878 6.32524 1.34878C9.06978 1.34878 11.3061 3.55738 11.3061 6.27464C11.3061 8.9919 9.06978 11.2005 6.32524 11.2005C3.58069 11.2005 1.3444 8.98862 1.3444 6.27464Z"
        fill="#6E00C4"
      />
    </svg>
    <input className="inp-no-border " placeholder="  Search by job title/role" onFocus={()=>setActiveBtn(1)} onBlur={()=>setActiveBtn(0)}  type="text" />
  </div>
  <div className={`${activeBtn == 2 ?"custum-border-2-active":"custum-border-2"} d-flex w-lg-25 `}>
    <svg
      width="{11}"
      className="svg-size"
      height="{14}"
      viewBox="0 0 11 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 5.5C10 4.30653 9.52589 3.16193 8.68198 2.31802C7.83807 1.47411 6.69347 1 5.5 1C4.30653 1 3.16193 1.47411 2.31802 2.31802C1.47411 3.16193 1 4.30653 1 5.5C1 7.346 2.477 9.752 5.5 12.634C8.523 9.752 10 7.346 10 5.5ZM5.5 14C1.833 10.667 0 7.833 0 5.5C0 4.04131 0.579463 2.64236 1.61091 1.61091C2.64236 0.579463 4.04131 0 5.5 0C6.95869 0 8.35764 0.579463 9.38909 1.61091C10.4205 2.64236 11 4.04131 11 5.5C11 7.833 9.167 10.667 5.5 14Z"
        fill="#6E00BE"
      />
      <path
        d="M5.5 7C5.89782 7 6.27936 6.84196 6.56066 6.56066C6.84196 6.27936 7 5.89782 7 5.5C7 5.10218 6.84196 4.72064 6.56066 4.43934C6.27936 4.15804 5.89782 4 5.5 4C5.10218 4 4.72064 4.15804 4.43934 4.43934C4.15804 4.72064 4 5.10218 4 5.5C4 5.89782 4.15804 6.27936 4.43934 6.56066C4.72064 6.84196 5.10218 7 5.5 7ZM5.5 8C4.83696 8 4.20107 7.73661 3.73223 7.26777C3.26339 6.79893 3 6.16304 3 5.5C3 4.83696 3.26339 4.20107 3.73223 3.73223C4.20107 3.26339 4.83696 3 5.5 3C6.16304 3 6.79893 3.26339 7.26777 3.73223C7.73661 4.20107 8 4.83696 8 5.5C8 6.16304 7.73661 6.79893 7.26777 7.26777C6.79893 7.73661 6.16304 8 5.5 8Z"
        fill="#6E00BE"
      />
    </svg>
    <input type="text" placeholder="  Location"  onFocus={()=>setActiveBtn(2)} onBlur={()=>setActiveBtn(0)}  className="inp-no-border" />
  </div>
  <div className={`${activeBtn == 3 ?"custum-border-3-active":"custum-border-3"} d-flex w-lg-25 `}>
    <svg
      width="{16}"
      className="svg-size"
      height="{16}"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_2_102" fill="white">
        <path d="M14.7708 16H1.22917C0.551563 16 0 15.4484 0 14.7708V5.39583C0 5.29219 0.0838542 5.20833 0.1875 5.20833H4.6875V3.3125C4.6875 1.48594 6.17344 0 8 0C9.82656 0 11.3125 1.48594 11.3125 3.3125V5.20833H15.8125C15.9161 5.20833 16 5.29219 16 5.39583V14.7708C16 15.449 15.449 16 14.7708 16ZM0.375 11.8333V14.7708C0.375 15.2417 0.758333 15.625 1.22917 15.625H14.7708C15.2417 15.625 15.625 15.2422 15.625 14.7708V11.8333H0.375ZM0.375 11.4583H15.625V5.58333H0.375V11.4583ZM5.0625 5.20833H10.9375V3.3125C10.9375 1.69271 9.62031 0.375 8 0.375C6.38021 0.375 5.0625 1.69271 5.0625 3.3125V5.20833Z" />
      </mask>
      <path
        d="M14.7708 16H1.22917C0.551563 16 0 15.4484 0 14.7708V5.39583C0 5.29219 0.0838542 5.20833 0.1875 5.20833H4.6875V3.3125C4.6875 1.48594 6.17344 0 8 0C9.82656 0 11.3125 1.48594 11.3125 3.3125V5.20833H15.8125C15.9161 5.20833 16 5.29219 16 5.39583V14.7708C16 15.449 15.449 16 14.7708 16ZM0.375 11.8333V14.7708C0.375 15.2417 0.758333 15.625 1.22917 15.625H14.7708C15.2417 15.625 15.625 15.2422 15.625 14.7708V11.8333H0.375ZM0.375 11.4583H15.625V5.58333H0.375V11.4583ZM5.0625 5.20833H10.9375V3.3125C10.9375 1.69271 9.62031 0.375 8 0.375C6.38021 0.375 5.0625 1.69271 5.0625 3.3125V5.20833Z"
        fill="#6E00BE"
      />
      <path
        d="M4.6875 5.20833V6.20833H5.6875V5.20833H4.6875ZM11.3125 5.20833H10.3125V6.20833H11.3125V5.20833ZM0.375 11.8333V10.8333H-0.625V11.8333H0.375ZM15.625 11.8333H16.625V10.8333H15.625V11.8333ZM0.375 11.4583H-0.625V12.4583H0.375V11.4583ZM15.625 11.4583V12.4583H16.625V11.4583H15.625ZM15.625 5.58333H16.625V4.58333H15.625V5.58333ZM0.375 5.58333V4.58333H-0.625V5.58333H0.375ZM5.0625 5.20833H4.0625V6.20833H5.0625V5.20833ZM10.9375 5.20833V6.20833H11.9375V5.20833H10.9375ZM14.7708 15H1.22917V17H14.7708V15ZM1.22917 15C1.10385 15 1 14.8962 1 14.7708H-1C-1 16.0007 -0.000722464 17 1.22917 17V15ZM1 14.7708V5.39583H-1V14.7708H1ZM1 5.39583C1 5.84447 0.636138 6.20833 0.1875 6.20833V4.20833C-0.468429 4.20833 -1 4.7399 -1 5.39583H1ZM0.1875 6.20833H4.6875V4.20833H0.1875V6.20833ZM5.6875 5.20833V3.3125H3.6875V5.20833H5.6875ZM5.6875 3.3125C5.6875 2.03822 6.72572 1 8 1V-1C5.62115 -1 3.6875 0.933653 3.6875 3.3125H5.6875ZM8 1C9.27428 1 10.3125 2.03822 10.3125 3.3125H12.3125C12.3125 0.933652 10.3788 -1 8 -1V1ZM10.3125 3.3125V5.20833H12.3125V3.3125H10.3125ZM11.3125 6.20833H15.8125V4.20833H11.3125V6.20833ZM15.8125 6.20833C15.3639 6.20833 15 5.84448 15 5.39583H17C17 4.7399 16.4684 4.20833 15.8125 4.20833V6.20833ZM15 5.39583V14.7708H17V5.39583H15ZM15 14.7708C15 14.8967 14.8967 15 14.7708 15V17C16.0012 17 17 16.0012 17 14.7708H15ZM-0.625 11.8333V14.7708H1.375V11.8333H-0.625ZM-0.625 14.7708C-0.625 15.794 0.206049 16.625 1.22917 16.625V14.625C1.31062 14.625 1.375 14.6894 1.375 14.7708H-0.625ZM1.22917 16.625H14.7708V14.625H1.22917V16.625ZM14.7708 16.625C15.7936 16.625 16.625 15.7949 16.625 14.7708H14.625C14.625 14.6895 14.6898 14.625 14.7708 14.625V16.625ZM16.625 14.7708V11.8333H14.625V14.7708H16.625ZM15.625 10.8333H0.375V12.8333H15.625V10.8333ZM0.375 12.4583H15.625V10.4583H0.375V12.4583ZM16.625 11.4583V5.58333H14.625V11.4583H16.625ZM15.625 4.58333H0.375V6.58333H15.625V4.58333ZM-0.625 5.58333V11.4583H1.375V5.58333H-0.625ZM5.0625 6.20833H10.9375V4.20833H5.0625V6.20833ZM11.9375 5.20833V3.3125H9.9375V5.20833H11.9375ZM11.9375 3.3125C11.9375 1.14054 10.1727 -0.625 8 -0.625V1.375C9.06791 1.375 9.9375 2.24488 9.9375 3.3125H11.9375ZM8 -0.625C5.82792 -0.625 4.0625 1.14042 4.0625 3.3125H6.0625C6.0625 2.24499 6.93249 1.375 8 1.375V-0.625ZM4.0625 3.3125V5.20833H6.0625V3.3125H4.0625Z"
        fill="#6E00BE"
        mask="url(#path-1-inside-1_2_102)"
      />
    </svg>
    <input type="text" placeholder="  Experience" onFocus={()=>setActiveBtn(3)} onBlur={()=>setActiveBtn(0)} className="inp-no-border" />
  </div>
  <div>
    <button className="search-btn-midsection">Search</button>
  </div>
</div>

        
       
        <h1 className="text-center py-4 mb-0 font36 fw500 black-color main-heading">
          Find the job that is
          <br /> perfect for <span className="span-color">You</span>
        </h1>
        <form className="upload-resume text-center pt-0 mt-0 pb-5 pb-md-0">
          <input type="file" id="actual-btn" hidden />
          {/* our custom upload button */}
          <label htmlFor="actual-btn">
            <svg
              width={18}
              height={18}
              className="mx-2"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0L15.3633 5.09062L13.7725 6.36328L10.125 3.44531V14.4H7.875V3.44531L4.22754 6.36328L2.63672 5.09062L9 0ZM0 16.2V18H18V16.2H0Z"
                fill="#6E00BE"
              />
            </svg>
            Upload Resume
          </label>
        </form>
      </div>
    </section>
    {/* Header Section End Here */}
    {/* Job Alert Sec Start Here */}
    <section className="pb-5 d-none d-md-block">
      <div className="container">
        <div className="job-alert dalign-items-center d-md-flex  justify-content-between">
          <h2 className="mb-0 py-4 px-3 job-alert-heading">
            Get <span className="span-color">Job Alerts </span>?
          </h2>
          <div className="position-relative">
            <form className={`Subscribe-form ${ activeBtn1 && "Subscribe-form-active" }`} >
              <input type="text" onFocus={()=>setActiveBtn1(true)} onBlur={()=>setActiveBtn1(false)} placeholder="Enter your email" />
              <button
                type="submit"
                className="position-absolute subscribe text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  </div>
  {/* Discover jobs Popular Roles Sec Start Here */}
  <section className="discover-padding">
    <div className="container">
      <div className="discover-jobs bg-white">
        <div className="row">
          <div className="col-md-4">
            <div className="ps-4 pt-5">
              <h4 className="fw400 font20 text-color mb-3">
                Discover jobs across popular roles
              </h4>
              <p className="fw400 font20 discover-jobsTitle">
                Select a role and we'll show you relevant jobs for it!
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row py-5 px-4">
              <div className="col-md-4 mb-4">
                <div className="chip chip-text p-3">
                  <a href="#" className="chip-heading fw400 font18 span-color">
                    Full Stack Developer
                  </a>
                  <p className="chip-count mb-0 text-color fw400">
                    26.3K+ Jobs
                    <a href="#">
                      <svg
                        width={8}
                        height={9}
                        viewBox="0 0 8 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.692 0.289999H2.762L7.118 4.412L2.762 8.552H0.692L5.048 4.412L0.692 0.289999Z"
                          fill="#1D1934"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="chip chip-text p-3">
                  <a href="#" className="chip-heading fw400 font18 span-color">
                    Full Stack Developer
                  </a>
                  <p className="chip-count mb-0 text-color fw400">
                    26.3K+ Jobs
                    <a href="#">
                      <svg
                        width={8}
                        height={9}
                        viewBox="0 0 8 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.692 0.289999H2.762L7.118 4.412L2.762 8.552H0.692L5.048 4.412L0.692 0.289999Z"
                          fill="#1D1934"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="chip chip-text p-3">
                  <a href="#" className="chip-heading fw400 font18 span-color">
                    Full Stack Developer
                  </a>
                  <p className="chip-count mb-0 text-color fw400">
                    26.3K+ Jobs
                    <a href="#">
                      <svg
                        width={8}
                        height={9}
                        viewBox="0 0 8 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.692 0.289999H2.762L7.118 4.412L2.762 8.552H0.692L5.048 4.412L0.692 0.289999Z"
                          fill="#1D1934"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="chip chip-text p-3">
                  <a href="#" className="chip-heading fw400 font18 span-color">
                    Full Stack Developer
                  </a>
                  <p className="chip-count mb-0 text-color fw400">
                    26.3K+ Jobs
                    <a href="#">
                      <svg
                        width={8}
                        height={9}
                        viewBox="0 0 8 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.692 0.289999H2.762L7.118 4.412L2.762 8.552H0.692L5.048 4.412L0.692 0.289999Z"
                          fill="#1D1934"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="chip chip-text p-3">
                  <a href="#" className="chip-heading fw400 font18 span-color">
                    Full Stack Developer
                  </a>
                  <p className="chip-count mb-0 text-color fw400">
                    26.3K+ Jobs
                    <a href="#">
                      <svg
                        width={8}
                        height={9}
                        viewBox="0 0 8 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.692 0.289999H2.762L7.118 4.412L2.762 8.552H0.692L5.048 4.412L0.692 0.289999Z"
                          fill="#1D1934"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-md-4 mb-4 mb-md-0">
                <div className="chip chip-text p-3">
                  <a href="#" className="chip-heading fw400 font18 span-color">
                    Full Stack Developer
                  </a>
                  <p className="chip-count mb-0 text-color fw400">
                    26.3K+ Jobs
                    <a href="#">
                      <svg
                        width={8}
                        height={9}
                        viewBox="0 0 8 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.692 0.289999H2.762L7.118 4.412L2.762 8.552H0.692L5.048 4.412L0.692 0.289999Z"
                          fill="#1D1934"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

      

  );
}

export default Midsection;

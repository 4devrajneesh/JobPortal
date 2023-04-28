import React,{useState} from 'react'
import Navbar from '../../../Components/JobSeekeers/NavbarMain/Navbar'
import {Search,Location} from "../../../assets"
import Recommended from '../../../Components/JobSeekeers/FindJobs/Recommended'
import Footer from '../../../Components/JobSeekeers/Footer/Footer'
import AllJobs from '../../../Components/JobSeekeers/FindJobs/AllJobs'
import './findjobs.css'
import FindjobLayout from '../../../Components/JobSeekeers/FindJobs/FindjobLayout'
function FindJobs() {
  const[ searchFldBorder , setsearchFldBorder]= useState()
  return (
    <>
      <Navbar/>
 <section className="job-lisiting py-5">
  <div className="container ">
    <h1 className="fw500 font30 text-center">
      Discover more than<span className="jobs-color"> 50+ jobs</span>
    </h1>



    


    <div class="d-flex flex-wrap gap-2 gap-md-5 mt-4 justify-content-center">
      <div class={`discover-border-1  d-flex ${searchFldBorder == 1  && "border-active"}`}>
      <img src={Search}  alt="search image" />
        <input class="inp-no-border-discover"
         onFocus={() => setsearchFldBorder(1)}
         onBlur={() => setsearchFldBorder(0)}
         placeholder="Enter  job title, keyword"
        type="text" />
      </div>
      <div class={`discover-border-2 d-flex  ${searchFldBorder  == 2 && "border-active"}`}>
      <img src={Location} 
       alt="location" />
        <input type="text"
         onFocus={() => setsearchFldBorder(2)}
         onBlur={() => setsearchFldBorder(0)}
         placeholder="Location"
        class="inp-no-border-discover" />
      </div>

      <div><button class="btn-discover">Search</button></div>
    </div>
    <p className="text-gray pt-3 form-text-1 form-check-label fw400 font18">
      Popular searches : UI Designer, UX Researcher, Android, Admin
    </p>
  </div>
</section>
{/* <AllJobs/> */}
<FindjobLayout/>
<Recommended/>
<Footer/>
    </>
  )
}

export default FindJobs

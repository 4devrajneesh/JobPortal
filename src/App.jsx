import { BrowserRouter, Route, Routes } from "react-router-dom";
import {useEffect} from 'react'
import LoginSeekers from "./Pages/Login/LoginSeekers";
import Homeindex from "./Pages/JobSeekers/HomeIndex/Homeindex";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import RegistrationSeekers from "./Pages/Register/RegistrationSeekers";
import './App.css'
import FindJobs from "./Pages/JobSeekers/FindJobs/FindJobs";
import JobDiscription from "./Pages/JobSeekers/JobDescription/JobDiscription";
import Jobdetails from "./Pages/JobSeekers/JobDetails/Jobdetails";
import CreateJobs from "./Pages/Employers/CreateJobs/CreateJobs";
import SavedJobs from "./Pages/JobSeekers/SavedJobs/SavedJobs";
function App() {

  return (
    <>
      <BrowserRouter>
        {/* <ScrollToTop> */}
          <Routes>
            {/* seeker */}
            <Route path="/login" element={<LoginSeekers />} />
            <Route path="/register" element={<RegistrationSeekers />} />
            <Route path="/create-job" element={<CreateJobs />} />
            {/* employer */}
            <Route path="/" element={<Homeindex />} />
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/job-discription" element={<JobDiscription />} />
            <Route path="/job-details/:id" element={<Jobdetails />} />
            <Route path="/seved-jobs" element={<SavedJobs />} />
          </Routes>
        {/* </ScrollToTop> */}
      </BrowserRouter>
    </>
  );
}

export default App;

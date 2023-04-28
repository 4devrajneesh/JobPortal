import React from "react";
import Navbar from "../../../Components/JobSeekeers/NavbarMain/Navbar";
import Midsection from "../../../Components/JobSeekeers/HomeIndexComponents/Midsection";
import FeaturedJobs from "../../../Components/JobSeekeers/HomeIndexComponents/FeaturedJobs";
import Footer from "../../../Components/JobSeekeers/Footer/Footer";
import './homeindex.css'
import FooterBig from "../../../Components/JobSeekeers/FooterMain/FooterBig";
function Homeindex() {
  return (
    <>
      <Navbar />
      <Midsection />
      <FeaturedJobs />
      <FooterBig/>
    </>
  );
}

export default Homeindex;

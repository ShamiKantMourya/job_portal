import React from "react";
import Header from "../components/Header";
import JobCategories from "../components/JobCategories";
import FeaturedJob from "../components/FeaturedJob";
import BlogContainer from "../components/BlogContainer";
// import Testimonials from "../components/Testimonials";
// import ResumeBox from "../components/ResumeBox";
// import Footer from "../components/Footer";

const Homepage: React.FC = () => {
  return (
    <main className="min-h-screen scroll-smooth">
      <Header />
      <JobCategories />
      <FeaturedJob />
      <BlogContainer />
      {/* <Testimonials /> */}
      {/* <ResumeBox /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default Homepage;

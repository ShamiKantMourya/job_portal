import React from 'react';
import Header from '../components/Header';
import JobCategories from '../components/JobCategories';
import FeaturedJob from '../components/FeaturedJob';
import BlogContainer from '../components/BlogContainer';
import ClientBox from '../components/ClientBox';
import ResumeBox from '../components/ResumeBox';
import Footer from '../components/Footer';

const Homepage: React.FC = () => {
  return (
    <div>
        <Header />
        <JobCategories />
        <FeaturedJob />
        <BlogContainer />
        <ClientBox />
        <ResumeBox />
        <Footer />
    </div>
  )
}

export default Homepage
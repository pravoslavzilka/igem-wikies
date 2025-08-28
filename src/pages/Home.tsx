import React, { useState, useEffect } from 'react';
import Hero from '../components/Home_page/Hero';
import FeaturesWidget from '../components/Home_page/FeaturesWidget';
import FadeCard from '../components/Home_page/FadeCard';
import Comparison from '../components/Home_page/Comparison';
import BrazilDeforestationWidget from '../components/Brazil/BrazilDeforestationWidget';
import VideoComp from '../components/VideoComp';
import TaifrComparison from '../components/Home_page/TaifrComparison';
import "@fontsource/urbanist";
import "@fontsource/space-grotesk";





const Home = () => {

 


  return (
    <div className="min-h-screen bg-gray-50">

        <Hero />


      {/* BrazilDeforestationWidget with rounded corners */}
      <div className="mx-4 mt-8 rounded-3xl overflow-hidden">
        <BrazilDeforestationWidget />
      </div>

      <VideoComp />

      <Comparison />

      <FeaturesWidget />

      <div className="mx-4 mt-8  rounded-3xl overflow-hidden">
        <FadeCard />
      </div>

      <TaifrComparison />

      <VideoComp />
    </div>
  );
};

export default Home;
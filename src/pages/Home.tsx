import React, { useState, useEffect } from 'react';
import Hero from '../components/Home_page/Hero';
import FeaturesWidget from '../components/Home_page/FeaturesWidget';
import FadeCard from '../components/Home_page/FadeCard';
import BrazilDeforestationWidget from '../components/BrazilDeforestationWidget';
import VideoComp from '../components/VideoComp';
import "@fontsource/urbanist";
import "@fontsource/space-grotesk";





const Home = () => {

 


  return (
    

    <div className="min-h-screen bg-gray-50">
      


      <Hero />     

      <BrazilDeforestationWidget />

      <VideoComp />


      <FeaturesWidget />

      <FadeCard />

      <VideoComp />

      <VideoComp />
      

    </div>
  );
};

export default Home;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Handbook from './pages/Handbook';

// Project pages
import ProjectWhat from './pages/project/What';
import ProjectWhy from './pages/project/Why';
import ProjectHow from './pages/project/How';

// Project pages - how

import Taifr from './pages/project/how/Taifr';
import PromoterLibrary from './pages/project/how/PromoterLibrary';

import LimitingBiomass from './pages/project/how/predictor/LimitingBiomass';
import MediumChange from './pages/project/how/predictor/MediumChange';
import HarvestingStrategy from './pages/project/how/predictor/HarvestingStrategy';

// Toolbox pages
import DeepDiveDocument from './pages/toolbox/DeepDive';
import PromotersSilico from './pages/toolbox/PromotersSilico'

import ToolboxTools from './pages/toolbox/Tools';
import ToolboxResources from './pages/toolbox/Resources';
import ToolboxDownloads from './pages/toolbox/Downloads';

import SustainabilityDocument from './pages/project/why/Sustainability';

import LivingLayersDocument from './pages/project/how/Cultivator';
import WhyPlantsSuck from './pages/toolbox/WhyPlantsSuck';
import DuckweedProtocol from './pages/toolbox/predictable_duckweed/DuckweedProtocol';
import TransformationProtocol from './pages/toolbox/programable_duckweed/TransformationProtocol';
import AgrobacteriumProtocol from './pages/toolbox/programable_duckweed/AgrobacteriumProtocol';



// Engagement pages 

import ThreeHParty from './pages/engagement/outreach/ThreeHParty';


// Duckweed Mafia pages
import Partners from './pages/duckweed_mafia/Partners';
import DuckweedSafety from './pages/duckweed_mafia/DuckweedSafety';
import DuckweedMafia from './pages/duckweed_mafia/DuckweedMafia';




function App() {
  return (
    <Router>
      <div className="min-h-screen ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Project Routes */}
          <Route path="/project/what/" element={<ProjectWhat />} />
          <Route path="/project/why/" element={<ProjectWhy />} />
          <Route path="/project/how/" element={<ProjectHow />} />


          {/* How Routes */}
          <Route path="/project/how/cultivator/" element={<LivingLayersDocument />} />

          <Route path="/project/how/taifr/" element={<Taifr />} />
          <Route path="/project/how/promoter-library/" element={<PromoterLibrary />} />
          <Route path="/project/how/promoters-in-silico/" element={<PromotersSilico />} />

          <Route path="/project/how/predictor/limiting-biomass/" element={<LimitingBiomass />} />
          <Route path="/project/how/predictor/medium-change/" element={<MediumChange />} />
          <Route path="/project/how/predictor/harvesting-strategy/" element={<HarvestingStrategy />} />


          

          
          
          
          {/* Toolbox Routes */}
          <Route path="/toolbox/deep-dive-on-duckweed/" element={<DeepDiveDocument />} />
          <Route path="/toolbox/why-plants-suck/" element={<WhyPlantsSuck />} />
          <Route path="/toolbox/tools" element={<ToolboxTools />} />
          <Route path="/toolbox/resources" element={<ToolboxResources />} />
          <Route path="/toolbox/downloads" element={<ToolboxDownloads />} />
          <Route path="/toolbox/predictable-duckweed-protocol/" element={<DuckweedProtocol />} />
          <Route path="/toolbox/programable-duckweed-protocol/" element={<TransformationProtocol />} />
          <Route path="/toolbox/agrobacterium-mediated-transformation-protocol/" element={<AgrobacteriumProtocol />} />

          
          

          <Route path="/engagement/sustainability" element={<SustainabilityDocument />} />
          
          {/* Engagement Routes */}   


          <Route path="/engagement/outreach/3h-party" element={<ThreeHParty />} />
          
          {/* Duckweed Mafia Routes */}
          <Route path="/duckweed-mafia/partners" element={<Partners />} />
          <Route path="/duckweed-mafia/safety" element={<DuckweedSafety />} />
          <Route path="/duckweed-mafia/team" element={<DuckweedMafia/>} />
          
        </Routes>

        <div style={{ marginTop: '5rem' }}>
          <Footer />
        </div>       
      </div>
    </Router>
  );
}

export default App;
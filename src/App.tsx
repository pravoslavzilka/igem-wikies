import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Handbook from './pages/Handbook';

// Project pages
import ProjectWhat from './pages/project/What/What';
import ProjectWhy from './pages/project/Why/index';
import HowLanding from './pages/project/how/HowLanding';

// Project pages - how

import Taifr from './pages/project/how/Taifr';
import TAIFRComponent from './pages/project/how/taifr/TAIFRComponent';
import PromoterLibrary from './pages/project/how/PromoterLibrary';
import RegenerationAssayPoster from './pages/project/how/taifr/RegenerationAssayPoster';

import TaifrMain from './pages/project/how/taifr/TaifrMain';
import TaifrEngineering from './pages/project/how/taifr/TaifrEngineering';

import LimitingBiomass from './pages/project/how/predictor/LimitingBiomass';
import MediumChange from './pages/project/how/predictor/MediumChange';
import HarvestingStrategy from './pages/project/how/predictor/HarvestingStrategy';
import PredictorMain from './pages/project/how/predictor/PredictorMain';

// Toolbox pages
import DeepDiveDocument from './pages/toolbox/DeepDive';
import PromotersSilico from './pages/toolbox/PromotersSilico'
import VacuumInfiltrationTesting from './pages/toolbox/programable_duckweed/VacuumInfiltrationTesting';

import ToolboxTools from './pages/toolbox/Tools';
import ToolboxResources from './pages/toolbox/Resources';
import ToolboxDownloads from './pages/toolbox/Downloads';

import SustainabilityDocument from './pages/project/Why/Sustainability';

import LivingLayersDocument from './pages/project/how/Cultivator';
import WhyPlantsSuck from './pages/toolbox/WhyPlantsSuck';
import DuckweedProtocol from './pages/toolbox/predictable_duckweed/DuckweedProtocol';
import TransformationProtocol from './pages/toolbox/programable_duckweed/TransformationProtocol';
import AgrobacteriumProtocol from './pages/toolbox/programable_duckweed/AgrobacteriumProtocol';

import HumanPractices from "./pages/engagement/human_practices";

// Engagement pages

import ThreeHParty from './pages/engagement/outreach/ThreeHParty';
import Outreach from './pages/engagement/Outreach';
import IgemBrnoCommunity from './pages/engagement/outreach/IgemBrnoCommunity';
import Entrepreneurship from './pages/engagement/entrepreneurship/Entrepreneurship';
import CrowdfundingStory from './pages/engagement/CrowdfundingStory';


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
          <Route path="/project/what/" element={<HowLanding />} />
          <Route path="/project/why/" element={<ProjectWhat />} />
          <Route path="/project/how/" element={<ProjectWhy />} />


          {/* How Routes */}
          <Route path="/project/how/cultivator/" element={<LivingLayersDocument />} />

          <Route path="/engineering" element={<TaifrEngineering />} />

          <Route path="/project/how/taifr/" element={<Taifr />} />
          <Route path="/project/how/taifr/overview" element={<TaifrMain />} />
          <Route path="/project/how/promoters/" element={<PromoterLibrary />} />
          <Route path="/project/how/promoters-in-silico/" element={<PromotersSilico />} />
          <Route path="/project/how/taifr/regeneration-assay-poster/" element={<RegenerationAssayPoster />} />

          <Route path="/project/how/predictor/in-silico-cultivation/" element={<PredictorMain />} />
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
          <Route path="/toolbox/vacuum-infiltration-testing/" element={<VacuumInfiltrationTesting />} />




          <Route path="/engagement/sustainability" element={<SustainabilityDocument />} />

          {/* Engagement Routes */}


          <Route path="/engagement/outreach/3h-party" element={<ThreeHParty />} />
          <Route path="/engagement/outreach" element={<Outreach />} />
          <Route path="/engagement/human-practices" element={<HumanPractices />} />
          <Route path="/engagement/outreach/igem-brno-community" element={<IgemBrnoCommunity />} />
          <Route path="/engagement/entrepreneurship" element={<Entrepreneurship />} />
          <Route path='/engagement/crowdfunding' element={<CrowdfundingStory/>} />

          {/* Duckweed Mafia Routes */}
          <Route path="/duckweed-mafia/partners" element={<Partners />} />
          <Route path="/duckweed-mafia/safety" element={<DuckweedSafety />} />
          <Route path="/duckweed-mafia/team" element={<DuckweedMafia/>} />

        </Routes>

        <div style={{ marginTop: '5rem' }}>
          <Footer />
        </div>
      </div>
      <ScrollToTop />
    </Router>
  );
}

export default App;

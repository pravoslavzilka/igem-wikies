import Hero from '../components/Home_page/Hero';
import FeaturesWidget from '../components/Home_page/FeaturesWidget';
import FadeCard from '../components/Home_page/FadeCard';
import BrazilDeforestationWidget from '../components/Brazil/BrazilDeforestationWidget';
import TaifrComparison from '../components/Home_page/TaifrComparison';  
import CultivatorShow from '../components/Home_page/CultivatorShow';
import ModelShow from '../components/Home_page/ModelShow';
import ToolboxShow from '../components/Home_page/ToolboxShow';
import VideoShow from '../components/Home_page/VideoShow';
import Transition from '../components/Home_page/Transition';


import "@fontsource/urbanist";
import "@fontsource/urbanist/400.css";
import "@fontsource/urbanist/500.css";
import "@fontsource/space-grotesk"; 
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";
import Tools from '../components/Home_page/Tools';





const Home = () => {

 


  return (
    <div className="min-h-screen ">

        <Hero />


      {/* BrazilDeforestationWidget  */}
      
        <BrazilDeforestationWidget />
     

      
      {/* <Transition /> */}

      <Transition />



     

      <FeaturesWidget />

      <div className="mx-4 mt-8  rounded-3xl overflow-hidden">
        <FadeCard />
      </div>

      <TaifrComparison />

      <Tools />


      <CultivatorShow />

      <ModelShow />

      <ToolboxShow />


      <VideoShow />

    </div>
  );
};

export default Home;
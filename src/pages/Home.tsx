import BrazilDeforestationWidget from '../components/BrazilDeforestationWidget';
import VideoComp from '../components/VideoComp';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <BrazilDeforestationWidget />
      <VideoComp />
    </div>
  );
};

export default Home;
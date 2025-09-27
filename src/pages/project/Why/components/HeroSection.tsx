interface HeroSectionProps {
  heroImageUrl?: string | null;
}

const HeroSection = ({ heroImageUrl }: HeroSectionProps) => {
  return (
    <section 
      className="flex flex-col items-center px-10 py-10"
      style={{ width: '1440px', height: '849px', padding: '10px 40px' }}
    >
      <div 
        className="flex flex-col justify-center items-start gap-1"
        style={{ padding: '80px 128px', width: '1360px', height: '349px' }}
      >
        <p 
          className="text-gray-500 mb-1"
          style={{ 
            fontFamily: 'Urbanist, sans-serif',
            fontSize: '18px',
            fontWeight: 600,
            lineHeight: '140%',
            color: 'rgba(27, 27, 27, 0.5)'
          }}
        >
          Why
        </p>
        <h1 
          className="text-gray-900 mb-4 self-stretch"
          style={{ 
            fontFamily: 'Urbanist, sans-serif',
            fontSize: '48px',
            fontWeight: 600,
            lineHeight: '140%',
            color: '#1B1B1B',
            width: '1104px',
            height: '134px'
          }}
        >
          Forgetting Arabidopsis or soybean and bracing ourselves for duckweed!
        </h1>
        <p 
          className="text-gray-700"
          style={{ 
            fontFamily: 'Urbanist, sans-serif',
            fontSize: '16px',
            fontWeight: 400,
            lineHeight: '140%',
            color: 'rgba(27, 27, 27, 0.75)',
            width: '644px',
            height: '22px'
          }}
        >
          The smallest flowering plant on Earth hides a lot of potential - all of it waiting to be unlocked.
        </p>
      </div>

      {/* Hero Image */}
      <div 
        className="rounded-3xl relative overflow-hidden self-stretch"
        style={{ width: '1360px', height: '480px', borderRadius: '24px' }}
      >
        {heroImageUrl ? (
          <img 
            src={heroImageUrl} 
            alt="Duckweed hero image" 
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-green-600"></div>
            <div className="absolute inset-0 opacity-60">
              <div className="w-full h-full bg-repeat opacity-40" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23065f46' opacity='0.1'%3E%3Ccircle cx='15' cy='15' r='3'/%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='23' cy='23' r='2'/%3E%3Ccircle cx='23' cy='7' r='1.5'/%3E%3Ccircle cx='7' cy='23' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '30px 30px'
              }}></div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
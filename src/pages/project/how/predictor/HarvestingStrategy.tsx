

const HarvestingStrategy = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-8 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        Harvesting Strategy Experiments
      </h1>

      {/* Rationale Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Rationale
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          Not only cultivation conditions but also a harvesting strategy should be 
          optimized to ensure smooth duckweed cultivation. That's why we 
          explored different harvesting strategies (with different harvesting 
          frequencies and ratios) to determine which one leads to the maximum 
          amount that should be harvested, and even to a sustainable duckweed 
          culture.
        </p>
      </div>

      {/* Methodology Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Methodology
        </h2>
        
        {/* Cultivation conditions */}
        <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Cultivation conditions
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          To determine the optimal harvesting strategy, we conducted duckweed 
          cultivation experiments under controlled environmental conditions in a 
          climate room. The temperature was kept to 16°C light/darkness 12°C (light 
          intensity of 200 μmol/m²/s).
        </p>

        {/* Two column layout for methodology content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left column */}
          <div>
            {/* Species tested */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Species tested
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              For these experiments, we used 5 clones of duckweed, namely L. minor 
              (5530), L. minor (7950), L. minor (8614), L. gibba (8627), and S. 
              polyrhiza (0162).
            </p>

            {/* Tray surfaces */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Tray surfaces
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              We used small and large trays with cultivation area of 0.064 m² and 
              0.1463 m², respectively.
            </p>

            {/* Harvesting strategies tested */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Harvesting strategies tested
            </h3>
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              We tested 5 different harvesting strategies with harvesting frequency (hf) 
              30% per every three days and harvesting ratio up to 50%, 30%, 40%, 
              and 60%. Therefore, control trays with hf = 0% and hr = 0%, hf = 0% and hr = 
              50% and with hf = 5 days & hr = 50%, were also tested.
            </p>
          </div>

          {/* Right column - Image placeholder */}
          <div className="space-y-6">
            <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center h-64">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-400 rounded-lg mx-auto mb-4"></div>
                <p className="text-gray-600 font-medium" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                  Fig. 1. Weighing our duckweed before 
                  <br />
                  determining the precise 
                  <br />
                  amount that should be harvested.
                </p>
              </div>
            </div>

            <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center h-64">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-400 rounded-lg mx-auto mb-4"></div>
                <p className="text-gray-600 font-medium" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                  Fig 2. Our duckweed cultivation arsenal: 
                  <br />
                  (1) A hand centrifuge, (2) Sieve for 
                  <br />
                  duckweed harvesting, (3) FROGG with 
                  <br />
                  harnessing. (4) Duckweed cultivation tray, 
                  <br />
                  (5) Hygro thermometer/hydrometer, 
                  <br />
                  and (6) A bucket for preparation of 
                  <br />
                  culture medium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Results
        </h2>
        
        <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          First iteration: Finding the fastest growing clone from our collection
        </h3>
        <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          In the beginning of the experiments, we inoculated trays with duckweed 
          so that it optically covered the entire surface of the tray (ca. 90 g fresh 
          weight). After one week of cultivation we determined the actual biomass. We 
          had 4 trays from each of the 5 clones in our collection. Subsequently, we 
          removed duckweed in all trays every three days and harvested 
          approximately 50% of the biomass in two trays and left the rest to determine 
          the actual biomass. The medium change was also done every three 
          days along with harvesting. Before each weighing, it was necessary to 
          remove the residual water from the duckweed. For the determination of the 
          tray we poured through a net where duckweed got caught. Then, the 
          duckweed weighed on the net was hand-centrifuged. Apart from 
          seconds to remove the residual water which could otherwise affect the 
          weight of our sample.
        </p>
      </div>
    </div>
  );
};

export default HarvestingStrategy;
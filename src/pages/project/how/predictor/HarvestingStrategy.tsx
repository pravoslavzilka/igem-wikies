

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
          <span style={{fontWeight: "400"}}>Not only cultivation conditions but also a harvesting strategy should be optimized to ensure smooth duckweed cultivation. That&rsquo;s why we explored different harvesting strategies (with different harvesting frequencies and ratios) to determine which one leads to the maximum biomass yield while maintaining long-term sustainability of duckweed culture. </span>
        </p>
      </div>

      {/* Methodology Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Methodology
        </h2>
        
        {/* Cultivation conditions */}
        

        {/* Two column layout for methodology content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left column */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Cultivation conditions
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          
        
            To determine the optimal harvesting strategy, we conducted duckweed
            cultivation experiments under controlled environmental conditions in a
            greenhouse (temperature of 25°C, 16:8 hour light/dark cycle and light
            intensity of 200 μmol/m<sup>2</sup>/s).
        </p>
            {/* Species tested */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Species tested
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              For these experiments, we used 5 clones of duckweed, namely{" "}
            <i>L. minor</i> (5930), <i>L. minor</i> (5500), <i>L. minor</i> (8623),{" "}
            <i>L. japonica</i> (8627), and <i>S. polyrhiza</i> (0162).
            </p>

            {/* Tray surfaces */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Tray surfaces
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              We used small and large trays with a cultivation area of 0.06435 m
        <sup>2</sup> and 0.14535 m<sup>2</sup>, respectively.
            </p>

            {/* Harvesting strategies tested */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Harvesting strategies tested
            </h3>
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              We tested 5 different harvesting strategies with harvesting frequency
            (hf) once per every three days and harvesting ratio (hr) of 20%, 30%,
            40%, 45%, and 50%, respectively. Harvesting strategy with hf = 4 days &
            hr = 50% and with hf = 5 days & hr = 60% were also tested.
            </p>
          </div>

          {/* Right column - Image placeholder */}
          <div className="space-y-6">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src="https://static.igem.wiki/teams/5642/images/how/predictor/duck-08547-1-min.webp"
              alt="Researcher conducting duckweed experiment"
              className=" h-64 w-full object-cover"
            />
            <div className="p-4 bg-gray-50">
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 1:</strong> Weighting our duckweed bestie for determination of the precise amount that should be harvested.

              </p>
            
          </div>
            </div>

            <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src="https://static.igem.wiki/teams/5642/images/how/predictor/tools-for-harvesting-jpeg.webp"
              alt="Researcher conducting duckweed experiment"
              className=" h-64 w-full object-cover"
            />
            <div className="p-4 bg-gray-50">
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 2:</strong> Our duckweed cultivation arsenal. (1) A hand centrifuge. (2) Sieves for duckweed harvesting. (3) PROBE with multimeter. (4) Duckweed cultivation tray. (5) Ingredients for mixing the cultivation medium. (6) A bucket for preparation of the cultivation medium.


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
            so that it optically covered the entire surface of the tray (such a
            rough starting point is in itself proof that this was only the first
            iteration). We had 4 trays from each of the 5 clones in our collection.
            Subsequently, we monitored duckweed in all trays every three days and
            harvested precisely determined amounts, specifically 20%, 30%, 40% and
            50% of the actual biomass. The medium change was also done every three
            days along with harvesting.
            Before each weighing, it was necessary to remove residual water from the
            duckweed. To do that, the content of the tray was poured through a net
            where duckweed got caught. Then, the duckweed wrapped in this net was
            hand-centrifuged always for 30 seconds to remove the residual water
            which could otherwise affect the accuracy of biomass determination.
        </p>
           



        {/* Results from first iteration */}
        <h3 className="text-xl font-semibold mb-3 mt-12 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Results from the first iteration
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          Based on the first empirical data, we decided on proceeding mainly with{" "}
        <i>L. japonica</i> (8627) in the next experiments, since it was the
        fastest growing species we had and its sufficient frond size hadn’t
        caused problems during harvesting with nets.
        </p>

        {/* Graph placeholder */}
        <div className="bg-gray-100 rounded-lg p-8 mb-4">
          <img src="https://static.igem.wiki/teams/5642/images/how/predictor/graf-final-6.webp" alt="Graph showing comparison between L. minor and L. japonica biomass yields" className="w-full h-auto" />

        </div>
        {/* Caption */}
        <p className="text-sm text-gray-600 text-center italic mb-8" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <strong>Fig.3:</strong> Graph showing comparison between <i>L. minor</i> (5500) and <i>L. japonica</i> (8627) biomass yields in the first iteration of
  harvesting strategy experiments.
        </p>

        {/* Second iteration */}
        <h3 className="text-xl font-semibold mb-3 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Second iteration: Collecting benchmark cultivation data
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left column - text content */}
          <div>
            <p className="text-gray-700 leading-relaxed mb-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              In the next step, the aim of the experiments shifted from “informing”
        our computational model to “challenging” it. Three small cultivation
        trays were inoculated by 30 g of <i>Lemna japonica</i> (8627) in the
        beginning of the experiment, so that initial biomass density was around
        500 g/m<sup>2</sup>. Harvesting was done each 3 days (hf), but the
        harvesting ratio (hr) was different for every tray, specifically 30%,
        40% and 50%.
            </p>

            <h4 className="text-lg font-semibold mb-3 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Results from the second iteration
            </h4>
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              After 15 days of cultivation, the cumulative biomass harvested for trays
        with harvesting ratios 30%, 40% and 50% was 886.0 g/m<sup>2</sup>,
        1047.3 g/m<sup>2</sup>, and 1012.4 g/m<sup>2</sup>, respectively. The
        harvesting strategy with maximum yield was thus that with hf = 3 days &
        hr = 40%.
            </p>

            

            
          </div>

          {/* Right column - image */}
          <div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src="https://static.igem.wiki/teams/5642/images/how/predictor/duck-08507.webp"
              alt="Researcher conducting duckweed experiment"
              className=" h-64 w-full object-cover"
            />
            <div className="p-4 bg-gray-50">
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig.4:</strong> Cultures of <i>Lemna japonica</i> (8627) in trays subjected to different harvesting strategies.


              </p>
            
          </div>
          </div>
                    
          </div>
        </div>

        <h4 className="text-lg font-semibold mb-3 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Third iteration: Aiming for even higher yields
            </h4>
            <p className="text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Based on outputs from our computational model, we started the
        experiments the same way as in the second iteration, but with harvesting
        strategies hf = 3 days &amp; hr = 45%, hf = 4 days &amp; hr = 50% and hf
        = 5 days &amp; hr = 60%.
            </p>
           <h4 className="text-lg font-semibold mb-3 text-gray-800" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Results from the third iteration
            </h4>
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              After 15 days of cultivation, we must stop the cultivation experiment
        since the duckweed biomass left on tray after each harvest was on a
        sharp decline. Thus, the best harvesting strategy based on all of our
        empirical data is hf = 3 days and hr = 40%.
            </p>

        {/* Conclusion box */}
        <div className="bg-gray-100 mt-10 rounded-lg p-6 border-l-4 border-green-500">
          <p className="text-gray-800 font-medium text-center" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            After three iterations, we came up with the best harvesting strategy of hf = 3 and hr = 40% with an 
            average yield of 210 gm⁻² per each harvest.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HarvestingStrategy;


const LimitingBiomass = () => {
    return (
    <div className="max-w-6xl mx-auto p-8 bg-white" style={{ fontFamily: 'Urbanist, sans-serif' }}>
      {/* Header */}
      <h1 className="text-4xl font-bold mb-12 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        Limiting biomass density experiment
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          {/* Rationale Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Rationale
            </h2>
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Limiting biomass density is key parameter for further mathematical 
              modelling of duckweed growth since it directly appears in the logistic 
              growth equation, which is the best known mathematical 
              approximation of population growth. The limiting biomass density is 
              defined as biomass density when the duckweed growth effectively 
              stops, that is when the biomass increments over time become 
              negligible.
            </p>
          </section>

          {/* Methodology Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Methodology
            </h2>
            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              To determine the limiting biomass density of <em>Lemna japonica</em> (8627), 
              experiments on ascertaining the growth curve of this species were 
              conducted in both large and small trays. The large tray had an area 
              of 0.14535 m², and the small tray had an area of 0.06435 m². 
              Temperature in the greenhouse was kept around 25°C and light 
              conditions followed 16:8 hour light/dark cycle XY. Culture medium 
              composition is described below. Both trays were inoculated with 5 g 
              of the duckweed at the start of the experiment. The biomass 
              measurements were taken daily, and the weight data were recorded 
              until no significant increment was observed. This marked the point 
              where duckweed growth significantly slowed down so that it 
              effectively stopped at this "saturation" biomass density.
            </p>
          </section>
        </div>

        {/* Right Column - Image */}
        <div className="lg:ml-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src="https://static.igem.wiki/teams/5642/images/how/predictor/pxl-20250820-164200119.webp"
              alt="Researcher conducting duckweed experiment"
              className="w-full h-auto"
            />
            <div className="p-4 bg-gray-50">
              <p className="text-sm text-gray-600" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 1:</strong> Ondra, caring for duckweed while feeling as 
                on the seashore, measuring the actual biomass of our 
                duckweed densities in each cultivation tray 
              </p>
            </div>
          </div>
        </div>
      </div>



      {/* Results Section - Full Width at Bottom */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-6 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Results
        </h2>
        
        {/* Two sections with graph and text side by side */}
        <div className="space-y-8 mt-6">
          {/* Small Tray Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Small Tray Graph */}
            <div className="bg-gray-50   rounded-lg ">
              
              
              <div className=" rounded">
                <img src="https://static.igem.wiki/teams/5642/images/how/predictor/growth-curve-small-tray.webp" alt="Small Tray Growth Curve" className="w-full h-auto" />
              </div>
              
              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 2:</strong> Experimentally measured growth curve for the duckweed cultivation in the small tray.
              </p>
            </div>

            {/* Small Tray Text */}
            <div className="flex items-center">
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                The experimentally measured growth curve of duckweed small tray can be seen in the graph on the left. Since the fastest growth rate occurred around biomass of 650 g/m², which should be according to the mathematical definition of logistic curve at the halfway between 0 and biomass of "saturation", the value of limiting biomass density was determined to be around 1300 g/m². To determine the intrinsic growth rate (r<sub>0</sub>) from a growth curve, we took natural logarithm of the population size at each time point, plotted this data and fitted a straight line to the points in the exponential phase of growth. The slope of this line represented the intrinsic growth rate (r<sub>0</sub>), which was r<sub>0</sub> ≈ 0.1537 for small tray.
              </p>
            </div>
          </div>





          {/* Large Tray Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-8">
            {/* Large Tray Graph */}
            

            {/* Large Tray Text */}
            <div className="flex items-center">
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                The experimentally measured growth curve of duckweed in large tray can be seen in the graph on the right. Since the fastest growth rate occurred around biomass of 650 g/m², which should be according to the mathematical definition of logistic curve at the halfway between 0 and biomass of "saturation", the value of limiting biomass density was determined to be around 1300 g/m². To determine the intrinsic growth rate (r<sub>0</sub>) from a growth curve, we took natural logarithm of the population size at each time point, plotted this data and fitted a straight line to the points in the exponential phase of growth. The slope of this line represented the intrinsic growth rate (r<sub>0</sub>), which was r<sub>0</sub> ≈ 0.2287 for large tray.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg">
              
              
              <div className="bg-white rounded">
                <img src="https://static.igem.wiki/teams/5642/images/how/predictor/growth-curve-large-tray.webp" alt="Large Tray Growth Curve" className="w-full h-auto" />
              </div>
              
              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 3:</strong> Experimentally measured growth curve for the duckweed cultivation in the large tray.
              </p>
            </div>

          </div>
        </div>
      </section>

        


    </div>
  );

}

export default LimitingBiomass;



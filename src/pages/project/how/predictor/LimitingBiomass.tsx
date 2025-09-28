const LimitingBiomass = () => {
    return (
    <div className="max-w-6xl mx-auto p-8 bg-white text-lg text-justify" style={{ fontFamily: 'Urbanist, sans-serif' }}>
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
            <p>
              <span style={{ fontWeight: 400 }}>
                Limiting biomass density is key parameter for further mathematical
                modelling of duckweed growth since it directly appears in the logistic
                growth equation, which is the best known mathematical
                approximation of population growth. The limiting biomass density is
                defined as biomass density when the duckweed growth effectively
                stops, that is when the biomass increments over time become
                negligible.{" "}
              </span>
            </p>

          </section>

          {/* Methodology Section */}
          <section>
            <h2 className="text-xl font-semibold mb-4 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Methodology
            </h2>
            <p>
              <span style={{ fontWeight: 400 }}>
                To determine the limiting biomass density of
              </span>
              <em>
                <span style={{ fontWeight: 400 }}> Lemna japonica (8627)</span>
              </em>
              <span style={{ fontWeight: 400 }}>
                {" "}experiments on ascertaining the growth curve of this species were
                conducted in both large and small trays. The data reported below
                are the mean values measured in a small and a large tray to ensure
                that the determined growth rate will be independent of the cultivation
                area. The large tray had an area of 0.14535 m
              </span>
              <span style={{ fontWeight: 400 }}>2</span>
              <span style={{ fontWeight: 400 }}>
                , and the small tray had an area of 0.06435 m
              </span>
              <span style={{ fontWeight: 400 }}>2</span>
              <span style={{ fontWeight: 400 }}>
                . Temperature in the greenhouse was kept around 25°C and light
                conditions followed 16:8 hour light/dark cycle with light intensity of 200
                μmol/m
              </span>
              <span style={{ fontWeight: 400 }}>2</span>
              <span style={{ fontWeight: 400 }}>
                /s. Both trays were inoculated with 5 g of the duckweed at the start of the experiment. The
                biomass measurements were taken daily, and the weight data were recorded
                until no significant increment was observed. This marked the point where
                duckweed growth significantly slowed down so that it effectively stopped at
                this "saturation" biomass density.
              </span>
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
                <strong>Fig.1:</strong> Ondra, caring for duckweed while feeling as on the seashore, measuring the actual biomass of our duckweed bestie in each cultivation tray.

              </p>
            </div>
          </div>
           <p className="mt-4">
              <span style={{ fontWeight: 400 }}>
                In the next iteration of the experiment, limiting biomass experiments
                on ascertaining the growth curve of <em>Lemna gibba</em>, <em>Lemna obscura</em>,{" "}
                <em>Lemna valdiviana</em>, <em>Wolffia globosa</em>, and <em>Wolffia hyalina</em> were
                performed in the same way.
              </span>
            </p>
        </div>
      </div>



      {/* Results Section - Full Width at Bottom */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-6 text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Results
        </h2>
        
        {/* Combined results section */}
        <div className="space-y-8 mt-6">
          {/* Main Results Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Graph */}
            <div className="bg-gray-50 rounded-lg">
              <div className="rounded">
                <img src="https://static.igem.wiki/teams/5642/images/how/predictor/graf-final-8.webp" alt="Growth Curve" className="w-full h-auto" />
              </div>
              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig.2:</strong> Experimentally measured growth curve of <em>Lemna japonica</em> (8627), displaying the mean values of biomass measured during experiments in a large and a small tray.
              </p>
            </div>

            {/* Text */}
            <div className="flex items-center">
              <p>
                <span style={{ fontWeight: 400 }}>
                  The experimentally measured growth curve of
                </span>
                <em>
                  <span style={{ fontWeight: 400 }}> Lemna japonica</span>
                </em>
                <span style={{ fontWeight: 400 }}>
                  {" "}(8627) can be seen in the graph on
                  the left. Since the fastest growth rate occurred
                  around biomass of 650 g/m
                </span>
                <span style={{ fontWeight: 400 }}>2</span>
                <span style={{ fontWeight: 400 }}>
                  , which should be
                  according to the mathematical definition of logistic
                  curve at the halfway between 0 and biomass of
                  "saturation", the value of limiting biomass density
                  was determined to be around 1300 g/m
                </span>
                <span style={{ fontWeight: 400 }}>2</span>
                <span style={{ fontWeight: 400 }}>
                  . To
                  determine the effective growth rate (r
                </span>
                <span style={{ fontWeight: 400 }}>0</span>
                <span style={{ fontWeight: 400 }}>
                  ) from a
                  growth curve, we took natural logarithm of the
                  population size at each time point, plotted this data
                  and fitted a straight line to the points in the
                  exponential phase of growth. The slope of this line
                  represented the effective growth rate (r
                </span>
                <span style={{ fontWeight: 400 }}>0</span>
                <span style={{ fontWeight: 400 }}>), which
                  was r
                </span>
                <span style={{ fontWeight: 400 }}>0</span>
                <span style={{ fontWeight: 400 }}>= 0.21 d</span>
                <span style={{ fontWeight: 400 }}>-1</span>
                <span style={{ fontWeight: 400 }}>.</span>
              </p>
            </div>
          </div>

          {/* Additional species results */}
          <div className="mt-12">
            <div className="bg-gray-50 rounded-lg">
              <div className="rounded">
                <img src="https://static.igem.wiki/teams/5642/images/how/predictor/graf-final-9.webp" alt="Multiple Species Growth Curves" className="w-full h-auto" />
              </div>
              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig.3:</strong> Experimentally measured growth curves of <em>Lemna gibba</em>, <em>Lemna obscura</em>, <em>Lemna valdiviana</em>, <em>Wolffia globosa</em>, and <em>Wolffia hyalina</em>. The limiting biomass of <em>Wolffia hyalina</em> and <em>Lemna obscura</em> was explored to be around 1400 g/m<sup>2</sup>, the limiting biomass of <em>Wolffia globosa</em> was around 1500 g/m<sup>2</sup> and the limiting biomass of <em>Lemna valdiviana</em> and <em>Lemna gibba</em> was around 1700 g/m<sup>2</sup>.
              </p>
            </div>
          </div>
        </div>
      </section>

        


    </div>
  );

}

export default LimitingBiomass;
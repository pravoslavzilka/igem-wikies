export default function LimitingBiomassReduced() {

    return (
        <div className="max-w-6xl mx-auto p-8 bg-white text-lg text-justify"
             style={{fontFamily: 'Urbanist, sans-serif'}}>
            {/* Header */}
            <h1 className="text-4xl font-bold mb-12 text-gray-900" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                Limiting biomass density experiment
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <p className="text-justify">
                    The limiting biomass density is defined as the biomass density at which
                    duckweed growth effectively stops, that is, when biomass increments over
                    time become negligible.
                </p>

                {/* Right Column - Image */}
                <div className="lg:ml-8">
                    <div className="bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/how/predictor/pxl-20250820-164200119.webp"
                            alt="Researcher conducting duckweed experiment"
                            className="w-full h-auto"
                        />
                    </div>

                </div>
            </div>
            {/* Methodology Section */}
            <section>
                <h2 className="text-xl font-semibold mb-4 text-gray-900"
                    style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                    Methodology
                </h2>
                <p>
              <span style={{fontWeight: 400}}>
                To determine the limiting biomass density of
              </span>
                    <em>
                        <span style={{fontWeight: 400}}> Lemna japonica (8627)</span>
                    </em>
                    <span style={{fontWeight: 400}}>
                {" "}experiments on ascertaining the growth curve of this species were
                conducted in both large and small trays. The data reported below
                are the mean values measured in a small and a large tray to ensure
                that the determined growth rate will be independent of the cultivation
                area. The large tray had an area of 0.14535 m
              </span>
                    <span style={{fontWeight: 400}}>2</span>
                    <span style={{fontWeight: 400}}>
                , and the small tray had an area of 0.06435 m
              </span>
                    <span style={{fontWeight: 400}}>2</span>
                    <span style={{fontWeight: 400}}>
                . Temperature in the greenhouse was kept around 25°C and light
                conditions followed 16:8 hour light/dark cycle with light intensity of 200
                μmol/m
              </span>
                    <span style={{fontWeight: 400}}>2</span>
                    <span style={{fontWeight: 400}}>
                /s. Both trays were inoculated with 5 g of the duckweed at the start of the experiment. The
                biomass measurements were taken daily, and the weight data were recorded
                until no significant increment was observed. This marked the point where
                duckweed growth significantly slowed down so that it effectively stopped at
                this "saturation" biomass density.
              </span>
                </p>


            </section>


            {/* Results Section - Full Width at Bottom */}
            <section className="mt-12">
                <h2 className="text-xl font-semibold mb-6 text-gray-900"
                    style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                    Results
                </h2>

                {/* Combined results section */}
                <div className="space-y-8 max-w-2xl mx-auto">
                    {/* Main Results Section */}
                    <div className="bg-gray-50 max-w-2xl mx-auto rounded-lg shadow-sm">
                        {/* Image */}
                        <div className="rounded overflow-hidden">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/how/predictor/graf-final-medium-change.webp"
                                alt="Medium Change Graph"
                                className="w-full h-auto rounded"
                            />
                        </div>

                        {/* Caption */}
                        <p className="text-sm text-gray-700 text-justify font-[Urbanist,sans-serif] leading-relaxed p-4">
                            <strong>Fig. 2.</strong> Experimentally measured growth curve of{" "}
                            <em>Lemna japonica</em> (8627), showing the mean biomass values obtained during experiments
                            conducted in both large and small trays. The curve demonstrates that the fastest growth
                            occurred
                            at a biomass density of approximately <strong>650 g/m²</strong>, which, according to the
                            mathematical definition of a logistic growth curve, represents the midpoint between zero and
                            the
                            saturation biomass. Therefore, the <strong>limiting biomass density</strong> was determined
                            to be
                            around <strong>1300 g/m²</strong>. To determine the{" "}
                            <strong>effective growth rate (r₀)</strong> from the growth curve, we calculated the natural
                            logarithm of the population size at each time point, plotted these values, and fitted a
                            straight
                            line to the points corresponding to the exponential phase of growth. The slope of this line
                            represented the effective growth rate, which was <strong>r₀ = 0.21 d⁻¹</strong>.
                        </p>
                    </div>


                    {/* Additional species results */}
                    <div className="mt-12 max-w-2xl mx-auto">
                        <div className="bg-gray-50 rounded-lg">
                            <div className="rounded">
                                <img src="https://static.igem.wiki/teams/5642/images/how/predictor/graf-final-9.webp"
                                     alt="Multiple Species Growth Curves" className="w-full h-auto"/>
                            </div>
                            <p className="text-sm text-gray-600 mt-3 p-4" style={{fontFamily: 'Urbanist, sans-serif'}}>
                                <strong>Figure 3:</strong> Experimentally measured growth curves of <em>Lemna
                                gibba</em>, <em>Lemna obscura</em>, <em>Lemna valdiviana</em>, <em>Wolffia globosa</em>,
                                and <em>Wolffia hyalina</em>. The limiting biomass of <em>Wolffia hyalina</em> and <em>Lemna
                                obscura</em> was explored to be around 1400 g/m<sup>2</sup>, the limiting biomass
                                of <em>Wolffia globosa</em> was around 1500 g/m<sup>2</sup> and the limiting biomass
                                of <em>Lemna valdiviana</em> and <em>Lemna gibba</em> was around 1700 g/m<sup>2</sup>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

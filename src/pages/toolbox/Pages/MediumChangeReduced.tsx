const MediumChangeReduced = () => {

    return (
        <div className="justify-center my-10">

            <div className="max-w-6xl mx-auto p-8 bg-white text-lg text-justify space-y-6"
                 style={{fontFamily: 'Urbanist, sans-serif'}}>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Left Column */}
                    <div className="space-y-8">


                        {/* Methodology Section */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 mb-4"
                                style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                                Methodology
                            </h2>
                            <p>
              <span style={{fontWeight: 400}}>
                To determine the minimum frequency of medium change, two types of
                experiments were conducted simultaneously: a control experiment with an
                medium change frequency of every 2 days (where stress caused by nutrient
                depletion should be negligible) and another without any medium change, which
                was performed in two replicates. Each of the 3 culture trays (with a
                cultivation area of 0.06435 m
              </span>
                                <span style={{fontWeight: 400}}>2</span>
                                <span style={{fontWeight: 400}}>) was inoculated by 20 g of </span>
                                <em>
                                    <span style={{fontWeight: 400}}>Lemna japonica (8627)</span>
                                </em>
                                <span style={{fontWeight: 400}}> or </span>
                                <em>
                                    <span style={{fontWeight: 400}}>Spirodela polyrhiza (0162)</span>
                                </em>
                                <span style={{fontWeight: 400}}>
                {" "}
                                    and the biomass in them was measured every 2 days. The minimum frequency of
                medium change necessary to ensure the fastest growth rate was determined as
                a point where the measured biomass in the experimental group started to lag
                behind the measured biomass in the control group.
              </span>
                            </p>

                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">

                        {/* Scientist Image Placeholder */}
                        <div className="bg-gray-50   rounded-lg ">
                            <div className=" rounded">
                                <img src="https://static.igem.wiki/teams/5642/images/how/predictor/duck-08557-min.webp"
                                     alt="Duckweed Cultivation" className="w-full h-auto rounded"/>
                            </div>
                            
                        </div>

                    </div>
                </div>

            </div>


            {/* Graph Placeholder */}
            <div className="bg-gray-50 mx-auto max-w-2xl rounded-lg justify-center">
                <div className=" rounded">
                    <img src="https://static.igem.wiki/teams/5642/images/how/predictor/graf-final-medium-change.webp"
                         alt="Medium Change Graph" className="w-full h-auto rounded"/>
                </div>
                <p className="text-base text-gray-600 mt-3 p-4 text-justify" style={{fontFamily: 'Urbanist, sans-serif'}}>
                    <p><strong>Fig 17. </strong>The graph shows biomass growth over time for experimental (mean values from two replicates) and control groups of <em>Lemna japonica </em>(8627) and <em>Spirodela polyrhiza</em> (0162). Based on the data, the optimal medium change frequency - ensuring maximal growth rate with minimal maintenance - is every 6 days, as biomass yields of the control and experimental groups begin to diverge noticeably at this point.
                </p>

                </p>
            </div>
        </div>
    );
}

export default MediumChangeReduced;
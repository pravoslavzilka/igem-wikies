

const MediumChange = () => {
    const cultureData = [
    { compound: 'NH₄Cl', amount: '6.04' },
    { compound: 'KNO₃', amount: '103.83' },
    { compound: 'KH₂PO₄', amount: '32.66' },
    { compound: 'MgSO₄·7H₂O', amount: '98.59' },
    { compound: 'CaCl₂·2H₂O', amount: '75.56' },
    { compound: 'Fe-EDTA', amount: '6.61' },
    { compound: 'H₃BO₃', amount: '2.84' },
    { compound: 'MnSO₄·H₂O', amount: '1.54' },
    { compound: 'ZnSO₄·7H₂O', amount: '0.22' },
    { compound: 'CuSO₄·5H₂O', amount: '0.08' },
    { compound: 'Na₂MoO₄·2H₂O', amount: '0.12' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-900 mb-12 " style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        Cultivation Medium Change Experiment
      </h1>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column */}
        <div className="space-y-8">
          
          {/* Rationale Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Rationale
            </h2>
            <p className="text-gray-700 leading-relaxed text-md" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              The inevitable part of successful duckweed cultivation is regular cultivation medium change. It is necessary due to nutrient depletion during the growth of our duckweed superhero. This nutrient uptake creates deviation from the optimal environmental conditions that we need to monitor and act accordingly. The importance of pinpointing the minimum frequency of medium change is further underscored by understandably high demand for minimal necessary maintenance needs, so that energy, resources and labour are used effectively.

            </p>
          </div>

          {/* Methodology Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Methodology
            </h2>
            <p className="text-gray-700 leading-relaxed text-md" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              To determine the minimum frequency of medium change, two types of experiments were conducted simultaneously: a control experiment with an medium change frequency of every 2 days (where stress caused by nutrient depletion should be negligible) and another without any medium change, which was performed in two replicates. Each of the 3 culture trays (with a cultivation area of 0.06435 m2) was inoculated by 20 g of <em>Lemna japonica (8627)</em> or <em>S. polyrhiza (0162)</em> and the biomass in them was measured every 2 days. The minimum frequency of medium change necessary to ensure the fastest growth rate was determined as a point where the measured biomass in the experimental group started to lag behind the measured biomass in the control group.

            </p>
          </div>

          {/* Graph Placeholder */}
          <div className="bg-gray-50   rounded-lg ">
              <div className=" rounded">
                <img src="https://static.igem.wiki/teams/5642/images/how/predictor/medium-change-graph.webp" alt="Medium Change Graph" className="w-full h-auto rounded" />
              </div>
              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 2:</strong> Graph showing biomass growth over time for experimental and control groups.
              </p>
            </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          
          {/* Scientist Image Placeholder */}
          <div className="bg-gray-50   rounded-lg ">
              <div className=" rounded">
                <img src="https://static.igem.wiki/teams/5642/images/how/predictor/duck-08557-min.webp" alt="Duckweed Cultivation" className="w-full h-auto rounded" />
              </div>
              <p className="text-sm text-gray-600 mt-3 p-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                <strong>Fig 1:</strong> Marko, one of our cultivation hustlers, undergoing the tedious hustle of medium exchange:D
              </p>
            </div>

          {/* Culture Medium Composition Table */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Culture medium composition
            </h3>
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="w-full">
                <thead className="bg-green-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-md font-semibold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Compound
                    </th>
                    <th className="px-4 py-3 text-left text-md font-semibold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Amount (mg/L)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cultureData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 text-md text-gray-900" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                        {item.compound}
                      </td>
                      <td className="px-4 py-3 text-md text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                        {item.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Results Text */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Results
            </h2>
            <p className="text-gray-700 leading-relaxed text-md" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Based on the data shown in the graph, it was determined that the optimal medium change frequency, that is frequency ensuring the maximal growth rate but at the same time the minimal necessary maintenance needs, is every 6 days, since at this point biomass yields of the control group and experimental groups start to deviate noticeably.
            </p>
          </div>
        </div>
      </div>
    </div>
  );


}

export default MediumChange;    
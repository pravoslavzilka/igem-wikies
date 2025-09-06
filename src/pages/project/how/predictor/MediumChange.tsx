

const MediumChange = () => {
    const cultureData = [
    { compound: 'NH4Cl', amount: '0.04' },
    { compound: 'KNO3', amount: '103.03' },
    { compound: 'K2HPO4', amount: '25.0' },
    { compound: 'MgSO4·7H2O', amount: '88.50' },
    { compound: 'CaCl2·2H2O', amount: '75.50' },
    { compound: 'Fe-EDTA', amount: '6.01' },
    { compound: 'H3BO3', amount: '2.84' },
    { compound: 'MnSO4·H2O', amount: '1.54' },
    { compound: 'ZnSO4·7H2O', amount: '0.22' },
    { compound: 'CuSO4·5H2O', amount: '0.08' },
    { compound: 'Na2MoO4·2H2O', amount: '0.12' }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white">
      {/* Header */}
      <h1 className="text-4xl font-bold text-gray-900 mb-8 " style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
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
            <p className="text-gray-700 leading-relaxed text-sm" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              The inevitable part of successful duckweed cultivation is regular 
              cultivation medium change. It is necessary due to nutrient depletion 
              during the growth of our duckweed cultures. The nutrient uptake 
              increases over time as the biomass increases and there is also a 
              need to monitor and act accordingly. The importance of pinpointing the 
              minimum frequency of medium change is further underscored by 
              understanding high demand for minimal necessary maintenance 
              needs, so that energy, resources and labour are used effectively.
            </p>
          </div>

          {/* Methodology Section */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Methodology
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              To determine the minimum frequency of medium change, two types of 
              experiments were conducted simultaneously: a control experimental with 
              fresh medium every day (so that medium nutrient depletion or any 
              nutrient depletion should be negligible) and another without any 
              medium change, which was performed in two replicates. Each of the 3 
              culture trays (with a cultivation area of 0.0544 m²) was inoculated by 
              30 g of Lemna gibotossi (#527) or 5.4kg/ha (0.1kg/L) at the biomass 
              density. Biomass was weighed every 2 days to study of 
              medium change necessary to ensure the fastest growth rate. It was 
              conducted as a point where the measured biomass in the 
              experimental group started to lag behind the measured biomass in the 
              control group.
            </p>
          </div>

          {/* Graph Placeholder */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Results
            </h2>
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <div className="text-gray-400 text-lg mb-2">📊</div>
              <p className="text-gray-500 text-sm" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                Graph Placeholder
              </p>
              <p className="text-gray-400 text-xs mt-1" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                Biomass growth over time for experimental and control groups
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          
          {/* Scientist Image Placeholder */}
          <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 text-center">
            <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center mb-4">
              <div className="text-gray-400 text-4xl">👨‍🔬</div>
            </div>
            <p className="text-gray-600 text-sm" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Fig 1: Metric unit of our cultivation buckets, 
              undergoing the investigation of medium 
              cultivation change.
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
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Compound
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      Amount (mg/L)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cultureData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 text-sm text-gray-900" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                        {item.compound}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>
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
            <p className="text-gray-700 leading-relaxed text-sm" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Based on the data shown in the graph, it was determined that the optimal medium change frequency that is ensuring the maximal growth rate but at the same time the maintenance needs. Every day is ensuring the fastest growth, so not the maximal biomass yields of the control group and experimental groups start to deviate noticeably.
            </p>
          </div>
        </div>
      </div>
    </div>
  );


}

export default MediumChange;    
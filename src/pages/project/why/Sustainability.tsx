import React from 'react';
import { Link } from 'react-router-dom';

const SustainabilityDocument = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white font-sans" style={{ fontFamily: "Urbanist, sans-serif" }}>
      {/* Header */}
      <div className=" mb-20  ">
        <h1 className="text-4xl font-bold  mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Sustainability</h1>
      </div>

      {/* Introduction */}
      <div className="mb-8 flex flex-col md:flex-row md:items-start md:justify-between">
  <div className="md:w-1/2">
    <p className="text-justify leading-relaxed text-gray-800 mb-4">
      The <b>Sustainable Development Goals (SDGs)</b> are a set of <b>17 global objectives</b> established by the United Nations in 2015 as part of the 2030 Agenda for Sustainable Development. They aim to create a more sustainable, equitable, and peaceful world, focusing on issues like poverty, inequality, climate change, environmental degradation and responsible resource management [1].
    </p>
    <p className="text-justify leading-relaxed text-gray-800 mb-4">
      The concepts of circular economy and sustainable agricultural practices have been at the very core of our project since its inception. As a result, our work aligns closely with several Sustainable Development Goals.
    </p>
  </div>
  <div className="md:w-1/2 flex flex-col gap-2 mt-4 md:mt-0 justify-center items-center m-10">
    <div className="flex flex-row gap-4">
      <img src="https://static.igem.wiki/teams/5642/images/engagement/sustainability/e-sdg-logo-un-emblem-square-print.webp" alt="SDG Main" className="w-20 h-20 md:w-36 md:h-36 object-contain" />
      <img src="https://static.igem.wiki/teams/5642/images/engagement/sustainability/e-print-02.webp" alt="SDG 2" className="w-20 h-20 md:w-36 md:h-36 object-contain" />
      <img src="https://static.igem.wiki/teams/5642/images/engagement/sustainability/e-print-06.webp" alt="SDG 6" className="w-20 h-20 md:w-36 md:h-36 object-contain" />
    </div>
    <div className="flex flex-row gap-4">
      <img src="https://static.igem.wiki/teams/5642/images/engagement/sustainability/e-print-09.webp" alt="SDG 9"  className="w-20 h-20 md:w-36 md:h-36 object-contain" />
      <img src="https://static.igem.wiki/teams/5642/images/engagement/sustainability/e-print-12.webp" alt="SDG 12" className="w-20 h-20 md:w-36 md:h-36 object-contain" />
      <img src="https://static.igem.wiki/teams/5642/images/engagement/sustainability/e-print-13.webp" alt="SDG 13" className="w-20 h-20 md:w-36 md:h-36 object-contain" />
    </div>
  </div>
</div>

      {/* Main flex layout for image and SDGs */}
      <div className="flex flex-row items-start min-h-[calc(100vh-4rem)]">
        {/* Main SDG content */}
        <div className="flex-1 min-w-0"> {/* add min-w-0 to prevent overflow */}
          {/* SDG 2: Zero Hunger */}
          <div className="mb-6 bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 w-full" style={{ borderLeftColor: "#DDA63A" }}> {/* add w-full */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 border rounded-md text-sm font-medium" style={{ backgroundColor: "#FFF6E0", color: "#DDA63A", borderColor: "#DDA63A" }}>
                  SDG 2
                </span>
                <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Zero Hunger</h2>
              </div>
              <p className="text-justify leading-relaxed text-gray-800 mb-4">
                The overarching objective of SDG 2 is to globally ensure food security, enhance the nutritional value of food, and promote sustainable agriculture. A major challenge in achieving this goal is ensuring sufficient protein intake. Valuable sources of protein are animal-based products, accounting for approximately 41% of total dietary protein intake globally and 60% in Europe [2]. However, producing animal protein requires a significantly larger amount of plant protein, coming mainly from soybean meal. Soybeans are often grown unsustainably on land once covered with tropical rainforests and savannahs, leading to serious soil degradation and great greenhouse gas emissions [3]. <strong>NitroDuck</strong> could become part of the solution.
              </p>
              <p className="text-justify leading-relaxed text-gray-800">
                Duckweed, a protein-rich animal feed alternative, is sustainably grown in a vertical cultivation system directly on the livestock farm. It provides an affordable and locally available feed source for both small- and large-scale farmers, owing to its easily scalable production (in line with Target 2.3). The cultivation system prevents nitrogenous substances from ever reaching the soil, thereby significantly reducing pollution. Its vertical design also minimizes the need for agricultural land, contributing to the conservation of natural ecosystems. Moreover, duckweed was shown to be a resilient crop capable to improve food security even under climate extremes [4]. All of these project contributions are in direct alignment with Target 2.4 of SDG 2.
              </p>
            </div>
          </div>

          {/* SDG 6: Clean Water and Sanitation */}
          <div className="mb-6 bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 w-full" style={{ borderLeftColor: "#26BDE2" }}> {/* add w-full */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 border rounded-md text-sm font-medium" style={{ backgroundColor: "#E6F8FC", color: "#26BDE2", borderColor: "#26BDE2" }} >
                  SDG 6
                </span>
                <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Clean Water and Sanitation</h2>
              </div>
              <p className="text-justify leading-relaxed text-gray-800 mb-4">
                Agricultural runoff, especially from livestock farming, is a major cause of nutrient pollution of waters, leading to eutrophication, loss of biodiversity and ecosystem damage [5]. Duckweed, known for its high nutrient absorption capacity [6], can remove excess nitrogenous compounds from wastewater while producing a weighty biomass for animal feed. This method of nitrogen recycling can prevent contamination of water bodies and the development of algal blooms, aligning with Target 6.3. As these aspects strongly contribute to the devastation of aquatic ecosystems, such as the creation of dead zones, our project indirectly supports Target 6.6 as well.
              </p>
              <p className="text-justify leading-relaxed text-gray-800 mb-4">
                Additionally, traditional feed crops require extensive irrigation. In contrast, our controlled vertical duckweed cultivation system, aligned with Target 6.4, maximizes water-use efficiency with minimal water loss.
              </p>
              <p className="text-justify leading-relaxed text-gray-800">
                Finally, <strong>NitroDuck</strong> supports Target 6.5 by integrating agriculture, water conservation, and pollution control, promoting a more holistic approach to water management.
              </p>
            </div>
          </div>

          {/* SDG 9: Industry, Innovation, and Infrastructure */}
          <div className="mb-6 bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 w-full" style={{ borderLeftColor: "#FD6925" }}> {/* add w-full */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 border rounded-md text-sm font-medium" style={{ backgroundColor: "#FFF2E7", color: "#FD6925", borderColor: "#FD6925" }} >
                  SDG 9
                </span>
                <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Space Grotesk, sans-serif" }} >Industry, Innovation, and Infrastructure</h2>
              </div>
              <p className="text-justify leading-relaxed text-gray-800">
                The main focus of SDG 9 is promoting sustainable industrialization, building resilient infrastructure, and fostering innovation. <strong>NitroDuck</strong> integrates the power of innovation in synthetic plant biology with advanced technology in the form of a modular fully automated vertical cultivation system equipped with a predictive model optimising the duckweed harvest timing. This results in a cutting-edge precision agriculture system that is not only sustainable, resource-efficient and climate-resilient but also universally accessible and affordable, fully supporting the objectives of SDG 9 Targets 9.1 and 9.4.
              </p>
            </div>
          </div>

          {/* SDG 12: Responsible Consumption and Production */}
          <div className="mb-6 bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 w-full" style={{ borderLeftColor: "#BF8B2E" }}> {/* add w-full */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 border rounded-md text-sm font-medium" style={{ backgroundColor: "#F9F5E7", color: "#BF8B2E", borderColor: "#BF8B2E" }} >
                  SDG 12
                </span>
                <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Responsible Consumption and Production</h2>
              </div>
              <p className="text-justify leading-relaxed text-gray-800 mb-4">
                The circular economy, lying at the core of SDG 12, aims to create closed-loop product systems in which resources are continuously reused, recycled, and repurposed, thereby minimising the environmental burden of waste [7]. This model likewise underpins the <strong>NitroDuck</strong> project, which targets ammonium-rich liquid manure, a waste stream that, under conventional management practices, represents a significant source of nitrogen pollution in aquatic ecosystems. As an alternative, we introduced the use of liquid manure as a nutrient source for growing duckweed. This not only reduces adverse impact on environment (aligning with Target 12.4), but more importantly, valorises waste by converting it into a resource suitable for use as livestock feed which is consistent with Target 12.5. In addition, our duckweed cultivation system ensures efficient land use through its vertical design, which occupies only a small area, and optimises water use through an incorporated circulation system, both aligning with the Target 12.2.
              </p>
              <p className="text-justify leading-relaxed text-gray-800">
                Finally, through outreach and educational activities of iGEM Brno team, we raise awareness of more sustainable agriculture practices and promote innovation in nutrient recycling and feed production, supporting also Target 12.8.
              </p>
            </div>
          </div>

          {/* SDG 13: Climate Action */}
          <div className="mb-8 bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 w-full" style={{ borderLeftColor: "#3F7E44" }}> {/* add w-full */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 border rounded-md text-sm font-medium" style={{ backgroundColor: "#E6F4EC", color: "#3F7E44", borderColor: "#3F7E44" }} >
                  SDG 13
                </span>
                <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Climate Action</h2>
              </div>
              <p className="text-justify leading-relaxed text-gray-800 mb-4">
                Soybean meal production is closely linked to climate change, primarily as a result of substantial greenhouse gas emissions generated throughout its entire lifecycle. Most of them can be attributed to land-use change, particularly deforestation, which in turn leads to releases of CO<sub>2</sub> due to soil disturbance. Additional sources include N<sub>2</sub>O emissions from soil, fertiliser manufacturing, and the use of diesel in agricultural machinery and transportation [8]. In contrast, cultivation of the duckweed takes place in cultivation systems directly on livestock farms, without the need for land-use change, fertilisers or soil degradation. However, <strong>NitroDuck</strong> offers more than just a reduced carbon footprint. It also represents a <strong>climate-resilient agricultural approach</strong>, thanks to its minimal water requirements achieved through a recirculating system and the natural adaptability of duckweed to a wide range of climatic conditions. Duckweed cultivation is therefore not threatened by droughts or temperature extremes, thus fulfilling Target 13.1.
              </p>
              <p className="text-justify leading-relaxed text-gray-800">
                Additionally, through educational outreach, <strong>NitroDuck</strong> contributes to Target 13.3 by raising awareness of the climate impacts of livestock feed, nutrient cycling, and sustainable agricultural practices.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4" style={{ fontFamily: "Space Grotesk, sans-serif" }}>References</h3>
        <div className="space-y-3 text-sm text-gray-700">
          <p className="leading-relaxed">
            [1] United Nations, Department of Economic and Social Affairs Sustainable Development, 'THE 17 GOALS | Sustainable Development'. Accessed: May 29, 2025. [Online]. Available: <Link className='text-blue-500 hover:underline' target='_blank' to="https://sdgs.un.org/goals">https://sdgs.un.org/goals</Link>
          </p>
          <p className="leading-relaxed">
            [2] 'Per capita sources of protein', Our World in Data. Accessed: Jun. 01, 2025. [Online]. Available: <Link className='text-blue-500 hover:underline' target='_blank' to="https://ourworldindata.org/grapher/per-capita-sources-of-protein">https://ourworldindata.org/grapher/per-capita-sources-of-protein</Link>
          </p>
          <p className="leading-relaxed">
            [3] World Wide Fund for Nature, 'Soy'. Accessed: Jun. 04, 2025. [Online]. Available: <Link className='text-blue-500 hover:underline' target='_blank' to="https://wwf.panda.org/discover/our_focus/food_practice/sustainable_production/soy/">https://wwf.panda.org/discover/our_focus/food_practice/sustainable_production/soy/</Link>
          </p>
          <p className="leading-relaxed">
            [4] P. V. Femeena and R. A. Brennan, 'Lemnaceae as a resilient crop to improve food security under climate extremes: global warming and post-catastrophic cooling scenarios', Agric & Food Secur, vol. 14, no. 1, p. 8, May 2025, doi: 10.1186/s40066-025-00527-2.
          </p>
          <p className="leading-relaxed">
            [5] European Environmental Agency, 'Cross-cutting story 4: Nutrients', European Environment Agency. Accessed: Jun. 01, 2025. [Online]. Available: <Link className='text-blue-500 hover:underline' target='_blank' to="https://www.eea.europa.eu/publications/zero-pollution/cross-cutting-stories/nutrients">https://www.eea.europa.eu/publications/zero-pollution/cross-cutting-stories/nutrients</Link>
          </p>
          <p className="leading-relaxed">
            [6] J. Xu and G. Shen, 'Growing duckweed in swine wastewater for nutrient recovery and biomass production', Bioresource Technology, vol. 102, no. 2, pp. 848–853, Jan. 2011, doi: 10.1016/j.biortech.2010.09.003.
          </p>
          <p className="leading-relaxed">
            [7] J. Kirchherr, D. Reike, and M. Hekkert, 'Conceptualizing the circular economy: An analysis of 114 definitions', Resources, Conservation and Recycling, vol. 127, pp. 221–232, Dec. 2017, doi: 10.1016/j.resconrec.2017.09.005.
          </p>
          <p className="leading-relaxed">
            [8] R. Parajuli, Q. Langford, D. Tong, E. Moberg, and G. Thoma, 'Measuring and Mitigating GHGs: Soy | Publications | WWF', World Wildlife Fund. Accessed: Jun. 05, 2025. [Online]. Available: <Link className='text-blue-500 hover:underline' target='_blank' to="https://www.worldwildlife.org/publications/measuring-and-mitigating-ghgs-soy">https://www.worldwildlife.org/publications/measuring-and-mitigating-ghgs-soy</Link>
          </p>
        </div>
      </div>

        </div>
        {/* Vertical image column on the right */}
        <div className="hidden md:flex flex-col items-center ml-8 mt-2 h-full">
          <img
            src="https://static.igem.wiki/teams/5642/images/engagement/sustainability/duckweed-stripe-v2.webp"
            alt="Duckweed Vertical"
            className="w-40 h-full  "
            style={{ minWidth: '10rem' }}
          />
        </div>
      </div>

      
    </div>
  );
};

export default SustainabilityDocument;
import React, { useState } from 'react';
import "@fontsource/space-grotesk";

const ProjectWhy = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const applications = [
    {
      id: 1,
      icon: "🌱",
      title: "Novel Protein Crop",
      description: "Duckweeds, especially Wolffia globosa, have been used traditionally as food in Southeast Asia and are now gaining interest globally for their nutritional potential. With as much protein as soybeans, full amino acid profile, and a biomass doubling time of just 48 hours, duckweed could be a novel source of protein for animal feed or even human consumption. Nutrient analyses across all five genera confirm alignment with WHO recommendations. Duckweed is also used as feed for livestock and fish, often surpassing corn in protein content. Though pricing limits widespread livestock use, it holds strong potential in premium pet food and functional foods."
    },
    {
      id: 2,
      icon: "🔬",
      title: "Phytoremediation Chassis",
      description: "Duckweeds can remove heavy metals, pharmaceutical residues and nutrients like nitrates and phosphates from polluted water. Duckweed are also easy to harvest - a key advantage. Once the contaminants are taken up, the plants can be collected and processed, enabling the safe removal of harmful substances from the environment. Adding to their value is the fact that duckweeds thrive under a wide range of conditions: tolerating pH values from 4 to 9 (), temperatures from 5°C to 38°C (), and adapting to environments ranging from low light to full sunlight (). Therefore, their phytoremediation capabilities are not limited to a narrow set of conditions and can be deployed broadly."
    },
    {
      id: 3,
      icon: "🏭",
      title: "Recombinant Protein Factory",
      description: "Bacteria are the workhorse of bioproduction - until they need to create molecules with complex post-translational modifications (). For that, either yeast or Chinese hamster ovary (CHO) cells are used (). What truly sets plants apart in recombinant protein production is their scalability. You can grow millions of plants in fields, with minimal cost compared to sterile bioreactors (). Even better: if you're expressing those proteins in duckweed, you can fit up to 900 m2 of surface area into a single large shipping container - resulting in hundreds of millions of plants on your ground floor. Plants with almost no gene silencing (), allowing for high-level protein overexpression. However, the drawback is plant glycosylation – it is not identical to mammalian glycosylation ()..."
      
      },
    {
      id: 4,
      icon: "📊",
      title: "Plant Monocot Model Organism",
      description: "Most plant scientists currently work with Arabidopsis or tobacco as model organisms (). However, since both are dicots and many staple crops are monocots, not all discoveries in these two species are directly transferable to agricultural crops (). Duckweeds, being monocots, offer a promising alternative. As the smallest flowering plants (), they reproduce primarily asexually (), exhibit unique gene-silencing patterns (), and grow extremely fast, allowing experiments to be conducted 5 to 30 times faster than with traditional model plants, depending on the comparison. On the other hand, duckweed unique traits may both illuminate fundamental plant processes and pose challenges when translating findings to other crops."
      }
  ];

  const currentApplications = [
    {
      title: "Food Industry",
      description: "Early efforts are already underway. Startups like GreenOnyx (), PlantibleFoods (), microTERRA (), and LemnaPRO () are pioneers in duckweed cultivation for human use. With superior vegan greens and proteins that have egg-like properties, duckweed-based foods are slowly making their way into gastronomy! Some duckweed are approved for human consumption - recognized as GRAS in the USA and authorized as a novel food in the EU for use in protein-rich food products." },
    {
      title: "Phytoremediation",
      description: "Lemna minor has been shown to remove over 85% of cadmium from contaminated water by accumulating the metal in its roots (). It also effectively removed more than 70% of ibuprofen from water through passive uptake (). Lemna gibba demonstrated the ability to uptake and tolerate glyphosate, a widely used herbicide (). Startups like Fyto () are using duckweed to convert cow manure into protein-rich biomass, which is then fed back to the cows directly on the farm."

      
      },
    {
      title: "Biomanufacturing",
      description: "Lemna punctata has been engineered to express and secrete aprotinin, a protease inhibitor, which was successfully purified using immunoaffinity chromatography (). Antigens against porcine epidemic diarrhoea virus and tuberculosis have also been expressed in duckweed (). Additionally, studies have demonstrated the successful expression of avian influenza virus H5N1 antigens in Lemna minor (). Companies like AlgenTech and Phylloceuticals claim they are successfully producing growth factors and antigens in duckweed species ()." 
    },
    {
      title: "Basic Research",
      description: "In the past five years, duckweed-oriented research has seen a significant surge, with over 700 peer-reviewed articles published. Five fully assembled genomes have been completed, representing three genera (Spirodela, Lemna, and Wolffia). Transcriptomic data are available for most sequenced species, often covering multiple tissues or stress conditions. Germplasm collections - such as those at the Rutgers Duckweed Stock Cooperative () and IPK Gatersleben () - preserve a wide diversity of clones across species."
    
    }
  ];

  const companies = [
    "GreenOnyx", "PlantibleFoods", "microTERRA", "LemnaPRO", 
    "Fyto", "AlgenTech", "Phylloceuticals"
  ];

  const stats = [
    { number: "700+", label: "Research Papers\n(Past 5 Years)" },
    { number: "5", label: "Fully Assembled\nGenomes" },
    { number: "3", label: "Genera\nSequenced" },
    { number: "48hr", label: "Biomass Doubling\nTime" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-6">Forgetting Arabidopsis or Soybean?</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            It's time to embrace duckweed as the next frontier in plant biotechnology. With unprecedented growth rates, nutritional density, and versatile applications, duckweed represents a paradigm shift in sustainable agriculture and biomanufacturing.
          </p>
        </div>
      </div>

      {/* Introduction */}
      

      {/* Applications & Potential */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Applications & Potential
            </h2>
            <p className="text-xl text-gray-600">
              Discover the four key areas where duckweed is revolutionizing biotechnology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {applications.map((app) => (
              <div
                key={app.id}
                className={`bg-white rounded-xl p-4  shadow-lg transition-all duration-300 border-t-4 border-green-600 cursor-pointer ${
                  hoveredCard === app.id ? 'transform -translate-y-2 shadow-2xl' : ''
                }`}
                onMouseEnter={() => setHoveredCard(app.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {app.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {app.description}
                </p>
                {/* Image placeholder at bottom */}
                <div style={{ marginTop: "20px"}} className="bg-gray-200 border-2 border-dashed border-gray-400 w-full md:w-64 h-48 flex items-center justify-center rounded-lg">
                  <div className="text-center text-gray-600">
                    <div className="text-sm mb-2">🔬 DIAGRAM PLACEHOLDER</div>
             
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Current Applications */}
      <section className="bg-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              But What is a current status quo of duckweed application?

            </h2>
            <p className="text-xl opacity-90">
              Real-world implementations already making an impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10">
            {currentApplications.map((app, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 rounded-xl p-5 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {app.title}
                </h3>
                <p className="text-white text-opacity-90 leading-relaxed">
                  {app.description}
                </p>
                {/* Image placeholder at bottom */}
                <div style={{ marginTop: "20px"}} className="bg-gray-200 border-2 border-dashed border-gray-400 w-full md:w-64 h-48 flex items-center justify-center rounded-lg">
                  <div className="text-center text-gray-600">
                    <div className="text-sm mb-2">🔬 IMAGE PLACEHOLDER</div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Leaders */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Industry Leaders
            </h2>
            <p className="text-xl text-gray-600">
              Companies pioneering duckweed applications across industries
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            {companies.map((company, index) => (
              <span
                key={index}
                className="bg-green-50 text-green-700 px-6 py-3 rounded-full font-medium border-2 border-green-100 hover:bg-green-100 transition-colors duration-200 cursor-pointer"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              That's not enough
            </h2>
            <p className="text-xl text-gray-600">
              There are only a few companies working with duckweed to produce food, feedstock, or remediate water. There’s also just a handful of proof-of-concept studies for recombinant protein production in duckweed. Just several visionary research groups dedicated to advancing duckweed research…
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-5xl font-bold text-green-700 mb-3">
                  {stat.number}
                </div>
                <div className="text-gray-600 whitespace-pre-line">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-green-700 to-green-600 text-white py-20 text-center">
        <div className="max-w-7xl mx-auto px-5">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            The Future is User-Friendly
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            At iGEM Brno, we are convinced that this is not enough to fully utilize the amazing capabilities of duckweed. 
And because we believe that the success of technology lies in its user-friendliness,

We developed TAIFR and characterized duckweed-native promoters, so anyone can engineer duckweed efficiently. We built an autonomous cultivation prototype, allowing anyone to grow duckweed in their lab cheaply and without labour.

And that is also why we went to iGEM - to show the entire SynBio community the potential of duckweed and to make tools available for anyone to unlock it!

          </p>
          <button className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300 shadow-lg">
            Join the Revolution
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProjectWhy;
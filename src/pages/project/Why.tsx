import React, { useState } from 'react';

const ProjectWhy = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const applications = [
    {
      id: 1,
      icon: "🌱",
      title: "Novel Protein Crop",
      description: "With protein content matching soybeans and complete amino acid profiles, duckweed (especially Wolffia globosa) offers a sustainable protein source. Biomass doubles in just 48 hours, making it ideal for animal feed, human consumption, and premium pet foods."
    },
    {
      id: 2,
      icon: "🔬",
      title: "Phytoremediation Chassis",
      description: "Remove heavy metals, pharmaceutical residues, and excess nutrients from polluted water. Thriving in pH 4-9, temperatures 5-38°C, and various light conditions, duckweed provides versatile environmental cleanup solutions that are easy to harvest and process."
    },
    {
      id: 3,
      icon: "🏭",
      title: "Recombinant Protein Factory",
      description: "Scale protein production like never before. Fit 900 m² of surface area in a shipping container with minimal gene silencing. While plant glycosylation differs from mammalian systems, the scalability and cost advantages make duckweed ideal for large-scale biomanufacturing."
    },
    {
      id: 4,
      icon: "📊",
      title: "Plant Monocot Model Organism",
      description: "Bridge the gap between dicot model organisms and monocot crops. As the smallest flowering plants with primarily asexual reproduction, duckweed enables experiments 5-30 times faster than traditional models, offering direct relevance to agricultural staples."
    }
  ];

  const currentApplications = [
    {
      title: "Food Industry",
      description: "GRAS-approved in the USA and EU-authorized as novel food. Companies like GreenOnyx, PlantibleFoods, microTERRA, and LemnaPRO are pioneering duckweed-based foods with superior vegan proteins and egg-like properties."
    },
    {
      title: "Environmental Cleanup",
      description: "Lemna minor removes 85% of cadmium and 70% of ibuprofen from water. Lemna gibba tolerates glyphosate uptake. Companies like Fyto convert cow manure into protein-rich biomass using duckweed systems."
    },
    {
      title: "Biomanufacturing",
      description: "Successful expression of aprotinin, viral antigens, and growth factors. Companies like AlgenTech and Phylloceuticals are producing therapeutic proteins and antigens in duckweed species at commercial scales."
    },
    {
      title: "Research Infrastructure",
      description: "Five fully assembled genomes across three genera, extensive transcriptomic data, and established germplasm collections at Rutgers and IPK Gatersleben supporting global research efforts."
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
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-green-700 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-5 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-5 drop-shadow-lg">
            Duckweed Research
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light opacity-95 leading-relaxed">
            Unlock the potential of the world's smallest flowering plants for sustainable biotechnology, protein production, and environmental remediation
          </p>
        </div>
      </header>

      {/* Introduction */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-8">
            Forgetting Arabidopsis or Soybean?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            It's time to embrace duckweed as the next frontier in plant biotechnology. With unprecedented growth rates, nutritional density, and versatile applications, duckweed represents a paradigm shift in sustainable agriculture and biomanufacturing.
          </p>
        </div>
      </section>

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
                className={`bg-white rounded-xl p-10 shadow-lg transition-all duration-300 border-t-4 border-green-600 cursor-pointer ${
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
              Current Applications
            </h2>
            <p className="text-xl opacity-90">
              Real-world implementations already making an impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10">
            {currentApplications.map((app, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {app.title}
                </h3>
                <p className="text-white text-opacity-90 leading-relaxed">
                  {app.description}
                </p>
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
              Research Momentum
            </h2>
            <p className="text-xl text-gray-600">
              The scientific foundation continues to expand rapidly
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
            At iGEM Brno, we believe the success of technology lies in its accessibility. Current duckweed applications barely scratch the surface of this remarkable plant's potential.
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
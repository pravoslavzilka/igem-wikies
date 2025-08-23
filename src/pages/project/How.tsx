import React from 'react';
import { Beaker, Cog, Zap, CheckCircle } from 'lucide-react';

const ProjectHow = () => {
  const steps = [
    {
      phase: "Phase 1",
      title: "Genetic Design",
      description: "Design and synthesize genetic circuits for enhanced protein production",
      status: "completed",
      duration: "3 months"
    },
    {
      phase: "Phase 2", 
      title: "Transformation",
      description: "Introduce genetic modifications into duckweed using advanced techniques",
      status: "completed",
      duration: "2 months"
    },
    {
      phase: "Phase 3",
      title: "Optimization",
      description: "Fine-tune protein expression and growth parameters",
      status: "in-progress",
      duration: "4 months"
    },
    {
      phase: "Phase 4",
      title: "Scale-up",
      description: "Develop large-scale cultivation and processing systems",
      status: "upcoming",
      duration: "6 months"
    },
    {
      phase: "Phase 5",
      title: "Field Testing",
      description: "Real-world trials with partner farms and livestock",
      status: "upcoming",
      duration: "8 months"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-red-600 to-red-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-6">How We Do It</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Our systematic approach combines cutting-edge synthetic biology with practical 
            engineering to create a scalable solution for sustainable protein production.
          </p>
        </div>
      </div>

      {/* Methodology */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Technical Approach */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Beaker className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Genetic Engineering</h3>
            <p className="text-gray-600 text-sm">
              CRISPR-Cas9 and synthetic biology tools to modify duckweed genetics
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cog className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Bioprocessing</h3>
            <p className="text-gray-600 text-sm">
              Optimized cultivation systems for maximum protein yield and quality
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Automation</h3>
            <p className="text-gray-600 text-sm">
              Smart monitoring and control systems for consistent production
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality Assurance</h3>
            <p className="text-gray-600 text-sm">
              Comprehensive testing protocols to ensure safety and efficacy
            </p>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Development Timeline</h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                  step.status === 'completed' ? 'bg-red-500' :
                  step.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                }`}>
                  {step.status === 'completed' ? <CheckCircle className="w-6 h-6" /> : index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{step.phase}: {step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        step.status === 'completed' ? 'bg-red-100 text-red-800' :
                        step.status === 'in-progress' ? 'bg-blue-100 text-blue-800' : 
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {step.status === 'completed' ? 'Completed' :
                         step.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                      </span>
                      <p className="text-sm text-gray-500 mt-1">{step.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Genetic Modifications</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Protein Enhancement Genes</h4>
                <p className="text-blue-700 text-sm">
                  Introduction of high-value protein genes from legumes and algae
                </p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Growth Optimization</h4>
                <p className="text-red-700 text-sm">
                  Modified metabolic pathways for faster growth and higher biomass
                </p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Stress Resistance</h4>
                <p className="text-purple-700 text-sm">
                  Enhanced tolerance to temperature, pH, and nutrient variations
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Production System</h3>
            <div className="space-y-4">
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">Bioreactor Design</h4>
                <p className="text-orange-700 text-sm">
                  Modular cultivation systems optimized for duckweed growth
                </p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">Monitoring Systems</h4>
                <p className="text-red-700 text-sm">
                  Real-time tracking of growth parameters and protein content
                </p>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Harvesting & Processing</h4>
                <p className="text-yellow-700 text-sm">
                  Automated systems for continuous harvesting and protein extraction
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectHow;
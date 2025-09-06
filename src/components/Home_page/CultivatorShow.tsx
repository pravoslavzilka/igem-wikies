import { Clock10Icon, ShieldCheck, BarChart4Icon } from "lucide-react"


const CultivatorShow = () => {
    return (
    <div className="bg-white p-8 min-h-screen md:mt-[-200px]">
      <div className="max-w-8xl mx-auto">
        {/* Top image placeholder */}
        <div className="w-full h-64 sm:h-96 md:h-[45rem] bg-gray-200 rounded-lg flex items-center justify-center mb-12">
          <img src="https://static.igem.wiki/teams/5642/images/homepage/cultivator-min.webp" alt="Lab Image" className="w-full h-full object-cover rounded-lg" />
        </div>

        {/* Bottom section with content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl gap-12 justify-center mx-auto">
          {/* Left side - Main content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              ...and equipping it with systems for effortless cultivation at any scale.
            </h1>
            
            <div className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'Urbanist, sans-serif', fontSize: '19px', lineHeight: '140%' }}>
              <p>
                Our in-house made autonomous cultivation unit, <b>CULTIVATOR</b> can grow, monitor, and harvest duckweed with maximum efficiency and minimum user work - saving hours per day for any scientist looking to scale up their duckweed experiments.
              </p>
            </div>

            <div className="pt-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200" style={{ fontFamily: 'Urbanist, sans-serif', backgroundColor: '#22531C' }}>
                See how cultivator works
              </button>
            </div>
          </div>

          {/* Divider and Right side - Feature highlights */}
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
            {/* Vertical divider */}
            <div className="hidden lg:block border-l border-gray-300 mx-6"></div>
            {/* Feature highlights: stack vertically on mobile, horizontally on desktop */}
            <div className="flex flex-col lg:flex-row items-center justify-center w-full space-y-8 lg:space-y-0 lg:space-x-12" style={{ fontFamily: 'Space Grotesk, sans-serif', lineHeight: '140%', fontWeight: 500 }}>
              {/* Feature highlights in a horizontal row */}
              <div className="flex flex-row items-center justify-center w-full space-x-8 " >
                {/* Feature 1 */}
                <div className="text-center flex-1">
                  <div className="w-auto h-12  mx-auto mb-3 mt-5 flex items-center justify-center">
                    <Clock10Icon color="#779E45" style={{ height: '55px', width: '55px' }} />
                  </div>
                  <div className="font-semibold text-gray-800 text-md mb-1">Saves 2 hours per</div>
                  <div className="font-semibold text-gray-800 text-md mb-1">m² of duckweed</div>
                  <div className="font-semibold text-gray-800 text-md">per week.</div>
                </div>
                {/* Feature 2 */}
                <div className="text-center flex-1">
                  <div className="w-auto h-12 mx-auto mb-3 flex items-center justify-center">
                    <ShieldCheck color="#779E45" style={{ height: '55px', width: '55px' }} />
                  </div>
                  <div className="font-semibold text-gray-800 text-md mb-1">Enables 5 parallel</div>
                  <div className="font-semibold text-gray-800 text-md">experiments</div>
                </div>
                {/* Feature 3 */}
                <div className="text-center flex-1">
                  <div className="w-auto h-12 mx-auto mb-3 flex items-center justify-center">
                    <BarChart4Icon color="#779E45" style={{ height: '55px', width: '55px' }} />
                  </div>
                  <div className="font-semibold text-gray-800 text-md mb-1">Secures maximum</div>
                  <div className="font-semibold text-gray-800 text-md">yield</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default  CultivatorShow;


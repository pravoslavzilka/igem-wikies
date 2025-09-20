


const ThreeHParty = () => { 
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            (Bio) Hackers, Hipsters and Hustlers Party: a Silicon Valley for a day in Brno!
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Definitions Section */}
        <section className="mb-12 space-y-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          <div className="border-l-4 border-purple-600 pl-4 py-2">
            <p className="text-lg">
              <strong className="font-bold">A Hacker</strong> – the problem-solver who thrives on creativity and curiosity.
            </p>
          </div>
          <div className="border-l-4 border-blue-600 pl-4 py-2">
            <p className="text-lg">
              <strong className="font-bold">A Hustler</strong> – the unstoppable doer who makes things happen against all odds.
            </p>
          </div>
          <div className="border-l-4 border-indigo-600 pl-4 py-2">
            <p className="text-lg">
              <strong className="font-bold">A Hipster</strong> – the visionary who shapes culture and spots the next big thing before anyone else.
            </p>
          </div>
        </section>

        {/* Why We Did It Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            WHY we did it
          </h2>
          <div className="space-y-6" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <p className="text-lg leading-relaxed">
              Our goal was twofold.
            </p>
            <p className="text-lg leading-relaxed">
              First, we wanted to <strong className="font-bold">showcase the incredible, high-tech work our team is doing</strong> - to inspire new supporters to join us and make our current ones feel proud of their contributions.
            </p>
            <p className="text-lg leading-relaxed">
              Second, and even more crucial, we wanted to <strong className="font-bold">immerse ourselves and our community in the mindsets of successful innovators</strong>. Winning iGEM isn't just about great science it's about having the right <em>mindset</em>. You can have the lab, the funding, and the smartest brains... and still not have the right approach to problem-solving, community building, and vision. That is why we decided to gather the gold standard of a hacker, a hipster, and two hustlers (because academia needs to hustle twice as much)
            </p>
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-64 bg-gradient-to-br from-purple-200 to-blue-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-600 font-semibold" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                  Lab Tour Image 1
                </span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded text-sm font-semibold">
                1
              </div>
            </div>
            <div className="relative h-64 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-600 font-semibold" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                  Discussion Image 2
                </span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded text-sm font-semibold">
                2
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm italic text-gray-600" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            Lab tour showcasing duckweed to our colleagues from iGEM Prague. Discussion with Jan Kasper about: "Why Invest in Startups"
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Making It Happen
          </h2>
          <div className="space-y-6" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <p className="text-lg leading-relaxed">
              We poured countless hours into preparing this unique event for 50 people on the MUNI campus. We prepared special duckweed food such as duckweed appetizers, fresh salad, cookies and our own duckweed pesto. We also ask local wine and coffe shop for donation of their products in exchange for brand placement at the event. For making an amazing experience we invited four exceptional guests from our networks to lead the mindset charge:
            </p>

            {/* Guest List */}
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">●</span>
                <div>
                  <strong className="font-bold">Ján Kasper</strong> (Hustler, picture 2), one of the few true venture capitalists in CZ/SK, from{' '}
                  <a href="#" className="text-blue-600 hover:underline font-semibold">ZAKA VC</a>, Discussion:{' '}
                  <em>Why Invest in Startups</em>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">●</span>
                <div>
                  <strong className="font-bold">Vojta Roček</strong> (Hustler, picture 5), an experienced startup founder and the worst nightmare of academia, from{' '}
                  <a href="#" className="text-blue-600 hover:underline font-semibold">Presto Ventures</a> &{' '}
                  <a href="#" className="text-blue-600 hover:underline font-semibold">Czech Startup Association</a>, Discussion:{' '}
                  <em>Why academia is great for knowledge but bad for startups</em>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">●</span>
                <div>
                  <strong className="font-bold">Mitch Altman</strong> (Hacker, picture 3), a legendary founder of Cornfield Electronics and a pioneer of the hackerspace movement from San Francisco, Discussion:{' '}
                  <em>What Does It Mean to Be a Hacker?</em>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">●</span>
                <div>
                  <strong className="font-bold">Peter Dendiš</strong> (Hipster, picture 4), a visionary serial entrepreneur and a jack-of-all-trades, Discussion:{' '}
                  <em>Go Big or Go Home – How to Sell Your Vision</em>
                </div>
              </li>
            </ul>
          </div>

          {/* Guest Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="relative h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-600 font-semibold" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                  Guest Discussion 3
                </span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded text-sm font-semibold">
                3
              </div>
            </div>
            <div className="relative h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-600 font-semibold" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                  Guest Discussion 4
                </span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded text-sm font-semibold">
                4
              </div>
            </div>
            <div className="relative h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-600 font-semibold" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                  Guest Discussion 5
                </span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded text-sm font-semibold">
                5
              </div>
            </div>
          </div>
        </section>

      

   


      </div>

    
    </div>
  );
};

export default ThreeHParty;
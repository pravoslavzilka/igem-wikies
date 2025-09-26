const ThreeHParty = () => { 
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            (Bio) Hackers, Hipsters and Hustlers Party: a Silicon Valley for a day in Brno!
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Definitions Section */}
        <section className="mb-12 space-y-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
          <div className="border-l-4 border-green-600 pl-4 py-2">
            <p className="text-lg">
              <strong className="font-bold">A Hacker</strong> – the problem-solver who thrives on creativity and curiosity.
            </p>
          </div>
          <div className="border-l-4 border-green-600 pl-4 py-2">
            <p className="text-lg">
              <strong className="font-bold">A Hustler</strong> – the unstoppable doer who makes things happen against all odds.
            </p>
          </div>
          <div className="border-l-4 border-green-600 pl-4 py-2">
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
            <p>
              <span style={{ fontWeight: 400 }}>First, we wanted to </span>
              <strong>showcase the incredible, high-tech work our team is doing</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                - to inspire new supporters to join us and make our current ones feel proud
                of their contributions.
              </span>
            </p>

            <p>
              <span style={{ fontWeight: 400 }}>
                Second, and even more crucial, we wanted to{" "}
              </span>
              <strong>
                immerse ourselves and our community in the mindsets of successful innovators
              </strong>
              <span style={{ fontWeight: 400 }}>
                . Winning iGEM isn’t just about great science it’s about having the right{" "}
              </span>
              <em>
                <span style={{ fontWeight: 400 }}>mindset</span>
              </em>
              <span style={{ fontWeight: 400 }}>
                . You can have the lab, the funding, and the smartest brains… and still fail{" "}
              </span>
              <strong>
                if you don’t have the right approach to problem-solving, community building,
                and vision
              </strong>
              <span style={{ fontWeight: 400 }}>
                . That is why we decided to gather the gold standard of a hacker, a hipster,
                and two hustlers (because academia needs to hustle twice as much)
              </span>
            </p>

          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-64 bg-gradient-to-br from-purple-200 to-green-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center " style={{ height: '400px', width: 'auto', objectFit: 'cover' }}>
                <img  src="https://static.igem.wiki/teams/5642/images/engagement/outreach/labtour.webp" />
              </div>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded text-sm font-semibold">
                1
              </div>
            </div>
            <div className="relative h-64 bg-gradient-to-br from-green-200 to-indigo-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/pxl-20250426-130215031.webp" />
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
                  <a href="#" className="text-green-600 hover:underline font-semibold">ZAKA VC</a>, Discussion:{' '}
                  <em>Why Invest in Startups</em>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1">●</span>
                <div>
                  <strong className="font-bold">Vojta Roček</strong> (Hustler, picture 5), an experienced startup founder and the worst nightmare of academia, from{' '}
                  <a href="#" className="text-green-600 hover:underline font-semibold">Presto Ventures</a> &{' '}
                  <a href="#" className="text-green-600 hover:underline font-semibold">Czech Startup Association</a>, Discussion:{' '}
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
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/pxl-20250426-153332593-1.webp" />
              </div>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded text-sm font-semibold">
                3
              </div>
            </div>
            <div className="relative h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">

                <img className="" src="https://static.igem.wiki/teams/5642/images/engagement/outreach/img-4204c.webp"/>
    
                
              </div>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded text-sm font-semibold">
                4
              </div>
            </div>
            <div className="relative h-64 bg-gradient-to-br from-green-200 to-purple-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/pxl-20250426-140450571.webp" />
              </div>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded text-sm font-semibold">
                5
              </div>
            </div>
          </div>
        </section>

        {/* Final Outcome Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            The Final Outcome
          </h2>
          <div className="space-y-6" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <p className="text-lg leading-relaxed">
              At the end of the evening, we served duckweed pizza made fresh by a local pizzeria and unveiled the highlight of the night: <strong className="font-bold">a duckweed cake shaped like the Golden Village</strong> (the valley where the iGEM Jamboree unfolds). And of course, we shared the SV secret ingredients: <em>It stars with the building your product... Finally, you throw in a grain of luck and a lot of hustle to save the day... and maybe a touch of hacking to cut through obstacles</em>.
            </p>
            <p className="text-lg leading-relaxed">
              The party energized <strong className="font-bold">30 iGEM members</strong> with fresh perspectives and new connections. One of our guests captured the feeling perfectly, saying: <em>"This is the first time I have experienced the Silicon Valley Vibe while sitting in Brno Czech Republic."</em> This is incredibly sweet, and for us, it proved that we successfully channeled the energy and mindset that drives innovation.
            </p>
            <p className="text-lg leading-relaxed">
              We personally loved the <strong className="font-bold">fantastic insights from our guests</strong>, especially from Mitch Altman and Peter DendiÅ¡. Our guests inspired the ICER Prague for changing the political vent, <strong className="font-bold">Pleasure on Cocktails</strong> for their idea on making pleasure in a responsible, and <strong className="font-bold">polheur and Lucilene</strong> for going with their life on unpopular narrative science, and <strong className="font-bold">our team members</strong> came away feeling energized and validated. Players as it will help raise at least two iGEM teams at least: <strong className="font-bold">ICER Hungry in Paris</strong>.
            </p>
          </div>
        </section>

        {/* Guest Photos Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-64 bg-gradient-to-br from-green-200 to-teal-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/brno-apr-2025-54489316768-o.webp"/>
                </div>
              </div>
            </div>
            <div className="relative h-64 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/brno-apr-2025-54489036181-o.webp"/>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm italic text-gray-600" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <strong className="font-bold">Mitch Altman</strong>, a legendary Hacker of hardware and a deeply inspiring picture from ICER Show and a picture question from an Austral student: <em>"SynechON"</em>. <strong className="font-bold">Peter DendiÅ¡ about: It is all about a startup building self (not Ashely)</strong>
          </p>
        </section>

        {/* Food Photos Section */}
        <section className="mb-12 max-w-3xl items-center mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/sponzor-02391.webp"/>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] bg-gradient-to-br from-lime-200 to-green-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/sponzor-02358.webp"/>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm italic text-gray-600" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            The samples of 30 types- Urban Wine & Pilny Beanz. These including wines and coffee cake product. Of course, why not hipster and making was on.
          </p>
        </section>

      

   


      </div>

    
    </div>
  );
};

export default ThreeHParty;
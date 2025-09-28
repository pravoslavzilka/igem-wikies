const ThreeHParty = () => { 
  return (
    <div className="min-h-screen bg-white text-lg " style={{ fontFamily: 'Urbanist, sans-serif' }}>
      {/* Header */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            (Bio) Hackers, Hipsters and Hustlers Party: a Silicon Valley for a day in Brno!
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-justify">
        
       
        {/* Why We Did It Section */}
        <section className="mb-12 text-lg">
              <>
                <h2 className="text-2xl" style={{marginBottom: '1rem'}}>
                  <strong>WHY we did it</strong>
                </h2>
                <p>
                  <span style={{ fontWeight: 400 }}>Our goal was twofold.</span>
                </p>
                <p>
                  <span style={{ fontWeight: 400 }}>First, we wanted to </span>
                  <strong>showcase the incredible, high-tech work our team is doing</strong>
                  <span style={{ fontWeight: 400 }}>
                    {" "}
                    - to inspire new supporters to join us and make our current ones feel
                    proud of their contributions.
                  </span>
                </p>
                <p className="mt-4">
                  <span style={{ fontWeight: 400 }}>
                    Second, and even more crucial, we wanted to{" "}
                  </span>
                  <strong>
                    immerse ourselves and our community in the mindsets of successful
                    innovators
                  </strong>
                  <span style={{ fontWeight: 400 }}>
                    . Winning iGEM isn’t just about great science it’s about having the right{" "}
                  </span>
                  <em>
                    <span style={{ fontWeight: 400 }}>mindset</span>
                  </em>
                  <span style={{ fontWeight: 400 }}>
                    . You can have the lab, the funding, and the smartest brains… and still
                    fail{" "}
                  </span>
                  <strong>
                    if you don’t have the right approach to problem-solving, community
                    building, and vision
                  </strong>
                  <span style={{ fontWeight: 400 }}>
                    . That is why we decided to gather the gold standard of a hacker, a
                    hipster, and two hustlers (because academia needs to hustle twice as much)
                  </span>
                </p>
              </>

        </section>

        {/* Image Gallery Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative h-64 bg-gradient-to-br from-purple-200 to-green-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center " style={{ height: '400px', width: 'auto', objectFit: 'cover' }}>
                <img  src="https://static.igem.wiki/teams/5642/images/engagement/outreach/labtour.webp" />
              </div>
              
            </div>
            <div className="relative h-64 bg-gradient-to-br from-green-200 to-indigo-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/pxl-20250426-130215031.webp" />
              </div>
              
            </div>
          </div>
          <p className="mt-4 text-md italic " style={{ fontFamily: 'Urbanist, sans-serif' }}>
            Lab tour showcasing duckweed to our colleagues from iGEM Prague. Discussion with Jan Kasper about: "Why Invest (your time or money) in Startups"
          </p>
        </section>

        <section className="mb-12 text-lg">
          <>
            <p>
              <strong className="text-3xl ">Making It Happen</strong>
            </p>
            <p style={{ marginTop: '2rem', marginBottom: '1rem' }}>
              <span style={{ fontWeight: 400 }}>
                We poured countless hours into preparing this unique event for 60 people
                on the MUNI campus. We prepared special duckweed food such as: duckweed
                appetizers, fresh salad, cookies and our own duckweed pesto. For making an
                amazing experience we invited four exceptional guests from our networks to
                lead the mindset charge:
              </span>
            </p>
            <ul>
              <li style={{ fontWeight: 400, marginTop: '1rem' }}>
                <strong>Ján Kasper</strong>
                <span style={{ fontWeight: 400 }}>
                  , one of the few true venture capitalists in CZ/SK, from
                </span>
                <a style={{ color: '#4F46E5' }} href="https://www.linkedin.com/company/zakastartup/">
                  {" "}
                  <strong>ZAKA VC</strong>
                </a>
                <strong>,</strong> <span style={{ fontWeight: 400 }}>Discussion</span>
                <em>
                  <span style={{ fontWeight: 400 }}>: Why Invest in Startups</span>
                </em>
              </li>
              <li style={{ fontWeight: 400, marginTop: '1rem' }}>
                <strong>Vojta Roček</strong>
                <span style={{ fontWeight: 400 }}>
                  , an experienced startup founder and the worst nightmare of academia,
                  from
                </span>
                <a style={{ color: '#4F46E5' }}  href="https://www.linkedin.com/company/presto-ventures/">
                  {" "}
                  <strong>Presto Ventures</strong>
                </a>
                <span style={{ fontWeight: 400 }}> &amp;</span>
                <a style={{ color: '#4F46E5' }}  href="https://www.linkedin.com/company/czech-startup-association/">
                  {" "}
                  <strong>Czech Startup Association</strong>
                </a>
                <strong>, </strong>
                <span style={{ fontWeight: 400 }}>Discussion</span>
                <em>
                  <span style={{ fontWeight: 400 }}>
                    : Why academia is great for knowledge but bad for startups
                  </span>
                </em>
              </li>
              <li style={{ fontWeight: 400, marginTop: '1rem' }}>
                <strong>Mitch Altman</strong>
                <span style={{ fontWeight: 400 }}>
                  , a legendary founder of Cornfield Electronics and a pioneer of the
                  hackerspace movement from San Francisco. Discussion:{" "}
                </span>
                <em>
                  <span style={{ fontWeight: 400 }}>
                    What Does It Mean to Be a Hacker?
                  </span>
                </em>
              </li>
               <li style={{ fontWeight: 400, marginTop: '1rem' }}>
              <strong>Peter Dendis</strong>
              <span style={{ fontWeight: 400 }}>
                , a visionary serial entrepreneur and a jack-of-all-trades, Discussion:{" "}
              </span>
              <em>
                <span style={{ fontWeight: 400 }}>
                  Go Big or Go Home – How to Sell Your Vision
                </span>
              </em>
            </li>
            </ul>
           
          </>


          {/* Guest Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div>
            <div className="relative h-64 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/pxl-20250426-153332593-1.webp" />
              </div>
              
              
            </div>
            <div className=" mt-4"><strong className="font-bold">Mitch Altman: a hacker</strong> – the problem-solver who thrives on creativity and curiosity.</div>
            </div>

            <div>
            <div className="relative h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">

                <img className="" src="https://static.igem.wiki/teams/5642/images/engagement/outreach/img-4204c.webp"/>
    
                
              </div>
             
            </div>

             <div className=" mt-4"><strong className="font-bold">Peter Dendis: a hipster</strong> – the visionary who shapes culture and spots the next big thing before anyone else.</div>

            </div>  

            <div>
            <div className="relative h-64 bg-gradient-to-br from-green-200 to-purple-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/pxl-20250426-140450571.webp" />
              </div>
              
            </div>
            <div className=" mt-4"><strong >Vojta Roček: a hustler</strong> – the unstoppable doer who makes things happen against all odds.</div>
            </div>
          </div>
        </section>

        {/* Final Outcome Section */}
        <section className="mb-12 text-lg">
          <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            The Final Outcome
          </h2>
          <>
            <p className="mb-10" >
              <span style={{ fontWeight: 400 }}>The 3H Party was a huge success. </span>
              <strong>Ján Kasper’s talk</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                about the incredible difficulty of building a proper startup resonated
                deeply.{" "}
              </span>
              <strong>Vojta Roček’s challenging questions</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                about academic funding ignited a passionate debate that continued late
                into the night.{" "}
              </span>
              <strong>Mitch Altman</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                inspired us with his message that human connections&nbsp; matters as much
                as building cool gadgets. Finally,{" "}
              </span>
              <strong>Peter Dendis</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                shared his insights on the next big things ahead and teached us the art of
                luck management which left us all feeling motivated and equipped to push
                forward with our vision.
              </span>
            </p>
            <p>
              <span style={{ fontWeight: 400 }}>
                One of our guests captured the feeling perfectly, saying,{" "}
              </span>
              <strong>
                "This is the first time I have experienced the Silicon Valley like vibe
                while here in Czech Republic.”
              </strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                This extraordinary event was an energetic mix of intellectual curiosity,
                community spirit, and visionary thinking.
              </span>
            </p>
            <p>
              <span style={{ fontWeight: 400 }}>
                But that wouldn’t have been possible without our{" "}
              </span>
              <strong>main sponsor, Tensor Ventures</strong>
              <span style={{ fontWeight: 400 }}>
                , who believed in us and funded the even and others:{" "}
              </span>
              <strong>iGEM Prague</strong>
              <span style={{ fontWeight: 400 }}> for bringing the beer; </span>
              <strong>Vican Winery</strong>
              <span style={{ fontWeight: 400 }}> for donating the premium wine; </span>
              <strong>Fiftybeans</strong>
              <span style={{ fontWeight: 400 }}> and </span>
              <strong>Rebelbean</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                for the exceptional coffee; and, most importantly,{" "}
              </span>
              <strong>our guests and speakers</strong>
              <span style={{ fontWeight: 400 }}>
                {" "}
                for making the 3H Party an unforgettable experience.
              </span>
            </p>
            <p>
              <span style={{ fontWeight: 400 }}>
                And now, with our community stronger and our mindsets sharper, we’re one
                step closer to our next big goal:{" "}
              </span>
              <strong>iGEM victory in Paris</strong>
              <span style={{ fontWeight: 400 }}>.</span>
            </p>
          </>

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
          <p className="mt-4 text-md italic " style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <strong className="font-bold">Mitch Altman, a legendary hacker of hardware got a bacteria hacking course from iGEM Brno and a private excursion from our enablement partner- Thermofisher, which produce around 20 % of global electron microscopy just from BRNO facility.</strong>
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
          <p className="mt-4 text-md italic " style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <p>
            <em>
              <span style={{ fontWeight: 400 }}>The partners of 3H Party: </span>
            </em>
            <strong>
              <em>Vican Wine &amp; Fifty Beans</em>
            </strong>
            <em>
              <span style={{ fontWeight: 400 }}>
                . These exclusive wines and coffee were excellent. Everyone really loved
                them and nothing was left
              </span>
            </em>
          </p>

          </p>
        </section>

      

   


      </div>

    
    </div>
  );
};

export default ThreeHParty;
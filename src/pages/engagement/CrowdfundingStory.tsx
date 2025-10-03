import React from 'react';

export default function CrowdfundingStory() {
  return (
    <div className="min-h-screen bg-white text-lg text-justify" style={{ fontFamily: 'Urbanist, sans-serif' }}>
      {/* Page 1 */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-center text-gray-600 italic mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Story of our Paris journey
        </h1>
        
        <h2 className="text-4xl font-bold text-center mb-32" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Mendel 2.0: Send students to the finals of the world's most prestigious biotech competition!
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className=" flex items-center justify-center">
            <img className='w-[400px]' src='https://static.igem.wiki/teams/5642/images/engagement/outreach/crowdfunding/screenshot-20250906-114639.webp' />
          </div>

          <div >

            <div className="bg-green-[#6ca033] text-white p-8 rounded-lg" style={{ backgroundColor: '#6ca033' }} >
            <p className="text-lg leading-relaxed">
              Though our journey has been graced by generous patrons, the tireless pursuit of discovery demands more than we alone possess. To carry our vision to Paris's esteemed stage, and to truly gauge the heart and resonance of our endeavor, we now turn to the wider world, inviting all to share in its unfolding…
            </p>

          </div>

          <div>
             <div className="bg-gray flex items-center justify-center">
                    <span> Campaign photo missing </span>
             </div>   
          </div>

          </div>
          
          


        </div>

        <h3 className="text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          by<br/>crowdfunding<br/>campaign!
        </h3>

        <div className='flex flex-row min-h-screen justify-center items-center ml-16 mt-[-100px]'>
            <img className='' src="https://static.igem.wiki/teams/5642/images/engagement/outreach/crowdfunding/crowd.webp" />
        </div>

        

        <div className="">
          <div className="md:flex items-start gap-4 mb-8">
            <div className="flex-shrink-0 flex items-center justify-center">
              <img className='w-64 h-32 object-cover' src="https://static.igem.wiki/teams/5642/images/engagement/outreach/crowdfunding/donio.webp" />
            </div>
            <div>
              <p className="mb-4">
                We chose the platform <span className="font-bold">Donio</span> for its fairness and transparency, as it guarantees 100% of every contribution goes directly to our project. As a trusted brand in the Czech Republic with a strong community, we believe it gives us the best chance to succeed. Our special thanks also go to <span className="font-bold">Tereza Krejčí</span> from the Donio team, whose invaluable guidance helped us immensely in achieving our mission: to proudly represent iGEM Brno.
              </p>
            </div>
          </div>

          <p className="mb-4">
            One of the first steps in creating our campaign was undoubtedly reaching out to <span className="font-bold">Peter Dendis</span> —an serial entrepreneur, investor, and mentor that supports early-stage startups and projects. (Peter led the marketing for a crypto launch that raised 23 million € in 10 days and secured global media coverage.) After several consultations, we moved a big step closer to a successful campaign.
          </p>
        </div>
      </div>

      {/* Page 2 */}
      <div className="max-w-6xl mx-auto mt-[-70px] px-6 py-12">
        <p className="mb-8">
          Before developing any materials, we defined two cornerstones: our <span className="font-bold">target audience</span> and our <span className="font-bold">project's story</span>. To secure financial support, we targeted <span className="font-bold">middle-aged entrepreneurs and tech-optimists</span>. We anchored our narrative in local scientific heritage, connecting it to Gregor Mendel, the father of genetics, who conducted his groundbreaking research right here in Brno—the same city hosting our iGEM project. The story was simple yet powerful: young students from a small country building on a legacy of world-class science to take their idea to the world.
        </p>

        <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mb-12  text-white p-6 rounded-lg" style={{ backgroundColor: '#6ca033' }}>
            <div className="text-center">
            <p className="font-bold text-lg">FF</p>
            <p>family & friends</p>
            </div>
            <div className="text-center">
            <p className="font-bold text-lg">Target</p>
            <p>audience</p>
            </div>
            <div className="text-center">
            <p className="font-bold text-lg">Students</p>
            </div>
        </div>
        </div>

        <p className="mb-8">
          We defined the alfa+omega - now let's get to the hustle - <span className="font-bold">crowdfunding material</span>.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="h-64 overflow-hidden flex items-center justify-center rounded rounded-lg">
            <span className="text-gray-500 rounded"><img  src='https://static.igem.wiki/teams/5642/images/engagement/outreach/crowdfunding/video.webp' className='w-full h-full object-cover rounded-lg' /></span>
          </div>
          
          <div>
            <p className="mb-4">
              To bring our story to life, we teamed up with a brilliant student crew from the <span className="font-bold">Academy of Performing Arts in Bratislava (VŠMU)</span>: Ema Dihelová, Tereza Moravčíková, and Martin Ingr. Together, we've created an interactive video that shows who we are, what we do, where we're headed, and how you can help us.
            </p>
            <p>
              This video is featured here alongside a detailed project description that explains our goals and, crucially, how all received funds will be utilized.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="  flex items-center justify-center overflow-hidden">
            <img className='h-32 w-36 object-cover' src='https://static.igem.wiki/teams/5642/images/engagement/outreach/crowdfunding/gmail.webp' />
          </div>
          <div className="  flex items-center justify-center overflow-hidden">
            <img className='h-32 w-36 object-cover' src='https://static.igem.wiki/teams/5642/images/engagement/outreach/crowdfunding/newspaper.webp' />
          </div>
          <div className="  flex items-center justify-center overflow-hidden">
            <img className='h-32 w-36 object-cover' src='https://static.igem.wiki/teams/5642/images/engagement/outreach/crowdfunding/linkedin.webp' />
          </div>
          <div className="  flex items-center justify-center overflow-hidden">
            <img className='h-32 w-36 object-cover' src='https://static.igem.wiki/teams/5642/images/engagement/outreach/crowdfunding/instagram.webp' />
          </div>
        </div>

        <div className=" p-6 text-white rounded-lg mb-12" style={{ backgroundColor: '#6ca033' }}>
          <p className="text-center font-semibold">
            To ensure our project's story reached a diverse audience, we built a comprehensive media and outreach plan. Our strategy focused on hitting multiple relevant channels, leveraging key partners, and maintaining direct communication with our supporters.
          </p>
        </div>

        <div className="md:flex flex-row items-start justify-center gap-8 mb-12">
          {/* Images stacked vertically with labels */}
          <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col items-center">
              <img src='https://static.igem.wiki/teams/5642/images/engagement/outreach/crowdfunding/instagram-1.webp' className="w-[400px] mb-2" />
              <span className="text-gray-700 text-base">Instagram</span>
            </div>
            <div className="flex flex-col items-center">
              <img src='https://static.igem.wiki/teams/5642/images/engagement/outreach/crowdfunding/ln.webp' className="w-[400px] mb-2" />
              <span className="text-gray-700 text-base">LinkedIn</span>
            </div>
          </div>
          {/* Text next to images */}
          <div className="flex flex-col gap-8 max-w-xl">
            <div>
              <h4 className="font-bold text-2xl mb-3">Instagram:</h4>
              <p className="mb-3 ">
                Raising awareness mostly among students, core issues our project addresses, visually compelling content.
              </p>
              <ul className="list-disc pl-5 space-y-2 ">
                <li>We achieved a total reach of over 200,000 unique people.</li>
                <li>Our account gained 250 new followers.</li>
                <li>The campaign included over 15 ours and collab posts with high-impact.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-2xl mb-3 mt-4">LinkedIn:</h4>
              <p className="mb-3">
                Professional hub, building credibility within the academic and professional communities:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>We strategically spotlighted our individual partners and collaborators, telling their unique stories.</li>
                <li>We shared narrative updates from our team members</li>
                <li>Skyrocketed our LinkedIn followers by 100% while locking in collaborations with dozens of top-tier investors and professors.</li>
              </ul>
            </div>
            <div className="mb-12">
          <h4 className="font-bold text-2xl mb-3">The Newsletter Loop</h4>
          <p className="mb-3">
            Reaching individuals beyond social platforms, we built a reliable direct communication channel:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>We successfully collected numerous email contacts through attending 30+ offline events + our supporters from academic and startup world.</li>
            <li>We then sent targeted newsletters to this list, ensuring that everyone interested in our project—especially those not regularly active on social media—remained fully informed and connected to our mission.</li>
          </ul>
        </div>
          </div>
        </div>

        

        </div>

      {/* Page 3 */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Press Relations: High-Impact Media Placement
        </h3>

        <ol className="list-decimal pl-5 space-y-4 mb-12">
          <li>
            <span className="font-bold">Exclusive Interviews:</span> We identified the most influential media outlets and secured exclusive pre-launch interviews with those who committed to featuring our story.
          </li>
          <li>
            <span className="font-bold">Strategic Press Release:</span> We created a streamlined press release.
          </li>
        </ol>

        <p className="mb-12">
          This strategy helped us secure features in leading publications like <a href="https://www.startitup.sk/mladi-vedci-odisli-zo-slovenska-v-brne-vyvijaju-revolucny-projekt-ktory-moze-zmenit-buducnost-polnohospodarstva/" className="text-blue-600 underline">Startitup</a> and <a href="https://domaci.hn.cz/c1-67782400-zabincova-mafie-studenti-z-brna-vyvinuli-prevratne-krmivo-na-mezinarodni-soutez-vybiraji-od-darcu" className="text-blue-600 underline">Hospodářské noviny</a>. We were also greatly supported by Ms. Maria Stracenska in amplifying our story within the Slovak media.
        </p>

        <h3 className="text-2xl text-center font-bold mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Support from the heart, or for a reward? Both move us forward.
        </h3>


        <img src='https://static.igem.wiki/teams/5642/images/engagement/outreach/crowdfunding/crowd-photos-min.webp' />

        

        

        <div className="bg-green-600 text-white p-6 mt-16 rounded-lg mb-12">
          <p className="text-center italic">
            The icing on the cake was our personal presence at dozens of events, connecting the worlds of science, innovation, and business. We made sure to be at key gatherings, no matter where they were held.
          </p>
        </div>

        <h4 className="text-xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Our Mission in the Field:
        </h4>

        <ul className="list-disc pl-5 space-y-3 mb-12">
          <li>
            <span className="font-bold">Networking with industry leaders</span> at exclusive events like the <span className="font-bold">Tech Execs Boat Networking</span> – right on a boat in the middle of the Brno´s reservoir.
          </li>
          <li>
            <span className="font-bold">Presenting on prestigious platforms</span>, including appearances at Forbes-backed events and key meetups like <span className="font-bold">Velvet Innovation Meetup</span>.
          </li>
          <li>
            <span className="font-bold">Spreading the passion for science</span> among thousands at the year's biggest popularization events – <span className="font-bold">Researchers' Night in Brno and Bratislava</span> and the <span className="font-bold">Brno Festival of Science and Technology</span>.
          </li>
          <li>
            <span className="font-bold">Sharing our vision in the media</span>, where we introduced our ideas to listeners of <span className="font-bold">Czech Radio</span>, for instance.
          </li>
          <li>
            <span className="font-bold">Building strong academic relationships</span>, from informal events like the <span className="font-bold">Deans' BBQ</span> to specialized gatherings such as <span className="font-bold">iGEM Prague Meetup</span> and relevant discussions.
          </li>
        </ul>
      </div>

      {/* Page 4 */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-green-600 text-white p-12 rounded-lg text-center">
          <p className="text-lg mb-6">
            An achievement this monumental deserves a heartfelt thank you. We are thrilled to announce that we have reached our goal, raising over
          </p>
          <p className="text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            €12,000
          </p>
          <p className="text-lg mb-6">
            with the help of more than <span className="font-bold">350</span> incredible supporters.
          </p>
          <p className="text-lg">
            Your collective generosity has unlocked the gates to Paris for us. We are deeply humbled and immensely grateful for your contribution to this dream
          </p>
        </div>
      </div>
    </div>
  );
}
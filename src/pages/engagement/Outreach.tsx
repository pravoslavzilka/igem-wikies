import React from 'react';
import {Link} from "react-router-dom";

export default function Outreach() {
  return (
    <div className="min-h-screen bg-white font-sans text-lg text-justify">

      <div className='max-w-6xl mx-auto p-6 bg-white'>

      {/* Header Section */}

      <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/outreach1.webp" alt="Duckweed Spotlight" className="w-full h-auto" />
      <div className="p-6">
        <h1 className="text-4xl font-bold mb-4 " style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Duckweed Spotlight
        </h1>
        
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="flex-1" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <p className="text-lg mb-4 text-gray-800">
              <strong>Science isn't done until it's shared</strong> — ideally in a way 
              that's <strong>understandable</strong> and a little bit <strong>entertaining!</strong>
            </p>
            <p className="mb-4 text-gray-800">
              With this <strong>mindset</strong>, we <strong>kicked off conversations</strong> at 
              networking events, <strong>prepared programs</strong> for 
              science-promotion occasions we took part in, 
              <strong>organized</strong> our own events, and <strong>connected with 
              fellow iGEMers</strong> along the way!
            </p>
          </div>
          
          <div className=" rounded-lg flex items-center justify-center">
            <img style={{ height: "200px", width: "auto" }} src="https://static.igem.wiki/teams/5642/images/engagement/outreach/outreach2.webp" alt="Outreach Image" className="max-w-full max-h-full" />
          </div>
        </div>
      </div>

      {/* Four Pillars Section */}
      <div className="px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

          <div  className="bg-[#538b5e] text-center p-4 rounded-lg">
              <h3 className=" font-bold text-2xl mb-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Creating Network
              </h3>
              <div className=" mt-10 bg-white rounded-full w-36 h-36 mx-auto mb-2 flex items-center justify-center">
                <div className=" rounded-full flex items-center justify-center">
                  <span className="text-md "><a href="#network"><b>Being part of a community</b></a></span>
                </div>
              </div>
              
            </div>


            <div  className="bg-[#538b5e] text-center p-4 rounded-lg">
              <h3 className=" font-bold text-2xl mb-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Communicating Science
              </h3>
              <div className="bg-white rounded-full w-36 h-36 mx-auto mb-2 flex items-center justify-center">
                <div className=" rounded-full flex items-center justify-center">
                  <span className="text-md "><a href="#communication"><b>Letting the world discover duckweed</b></a></span>
                </div>
              </div>
              
            </div>


            <div  className="bg-[#538b5e] text-center p-4 rounded-lg">
              <h3 className=" font-bold text-2xl mb-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Cultivating Community
              </h3>
              <div className="bg-white rounded-full w-36 h-36 mx-auto mb-2 flex items-center justify-center">
                <div className=" rounded-full flex items-center justify-center">
                  <span className="text-md "><b><a href="#3hparty">Hosting our own events</a></b></span>
                </div>
              </div>
              
            </div>



            <div  className="bg-[#538b5e] text-center p-4 rounded-lg">
              <h3 className=" font-bold text-2xl mb-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Connecting w/ iGEMers
              </h3>
              <div className="bg-white rounded-full w-36 h-36 mx-auto mb-2 flex items-center justify-center">
                <div className=" rounded-full flex items-center justify-center">
                  <span className="text-md "><b><a href="#igemmeetup">Attending iGEM meetups</a></b></span>
                </div>
              </div>
              
            </div>


          
        </div>
      </div>

      {/* Viral Section */}
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6 " style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Duckweed goes viral!
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <p className="mb-4 text-lg">
              <strong>Offline</strong> we can reach hundreds, but <strong>online</strong> 
              we can reach <strong>thousands</strong>. That's why we 
              shared our story on <strong>Instagram</strong> and 
              <strong>LinkedIn</strong>, gave interviews for <strong>articles</strong> and 
              <strong>reports</strong>, joined <strong>YouTube videos</strong>, and even 
              made it to <strong>TV</strong>!
            </p>
          </div>

          <div className=" bg-[#538b5e] rounded-lg p-6 text-white min-w-64 flex flex-col md:flex-row items-start ">
            <h3 className="text-3xl font-bold mb-4 mt-10 mr-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Crowdfunding
            </h3>
            <div className="bg-white rounded-full w-36 h-36 mx-auto mb-4 flex items-center justify-center text-center">
              <span className="text-md text-black"><Link to="/engagement/crowdfunding"><b>Bringing 21 iGEMers to Paris</b></Link></span>
            </div>
          </div>
          
          <div className=" bg-[#538b5e] rounded-lg p-6 text-white min-w-64 flex flex-col md:flex-row items-start ">
            <h3 className="text-3xl font-bold mb-4 mt-10 mr-4 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Circulating <br/> Online
            </h3>
            <div className="bg-white rounded-full w-36 h-36 mx-auto mb-4 flex items-center justify-center text-center">
              <span className="text-md text-black"><a href="#media"><b>Sharing our project online</b></a></span>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="p-6 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              3 000+ <br/>people we<br />talked to
            </h3>
            
          </div>
          
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              30+ <br /> events we<br />participated in
            </h3>
            
          </div>
          
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              1 000+ <br /> duckweed<br />cookies
            </h3>
           
          </div>
          
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              100+ <br /> posts we<br />posted
            </h3>
            
          </div>
        </div>
        <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/outreach-3.webp" alt="Duckweed Outreach" className="w-full h-auto mt-6" />
      </div>

      </div>


      {/* Header Section */}
      <div id='network' className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1  className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Creating Network
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12" style={{fontFamily: 'Urbanist, sans-serif'}}>
        
        {/* JICnights and Student Meetups */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            JICnights and Student Meetups by JIC
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-4">
                JICnights and Student Meetups are inspiring community events hosted by JIC – the innovation agency 
                driving creativity and entrepreneurship in the Brno region. They are giving students and startup founders a 
                chance to meet in an informal setting, exchange ideas, and inspire one another.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                From the very start of the iGEM Brno team, we became part of this community of young innovators. At the 
                Fall Night, Matúš and Matej took part in speed-dating sessions where they pitched our project idea and 
                searched for new team members. During the Christmas Student Meetup, Matej represented the team in a 
                pitch contest.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The mission of the Spring Night was simple – to introduce as many people as possible to the remarkable 
                plant Duckweed. At the Summer Student Meetup, we collected valuable insights on how to succeed in 
                future startup competitions. And at the Summer Night, we not only built new connections but also won the 
                AZ quiz, competing against a team from the Prague startup Elredo. The experience proved how well we can 
                work together, and it led to Elredo's support for our crowdfunding campaign.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/1.webp" alt="JICnights and Student Meetups" className="  rounded-lg" />
              </div>
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/2.webp" alt="JICnights and Student Meetups" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Velvet Innovation Meetups */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Velvet Innovation Meetups
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-4">
                In the fall of 2024, when the founders were running a recruiting campaign to set up the iGEM Brno Team, one 
                of the sessions where Matej tried to indirectly "lure" curious and ambitious students was the Velvet 
                Innovation Meetup — a gathering of innovators from the South Moravian region.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At that time, even though he didn't recruit any students there, he won the Pitch of the Night Prize. 
                Symbolically, a year later Matej returned to pitch at the Velvet Innovation Meetup again — this time with a 
                fully assembled team that had been hustling for the past nine months in labs, workshops, and greenhouses 
                to make duckweed programmable and succeed in iGEM.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This time, the call to action was clear: the young, bright minds of Brno were going to compete at the 
                "Olympics of Biotech" — the iGEM Grand Jamboree — not only to win, but to make their universities and their 
                hometown Brno proud. :) The message was that the name Mendel (who did his pivotal work on genetics in 
                Brno) would not be the last thing the SynBio world connects with the city. :) Matej once again won the Pitch 
                of the Evening and secured many contributions to our crowdfunding campaign. :)
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/3.webp" alt="JICnights and Student Meetups" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Lifbee Summer Gathering */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Lifbee Summer Gathering
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                The Lifbee Community, built around the biotech-focused Lifbee Academy (where our project Powergreens 
                won us some funding), organizes an annual summer gathering on the beautiful rooftop terrace of Spot. 
                Matej was there to spread the word to even more people about the cool and impactful things Czech and 
                Slovak students are doing in Brno. :)
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/4.webp" alt="Lifbee Gathering" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Nexteria Kick-off pitch contest */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Nexteria Kick-off pitch contest
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-4">
                Nexteria's mission is to shape leaders who drive positive change in society through their actions. They are 
                building a vibrant community of proactive young people who regularly come together at inspiring offline 
                events. Three of our teammates – Matej, Pravo, and Peťo – are part of their 3-year program, the Nexteria 
                Leadership Academy (NLA).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                On September 13, the new NLA academic year kicked off with an exciting event that featured a pitch contest 
                showcasing projects created by current students and alumni of the program. Our very own project, 
                NitroDuck, was pitched by Pravo — and it won!
              </p>
              <p className="text-gray-700 leading-relaxed">
                And the prize? The chance to organize our very own hackathon. A victory that was absolutely worth it!
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/5.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Tech Execs Boat Networking */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Tech Execs Boat Networking
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                Gathering of CTOs and CSOs from Brno's tech-oriented companies took place a boat cruising Brno 
                Dam! iGEM Brno took part, represented by Matej and Martin, to share the vision and courage of 
                students in Brno working in (bio)tech and competing in the world's largest SynBio competition — 
                iGEM. For us iGEMers, it was a very special moment: pitching for the first time without any slides, to 
                an audience interested in how our project works from a technical point of view. The after-pitch 
                discussions were very inspiring.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/6.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Prague.bio Conference */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Prague.bio Conference
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-4">
                Many experts still say that biotech in Europe is struggling and that real opportunities are only in the 
                United States. But in Central Europe, a different picture is starting to appear. Startups like Sensible 
                Biotechnologies and funds such as ZAKA VC, Tensor Ventures, and KAYA VC show that progress is 
                possible despite limited funding and strict regulations. The Prague.bio conference adds to this by 
                connecting scientists, entrepreneurs, and investors to strengthen the biotech scene. This year's 
                event is another step in showing that Central European biotech has real potential to grow.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Thanks to Petra Kinzlová, Jiří Fusek (Prague.bio), and Dusan Brinzanik from IOCB Tech Foundation 
                (Nadační fond IOCB Tech), Matus from iGEM Brno was able to attend, connect with professionals in 
                the region, and secure a partnership with DIANA Biotechnologies while also sparking valuable 
                discussions with Marian Kupulčák from Sensible, Ján Faflík from Tensor, Miloš Dendis from Garage 
                Angels, and many other experts.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/7.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Czech SynBio Node Kick-off */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Czech SynBio Node Kick-off
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                Czech SynBio Node is a new platform founded by our PI, Pavel Dvořák, to bring together Czech synthetic
                biology stakeholders – from group leaders and early-career researchers to entrepreneurs. At the kick-off
                event, we enjoyed a series of fascinating talks from leading SynBio PIs, including Klára Hlouchová, Jiří
                Záhradník, Karel Říha, Martin Marek, Tomáš Pluskal, Karel Sedlář, and David Šafránek, We also gained
                valuable insights into technology transfer and iGEM-to-business success from Hynek Kasl of Sampling
                Human. We are very grateful for the chance to present our project to such inspiring scientists and to be part
                of the very beginning of something truly exciting.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/8.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Communicating Science Section Header */}
        <div id='communication' className="bg-gradient-to-r from-green-500 to-teal-500 text-white py-12 px-8 rounded-lg mb-12 text-center">
          <h1 className="text-4xl font-bold" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Communicating Science
          </h1>
        </div>

        {/* Lecture at Czech Hopes Conference */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Lecture at Czech Hopes Conference
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                The Czech Hopes Conference is the largest event for high school students in the country, bringing together 
                inspiring speakers who share their passions, ideas, career paths and life journeys. The fourth edition took 
                place on 6–7 February 2025 at the Faculty of Medicine, Masaryk University, Brno. Our iGEM Brno team was 
                represented by former member Majdi and her outstanding lecture entitled "SynBio and Biotech: The Future 
                That Starts Now", introducing genetic engineering, its potential to shape the future, and the iGEM 
                competition.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/9.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Talk at Brno Lecture Night - BrNOC */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Talk at Brno Lecture Night - BrNOC
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-4">
                A popular educational format among Czech youth is the "lecture night." Following the core motto "students 
                for students", a single evening brings together a variety of short lectures from different fields, delivered by 
                young people. The format encourages broadening horizons, sharing experiences, and even sparking new 
                hobbies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Following the success of her talk at the Czech Hopes Conference, Majdi decided to participate in the Brno 
                Lecture Night, held on 21–22 February 2025 at the tř. Kpt. Jaroše Grammar School in Brno. There, she once 
                again delivered her one-hour lecture titled "SynBio and Biotech: The Future That Starts Now."
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/10.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Easter Duckweed Hunt */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Easter Duckweed Hunt
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                Science is fun! To showcase this, we joined forces with the Society of Natural Scientists of Masaryk University, 
                known for its annual Scientific Easter Hunt, and created a special Easter Duckweed Hunt. Our skilfull 
                colleagues from the Society crocheted 40 duckweed keychains, each paired with an educational note with a 
                link to both the Society and the iGEM Brno project. Between 14–17 April 2025, just before the Czech Easter 
                holidays, the keychains were hidden across the Brno Botanical Garden and two Faculty of Science campuses. 
                Students, researchers, staff, and visitors who found them shared their joy online.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/11.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Stand at the MUNI Day 2025 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Stand at the MUNI Day 2025
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                The third annual MUNI DAY, a University-wide meeting of students, staff and alumni, set the whole 
                Brno-Bohunice University Campus in motion. On Wednesday 14 May, almost 2,000 visitors experienced a day 
                full of sports, accompanying cultural and educational programmes and informal meetings. And the iGEM 
                Brno team was not to be missed.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                At our stand, we aimed to introduce our project through all five senses. While listening to all the fascinating 
                facts about duckweed, all visitors could take a close look at the cultivation process, feel the tiny plants 
                floating on the water's surface with their own hands, and even sample some delicious duckweed cookies 
                and canapés. To wrap things up, visitors tested their knowledge in our mini quiz.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/12.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Lecture at Běstvina summer camp */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Lecture at Běstvina summer camp
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                Běstvina is just a small village in the heart of Czechia. However, every summer it turns into a gathering place 
                for the country's top-performing high-school students in the Biology and Chemistry Olympiads. For two 
                weeks they immerse themselves in expert lectures, fieldwork and practical lab sessions, all aimed at 
                deepening their knowledge and nurturing their passion for science. In the evenings they relax with games, 
                socialise, or attend optional popular-science talks. This year one of those talks was given by the iGEM Brno 
                team. Our PI Pavel opened with an introduction to the world of synthetic biology, and then Matej, Miro and 
                Matúš presented our project along with the iGEM competition itself. After all, there's no better place to spark 
                the next Czech iGEM generation than right here in Běstvina.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/13.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Stand at Mendel festival 2025 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Stand at Mendel festival 2025
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                The Mendel Festival in Brno is a summer event celebrating the legacy of Gregor Johann Mendel, the father of 
                genetics, who carried out his famous plant experiments here. The festival brings together science, art and 
                culture through lectures, concerts and exhibitions. Our connection with Mendel is rooted in the city, our work 
                with plants, and a shared curiosity for the secrets of nature, making the festival an event we simply couldn't 
                miss. For the first time, our stand featured a poster that allowed us to explain the core of the Nitroduck 
                project more clearly. Visitors could once again take part in a quiz or sample duckweed-based snacks. 
                Children collectively coloured a large poster of a duckweed colony, which we later scanned and sent as 
                postcards to contributors of our crowdfunding campaign.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/14png.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Stand at Festival of Science and Technology */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Stand at Festival of Science and Technology
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                The Festival of Science and Technology in Brno is an annual weekend event that presents scientific fields, 
                technology, and research to the public in an engaging way. Visitors can try out interactive experiments, meet 
                experts from both local universities and private sector, and discover how science influence our everyday 
                lives.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                This year it took place over the weekend of 5–7 September at the Brno Exhibition Centre, and the iGEM Brno 
                stand was once again an essential part of the event. The aim this time was not only to introduce visitors to 
                the magical little plant called duckweed, but also to spread the word about our newly launched 
                crowdfunding campaign. Over the course of the weekend, we managed to connect with hundreds of visitors 
                of all ages.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/15.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Lecture at K-SCUK summer camp */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Lecture at K-SCUK summer camp
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                K-SCUK is a joint camp for participants of Masaryk University's IBIS and KSI seminars for highschool 
                students. Alongside deepening knowledge in biology and informatics, it offers a rich experiential programme 
                to ensure that everyone, whether biologist or computer scientist, has a great time.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                At this year's K-SCUK, held from 7–13 September, Hanka represented the team. She gave genetic 
                modification enthusiasts a detailed insight into the challenges of plant synthetic biology, introduced 
                duckweed, and explained how it could support agriculture in tackling its current challenges. After the lecture, 
                a long and fruitful discussion followed, during which we even delved into issues surrounding GMOs and the 
                EU's stance on genetic modifications.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/16.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Garden party at SCI and ECON MUNI */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Garden party at SCI and ECON MUNI
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                The start of the semester at Masaryk University's faculties is traditionally marked by an informal gathering of 
                students, faculty, alumni, and friends of the University called the garden party. The event mainly revolves 
                around socialising with a drink in hand while listening to traditional cimbalom music. Student clubs from 
                each faculty also present themselves, helping new students find a community to join.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                The iGEM Brno team attended to showcase our work at the garden parties of the Faculty of Science and the 
                Faculty of Economics, from which some of our members come. The main goal was not only to get 
                recognised by the key university staff members and further share our ongoing crowdfunding campaign, but 
                also to connect with younger students and introduce them to the iGEM competition, perhaps inspiring the 
                next generation of iGEMers.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/17.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Stand at Forbes Next Big Thing conference */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Stand at Forbes Next Big Thing conference
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                In the middle of September, we were lucky enough to secure a spot at the Forbes Next Big Thing conference. 
                It is a platform to share bold visions and groundbreaking ideas that could reshape technology, business, and 
                society - ambitions, that drive the Nitroduck project. We listened to inspirational lectures from the likes of 
                Tomáš Čermák, the winner of the Earth Prize 2025, Michal Závišek from Honeywell Aerospace Europe or 
                Michal Stachník from Microsoft. To present our project, we brought our cultivator to the beautiful spaces of 
                Faint Gallery, and talked with young scientists, engineers, psychologists, entrepreneurs and many others. 
                Particularly interesting was our meeting with fellow hydroponic enthusiast, Tereza Nalezená, who shared 
                with us her vision of green rooftops covered in lettuce.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/18.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Stand at Dean's barbecue */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Stand at Dean's barbecue
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                The Deans of the the Faculties of Medicine, Science, Sports Studies, and Pharmacy at Masaryk University, the 
                four faculties located in one extensive campus in Brno Bohunice, annually organise an informal event for 
                students to meet and network. Between conversations, enjoying grilled delicacies, and taking part in games 
                and sports activities, students once again have the chance to get to know the student clubs active on 
                campus. Just as at the Garden party, we attended this event to introduce our peers to the world of synthetic 
                biology, the Nitroduck project, and the iGEM competition as a whole.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/19.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Researchers' Night in Brno and Bratislava */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Researchers' Night in Brno and Bratislava
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                Researchers' Night is a unique evening when hundreds of normally inaccessible science buildings open their 
                doors. Visitors can step into labs and lecture halls, witness spectacular experiments, explore cutting-edge 
                topics, and discover a passion for science alongside researchers eager to share their world.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                As the iGEM Brno team is truly eager to share our work, we decided to take part in Researchers' Night, held 
                on 26 September 2025, in two cities at once – Brno and Bratislava. At both venues, visitors once again had 
                the chance to taste our delicious duckweed cookies, view several duckweed species floating on the water's 
                surface, and contribute to our crowdfunding campaign.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/20.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        

        {/* Cultivating Community Section Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-12 px-8 rounded-lg mb-12 text-center">
          <h1 className="text-4xl font-bold" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Cultivating Community
          </h1>
        </div>

         {/* Header */}
      <div id='3hparty' className="py-16 px-6">
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


        {/* Connecting w/ iGEMers Section Header */}
        <div id='igemmeetup' className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-12 px-8 rounded-lg mb-12 text-center">
          <h1 className="text-4xl font-bold" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Connecting w/ iGEMers
          </h1>
        </div>

        {/* BFH European Meetup */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            BFH European Meetup
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-4">
                It would have been a real shame to miss the largest meet-up of European iGEM teams – the second BFH 
                European Meet-up in Frankfurt a. M., Germany, held from May 23 - 25, 2025. The event's main themes – 
                Unite, Innovate, Inspire – truly resonated with us, and from those three days in Frankfurt we brought back to 
                Brno a wealth of valuable lessons.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                UNITE…with others
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We had the opportunity to meet 24 other iGEM teams, getting to know their members and learning about 
                their projects. In addition to this year's teams, we were lucky to speak with the Overgrad Grand Prize Winner 
                2024 – Team Marburg. The conversations were long and inspiring, and the result? You can read about how 
                iGEM Marburg Team helped us at Human Practices Page.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                INNOVATE…project presentation strategy
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                From problem to SynBio solution – or from SynBio to the problem we aim to solve? Our project is complex, 
                and sometimes we lose the listener halfway through the presentation. How to prevent that? Finding the 
                answer to this question turned out to be one of the two most valuable lessons we brought back from 
                Frankfurt.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                INSPIRE…by others
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Preparation is key. We know that some of the teams who beat us and walked away with prizes had been 
                preparing for weeks. We underestimated the preparation, and instead of a prize, we brought back a valuable 
                lesson.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/21.webp" alt="Nexteria Kick-off2" className="  rounded-lg" />
              </div>
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/22.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* PRAGUE meet-up */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            PRAGUE meet-up
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-4">
                A team we once inspired to join the competition was now hosting their very own meet-up. In a city just two 
                hours from Brno? There was no way we could miss that!
              </p>
              <p className="text-gray-700 leading-relaxed">
                The Prague Meet-up took place on September 12 - 13, 2025, in the beautiful setting of IOCB Prague. Over two 
                days, we enjoyed inspiring talks from people who connect science with business, and spent time networking 
                with other iGEM teams on the rooftop — with breathtaking views of the city, a barbecue, and even a few 
                rounds of card games.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                During a 15-minute presentation, we introduced our project and received encouraging feedback, along with a 
                dose of constructive criticism that we are eager to put into practice as we prepare for Paris.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/23.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Podcast with ABOA team */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Podcast with ABOA team
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed mb-4">
                In the spring semester of 2025, Tereza from our team took part in an Erasmus+ exchange at the University of 
                Turku in Finland, where she connected with the local iGEM team, ABOA. This encounter later inspired the 
                idea for a joint podcast episode. Together, with three members of the ABOA team, they discussed how both 
                projects began, how responsibilities are divided within the teams, and the different strategies each is 
                developing to reach their goals.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You can listen to the full ABOA Archives podcast episode with Tereza on <a style={{color: '#3b82f6', textDecoration: 'underline'}} target='_blank' href='https://open.spotify.com/episode/7M5fEDIMieV2dH6tcS3Myr?si=763f5c6f44544899'>Spotify</a>.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/24.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Circulating online Section Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-12 px-8 rounded-lg mb-12 text-center">
          <h1 className="text-4xl font-bold" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Circulating online
          </h1>
        </div>

        {/* Circulating online intro */}
        <section className="mb-12">
          <p className="text-gray-700 leading-relaxed text-lg">
            Today, people spend on average more than two hours a day on social media. We embraced this space as a 
            natural platform to share our project – from making science accessible to the public to building valuable 
            partnerships.
          </p>
        </section>

        {/* Instagram */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Instagram
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <>
                <p style={{ marginBottom: '1rem' }}>
                  <span style={{ fontWeight: 400 }}>On Instagram, </span>
                  <a style={{color: '#3b82f6', textDecoration: 'underline'}} target='_blank' href="https://www.instagram.com/igem_brno/">
                    <span style={{ fontWeight: 400 }}>iGEM Brno</span>
                  </a>
                  <span style={{ fontWeight: 400 }}>
                    {" "}
                    connected with a broad and younger audience through visually engaging
                    content. Photos, short videos, and infographics helped us showcase our
                    work in a clear and appealing way. By sharing behind-the-scenes glimpses
                    of our team and lab, we gave followers an authentic look at what it means
                    to be part of iGEM – and why science is so exciting.
                  </span>
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  <span style={{ fontWeight: 400 }}>
                    We teamed up with dozens of science communicators to help raise awareness
                    of SynBio even faster. We gained 750 followers and up to 180 000
                    impressions!{" "}
                  </span>
                </p>
              </>

            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/25.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* LinkedIn */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            LinkedIn
          </h2>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed">
                LinkedIn of <a style={{color: '#3b82f6', textDecoration: 'underline'}} target='_blank' href="https://www.linkedin.com/company/igembrno/">iGEM Brno</a> served as our professional stage to present the project in a more expert setting. It
                allowed us to reach scientists, thank our partners, and strengthen our team's reputation within the academic 
                and professional community.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                We gained 435 followers and up to 20 000 impressions!
              </p>
            </div>
            <div className="md:w-1/3">
          
          </div>
          </div>
          
        </section>

        {/* Media */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Media
          </h2>
          
          <h3 className="text-2xl font-bold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Tuned In: Our Project in University Media
          </h3>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <>
                <p style={{ marginBottom: '1rem' }}>
                  <span style={{ fontWeight: 400 }}>
                    In April 2025 we managed to partner up with{" "}
                  </span>
                  <a style={{color: '#3b82f6', textDecoration: 'underline'}} target='_blank' href="https://youtu.be/eELDWK--g2U?si=bI57_H19ox2hweJD">
                    <span style={{ fontWeight: 400 }}>Stisk Online</span>
                  </a>
                  <span style={{ fontWeight: 400 }}>
                    {" "}
                    - student multimedia newspaper and{" "}
                  </span>
                  <a style={{color: '#3b82f6', textDecoration: 'underline'}} target='_blank' href="https://youtu.be/EdtBBsQFri4?si=I_ObJwaHtYgVfukB">
                    <span style={{ fontWeight: 400 }}>MUNI TV</span>
                  </a>
                  <span style={{ fontWeight: 400 }}>
                    {" "}
                    - university-wide student online television. In&nbsp; a short report, we
                    introduced our project, took the audience into our laboratory, gave a
                    glimpse behind the scenes of duckweed cultivation and highlighted the
                    importance of our work for sustainable agriculture.&nbsp;
                  </span>
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  <span style={{ fontWeight: 400 }}>
                    In June, our project was featured in Magazine M, the news portal of
                    Masaryk University.{" "}
                  </span>
                  <a style={{color: '#3b82f6', textDecoration: 'underline'}} target='_blank' href="https://www.em.muni.cz/student/18118">
                    <span style={{ fontWeight: 400 }}>The article </span>
                  </a>
                  <span style={{ fontWeight: 400 }}>
                    was based on an interview with Matúš, Barča, and Zdenka, who shared
                    insights about our work and its vision for the future.
                  </span>
                </p>

                <p style={{ marginBottom: '1rem' }}>
                  As our project is also related to engineering, we were also featured in <a style={{color: '#3b82f6', textDecoration: 'underline'}} target='_blank' href="https://www.fme.vutbr.cz/fakulta/zfsi/75795">BUT Faculty of Mechanical Engineering news</a>, where our teammates Pravo and Andrej study. Article highlighted the interdisciplinary nature of our team and how a hardware is applied in our synthetic biology project.
                </p>
              </>

            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/27.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Nurtured by Our SynBio Community */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Nurtured by Our SynBio Community
          </h3>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <p>
                <span style={{ fontWeight: 400 }}>
                  At the very beginning of our iGEM journey, the Czech SynBio Node community
                  shared information about the goals of our project on its{" "}
                </span>
                <a style={{color: '#3b82f6', textDecoration: 'underline'}} target='_blank' href="https://czechsynbionode.cz/igem-returns-to-brno/">
                  <span style={{ fontWeight: 400 }}>website</span>
                </a>
                <span style={{ fontWeight: 400 }}>
                  . In August, our team was mentioned in an{" "}
                </span>
                <a style={{color: '#3b82f6', textDecoration: 'underline'}} target='_blank' href="https://www.biotrin.cz/igem-svetova-soutez-v-synteticke-biologii-a-nase-ceske-uspechy/">
                  <span style={{ fontWeight: 400 }}>article</span>
                </a>
                <span style={{ fontWeight: 400 }}>
                  {" "}
                  about iGEM in the Czech Republic by BIOTRIN, an association supporting the
                  promotion and development of biotechnology. The purpose of the association
                  is to provide both the general public and professionals with information
                  about scientific research and other findings of modern technologies, mainly
                  in connection with GMOs and NBTs.
                </span>
              </p>

            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/26.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* The Buzz Around Our Crowdfunding Campaign */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            The Buzz Around Our Crowdfunding Campaign
          </h3>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <>
                <p style={{ marginTop: '1rem' }}>
                  <span style={{ marginTop: '1rem', fontWeight: 400 }}>
                    To boost the success of our crowdfunding campaign{" "}
                  </span>
                  <strong>Mendel 2.0</strong>
                  <span style={{ fontWeight: 400 }}>
                    , we reached out to journalists who were inspired by our project’s
                    mission. Thanks to their interest, our story quickly gained media
                    attention across Slovakia and the Czech Republic.
                  </span>
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <span style={{ marginTop: '1rem', fontWeight: 400 }}>The campaign launched on </span>
                  <strong>September 3rd</strong>
                  <span style={{ fontWeight: 400 }}>
                    , with the first article published the same day in the Slovak daily{" "}
                  </span>
                  <a style={{color: '#3b82f6', textDecoration: 'underline'}} target='_blank' href="https://www.startitup.sk/mladi-vedci-odisli-zo-slovenska-v-brne-vyvijaju-revolucny-projekt-ktory-moze-zmenit-buducnost-polnohospodarstva/">
                    <em>
                      <span style={{ fontWeight: 400 }}>Startitup</span>
                    </em>
                  </a>
                  <span style={{ fontWeight: 400 }}>. A day later, </span>
                  <em>
                    <span style={{ fontWeight: 400 }}>Hospodářské noviny</span>
                  </em>
                  <span style={{ fontWeight: 400 }}>
                    {" "}
                    in the Czech Republic wrote about the
                  </span>
                  <a style={{color: '#3b82f6', textDecoration: 'underline'}} target='_blank' href="https://domaci.hn.cz/c1-67782400-zabincova-mafie-studenti-z-brna-vyvinuli-prevratne-krmivo-na-mezinarodni-soutez-vybiraji-od-darcu">
                    <span style={{ fontWeight: 400 }}> “Duckweed Mafia.”</span>
                  </a>
                  <span style={{ fontWeight: 400 }}>
                    {" "}
                    From there, the story of a motivated Czechoslovak team aiming to spotlight
                    local science began spreading fast.
                  </span>
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <span style={{ fontWeight: 400 }}>On </span>
                  <strong>September 16th</strong>
                  <span style={{ fontWeight: 400 }}>
                    , our teammates Matúš and Miro appeared live on{" "}
                  </span>
                  <a style={{color: '#3b82f6', textDecoration: 'underline'}} target='_blank' href="https://www.stvr.sk/televizia/archiv/14026/554573#2714">
                    <span style={{ fontWeight: 400 }}>Slovak Television’s morning news</span>
                  </a>
                  <span style={{ fontWeight: 400 }}>
                    . Soon after, Czech Radio prepared an interview with Klárka, Matúš, Jonáš,
                    and Marko, which aired on{" "}
                  </span>
                  <a style={{color: '#3b82f6', textDecoration: 'underline'}} target='_blank' href="https://radiozurnal.rozhlas.cz/okrehkem-proti-odlesnovani-nenapadna-rostlina-z-hladin-rybniku-se-mohla-zmenit-9560479">
                    <em>
                      <span style={{ fontWeight: 400 }}>Radiožurnál</span>
                    </em>
                  </a>
                  <span style={{ fontWeight: 400 }}> on </span>
                  <strong>September 27th</strong>
                  <span style={{ fontWeight: 400 }}>
                    . The campaign and its success were also covered by{" "}
                  </span>
                  <a style={{color: '#3b82f6', textDecoration: 'underline'}} target='_blank' href="https://ekolist.cz/cz/zpravodajstvi/zpravy/studenti-chteji-na-soutezi-v-parizi-predstavit-zabinec-penize-vybrali-rychle">
                    <em>
                      <span style={{ fontWeight: 400 }}>Ekolist</span>
                    </em>
                  </a>
                  <span style={{ fontWeight: 400 }}>
                    , a Czech online daily focused on the environment, ecology, and
                    sustainability.
                  </span>
                </p>
              </>

            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/28.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>

              
              
            
            </div>
          </div>
        </section>

        {/* iGEM Brno in The Duckweed Forum */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            iGEM Brno in The Duckweed Forum
          </h3>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <>
                <p style={{ marginTop: '1rem' }}>
                  <span style={{ fontWeight: 400 }}>
                    Duckweed Forum is a quarterly journal published by the International
                    Steering Committee on Duckweed Research and Applications (ISCDRA). It
                    features expert articles, updates on ongoing projects, community news, and
                    reviews of key publications, making it a central source of information for
                    anyone interested in duckweed.
                  </span>
                </p>
                <p style={{ marginTop: '1rem' }}>
                  <span style={{ fontWeight: 400 }}>One of the issues included an </span>
                  <a style={{color: '#3b82f6', textDecoration: 'underline'}} target='_blank' href="http://www.ruduckweed.org/uploads/1/0/8/9/10896289/duckweed_forum_issue_50.pdf">
                    <span style={{ fontWeight: 400 }}>interview with our team</span>
                  </a>
                  <span style={{ fontWeight: 400 }}>
                    , conducted by Tsipi Shoham, PhD – CEO and Co-founder of GreenOnyx (the
                    main sponsor of Duckweed Hackers). We are grateful that this interview
                    introduced our work to the global duckweed community — for the first, but
                    hopefully not the last, time.
                  </span>
                </p>
              </>

            </div>
            <div className="md:w-1/3">
              <div className=" h-64 rounded-lg flex items-center justify-center">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/29.webp" alt="Nexteria Kick-off" className="  rounded-lg" />
              </div>
            </div>
          </div>
        </section>

        <section id='media' className="mt-32 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Media Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center">
              <div className=" h-32 rounded-lg flex items-center justify-center mb-4">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/bottom/munitv.webp" alt="Nexteria Kick-off" className="object-cover h-32 w-64 rounded-lg" />
              </div>
              <h4 className="font-bold mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}><a target='_blank' href="https://youtu.be/EdtBBsQFri4?si=I_ObJwaHtYgVfukB">Interview for MUNI TV</a></h4>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center">
              <div className=" h-32 rounded-lg flex items-center justify-center mb-4">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/bottom/muni.webp" alt="Nexteria Kick-off" className="object-cover h-32 w-64 rounded-lg" />
              </div>
              <h4 className="font-bold mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}><a target='_blank' href="https://www.em.muni.cz/student/18118">Article in Magazine M</a></h4>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg text-center">
              <div className=" h-32 rounded-lg flex items-center justify-center mb-4">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/bottom/forum.webp" alt="Nexteria Kick-off" className="object-cover h-32 w-64 rounded-lg" />
              </div>
              <h4 className="font-bold mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}><a target='_blank' href="http://www.ruduckweed.org/uploads/1/0/8/9/10896289/duckweed_forum_issue_50.pdf">Article in Duckweed Forum</a></h4>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg text-center">
              <div className=" h-32 rounded-lg flex items-center justify-center mb-4">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/bottom/radio.webp" alt="Nexteria Kick-off" className="object-cover h-32 w-64 rounded-lg" />
              </div>
              <h4 className="font-bold mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}><a target='_blank' href="https://radiozurnal.rozhlas.cz/okrehkem-proti-odlesnovani-nenapadna-rostlina-z-hladin-rybniku-se-mohla-zmenit-9560479">Featured on Radiožurnál</a></h4>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg text-center">
              <div className=" h-32 rounded-lg flex items-center justify-center mb-4">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/bottom/ekolist.webp" alt="Nexteria Kick-off" className="object-cover h-32 w-64 rounded-lg" />
              </div>
              <h4 className="font-bold mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}><a target='_blank' href="https://ekolist.cz/cz/zpravodajstvi/zpravy/studenti-chteji-na-soutezi-v-parizi-predstavit-zabinec-penize-vybrali-rychle">Article in Ekolist</a></h4>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg text-center">
              <div className=" h-32 rounded-lg flex items-center justify-center mb-4">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/bottom/rtvs.webp" alt="Nexteria Kick-off" className="object-cover h-32 w-64 rounded-lg" />
              </div>
              <h4 className="font-bold mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}><a target='_blank' href="https://www.stvr.sk/televizia/archiv/14026/554573#2714">Slovak Television Morning News</a></h4>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg text-center">
              <div className=" h-32 rounded-lg flex items-center justify-center mb-4">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/bottom/startitup.webp" alt="Nexteria Kick-off" className="object-cover h-32 w-64 rounded-lg" />
              </div>
              <h4 className="font-bold mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}><a target='_blank' href="https://www.startitup.sk/mladi-vedci-odisli-zo-slovenska-v-brne-vyvijaju-revolucny-projekt-ktory-moze-zmenit-buducnost-polnohospodarstva/">Featured in Startit up</a></h4>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg text-center">
              <div className=" h-32 rounded-lg flex items-center justify-center mb-4">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/bottom/biotron.webp" alt="Nexteria Kick-off" className="object-cover h-32 w-64 rounded-lg" />
              </div>
              <h4 className="font-bold mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}><a target='_blank' href="https://www.biotrin.cz/igem-svetova-soutez-v-synteticke-biologii-a-nase-ceske-uspechy/">Appearance in Biotron</a></h4>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg text-center">
              <div className=" h-32 rounded-lg flex items-center justify-center mb-4">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/bottom/hn.webp" alt="Nexteria Kick-off" className="object-cover h-32 w-64 rounded-lg" />
              </div>
              <h4 className="font-bold mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}><a target='_blank' href="https://domaci.hn.cz/c1-67782400-zabincova-mafie-studenti-z-brna-vyvinuli-prevratne-krmivo-na-mezinarodni-soutez-vybiraji-od-darcu">Article in Hospodářské noviny</a></h4>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-lg text-center">
              <div className=" h-32 rounded-lg flex items-center justify-center mb-4">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/bottom/sn-mka-obrazovky-2025-10-01-205522.webp" alt="Nexteria Kick-off" className="object-cover h-32 w-64 rounded-lg" />
              </div>
              <h4 className="font-bold mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}><a target='_blank' href="https://www.fme.vutbr.cz/fakulta/zfsi/75795">BUT FME News</a></h4>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-lg text-center">
              <div className=" h-32 rounded-lg flex items-center justify-center mb-4">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/bottom/stisk.webp" alt="Nexteria Kick-off" className="object-cover h-32 w-64 rounded-lg" />
              </div>
              <h4 className="font-bold mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}><a target='_blank' href="https://youtu.be/eELDWK--g2U?si=bI57_H19ox2hweJD">Stisk online interview</a></h4>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-lg text-center">
              <div className=" h-32 rounded-lg flex items-center justify-center mb-4">
                <img src="https://static.igem.wiki/teams/5642/images/engagement/outreach/allevents/bottom/sybnode.webp" alt="Nexteria Kick-off" className="object-cover h-32 w-64 rounded-lg" />
              </div>
              <h4 className="font-bold mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}><a target='_blank' href="https://czechsynbionode.cz/igem-returns-to-brno/">SynbioNode notice</a></h4>
            </div>
          </div>
        </section>

        {/* Timeline Grid at bottom */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
            Event Timeline
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>JIC Christmas Student Meetup</h4>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Velvet Innovation Meetups</h4>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Lifbee Summer Gathering</h4>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Nexteria Kick-off pitch contest</h4>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Tech Execs Boat Networking</h4>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>JIC Summer Student Meetup</h4>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Czech SynBio Node Kick-off</h4>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Prague.bio Conference</h4>
            </div>
            <div className="bg-red-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Talk at Brno Lecture Night</h4>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Easter Duckweed Hunt</h4>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Stand at the MUNI Day 2025</h4>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Lecture at Běstvina summer camp</h4>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Stand at Mendel festival 2025</h4>
            </div>
            <div className="bg-cyan-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Stand at Festival of Science and Technology</h4>
            </div>
            <div className="bg-lime-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Lecture at K-SCUK summer camp</h4>
            </div>
            <div className="bg-emerald-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Garden party at SCI and ECON MUNI</h4>
            </div>
            <div className="bg-violet-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Stand at Forbes Next Big Thing conference</h4>
            </div>
            <div className="bg-rose-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Researchers' Night in Brno</h4>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Researchers' Night in Bratislava</h4>
            </div>
            <div className="bg-sky-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Recording podcast with ABOA team</h4>
            </div>
            <div className="bg-stone-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>PRAGUE meet-up</h4>
            </div>
            <div className="bg-zinc-50 p-4 rounded-lg text-center">
              <h4 className="font-bold text-sm mb-2" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Our stand at BFH European Meetup</h4>
            </div>
          </div>
        </section>

        

      </div>
    </div>
    );
};
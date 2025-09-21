import React, { useState, useEffect } from 'react';

const DuckweedMafiaTeam = () => {
  const [currentSection, setCurrentSection] = useState('Founders');
  const [leftColumnFixed, setLeftColumnFixed] = useState(false);
  const [showTeamSection, setShowTeamSection] = useState(false);

  const scrollToSection = (sectionTitle) => {
    const windowHeight = window.innerHeight;
    let totalMembers = 0;
    
    // Calculate the position of the target section
    for (const section of teamSections) {
      if (section.title === sectionTitle) {
        // Add one viewport for intro + accumulated members * 0.6 (since cards are 60vh)
        const targetPosition = windowHeight + (totalMembers * windowHeight * 0.6);
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        break;
      }
      totalMembers += section.members.length;
    }
  };

  const teamSections = [
    {
      title: "Founders",
      members: [
        {
          name: "Matej Zámečník",
          role: "visionary working in lab, transformation specialist, excellent negotiator, experimental biology of plants graduate",
          description: "Matěj is a visionary at the intersection of biotechnology, synthetic biology, and entrepreneurship. A hacker and techno-optimist, he seeks to delay entropy, enhance complexity, and promote sustainability by upgrading biological systems and advancing decentralized technologies. Calling himself a 'molecular horticulturist,' he works on making plants truly scalable. Passionate about biohacking, Matěj blends scientific innovation with an adventurous spirit, aspiring to merge high-tech progress with the resilience of nature"
        },
        {
          name: "Matúš Grieš",
          role: "Lab master, chief Promoter, the peacekeeper, experimental biology of plants student",
          description: "Matúš always tries to balance out Matej so the team doesn't get fed up. And he gets balanced by Miro so they don't do cool stuff that does not make sense. When he puts on his red glasses, Chinese folks start asking for autographs. Besides iGEM, sleeping and eating, he grinds on an athletic track and sometimes pretends to play one of his four instruments."
        },
        {
          name: "Miro Rosputinský",
          role: "Lab buddy, cultivation master, king of copywriting, experimental biology of plants student",
          description: "Miro's life has been mostly iGEM, but outside of it, he is drawn to stories—whether told through a well-written paper, a book, or a film. He is an avid Wikipedia deep-diver, a puzzle and quiz enthusiast, and a principled opponent of memorizing chess openings."
        },
        {
          name: "Zdeňka Vilhanová",
          role: "head of offline events, junior-ish designer, duckweed dish wizard, biochemistry student",
          description: "Zdenka is the heart of our Duckweed Hipsters team – a brilliant negotiator, a true friend, and the one who always gets things done. Whether she's baking her legendary duckweed cookies or offering tea with a smile, she keeps everything running smoothly. Beyond iGEM, she works on a fascinating project with hydrogen-eating bacteria. Calm, clever, and endlessly kind – we couldn't wish for a better teammate!"
        }
      ]
    },
    {
      title: "Hackers",
      members: [
        {
          name: "Hanka Slámová",
          role: "head of instagram. science communication, bit of a lab rat, environment and health student",
          description: "Always on the move – whether it's across countries or between bold ideas. A biohacking enthusiast who blends science with everyday life, and a music lover often found with a guitar in hand, singing, or rehearsing for the next play. Passionate about exploring new ways to optimize both experiments and human potential. Outside of iGEM, she dives deep into endocrine disruption and neurotoxicity research"
        },
        {
          name: "Terka Slančíková",
          role: "lab master, wikies in process, toxicology student",
          description: "Terka's greatest inspiration is nature in all its forms. She is fascinated by the way it finds solutions with maximum efficiency and minimal materials. Keeping that sense of wonder in the back of her mind shapes both who she is and the choices she makes, personally and professionally."
        },
        {
          name: "Klárka Pěchoučková",
          role: "Lab master, promoter team bestie, molecular biology student",
          description: "Hanka believes everyone deserves to explore the wonders of science. That's why you'll often catch her giving lively talks at science fairs, devising tasks for student competitions, and sparking curiosity in young minds at summer camps. Other times, you'll find her on the dance floor, camera in hand at a mountain peak, or chilling in her favourite café. Beyond iGEM, her main research interests are environmental pollutants causing endocrine disruption."
        },
        {
          name: "Miška Prokopová",
          role: "Dry&Wet lab trainee, bioinformatics student",
          description: "In the chaotic world around me, I am trying to understand everything. Whether it's things related to science or everyday life and its events. From the hustle and bustle of everyday life, I seek peace in nature, calisthenics or meditation. Thanks to iGEM, I got involved in so many scientific activities and I intend to continue doing so. We'll see where life takes me"
        },
        {
          name: "Jonáš Pospíchal",
          role: "isolation master, TAIFR lab bro, genomic and proteomic student",
          description: "Jony is rarely idle. He enjoys gaining knowledge just as much as sharing it, whether through teaching or tutoring. Lately, being completely engrossed in iGEM, he has let some of his other hobbies – like diving – slide a bit. Alongside his commitment to plant biology as a way of helping the planet, he is equally fascinated by human biology, driven by the desire to live a long and healthy life. He still hasn't quite developed a taste for music and art, though."
        },
        {
          name: "Barča Gavendová",
          role: "Lab master, TAIFR team, biology graphics queen, molecular biology and genetics student",
          description: "Barča is seldom still. She loves nature and all kinds of outdoor sports - hiking, rock climbing, outdoor swimming - and some indoor too, like dancing. When she doesn't have the energy for that, she likes to read and eat something sweet she baked. She values nature greatly and believes biotechnology can help us protect it. In her non-iGem lab, she works on a small piece of this whole puzzle, modifying bacteria so that they can consume waste biomass."
        },
        {
          name: "Matěj Bryja",
          role: "Dry lab bestie, promoter team, bioinformatics student",
          description: "There was always something fascinating about living nature, that drived the small kid to sit down and observe what is happening around him. This fascination perserved and since I started biology related studies the small kid only digged deeper with the same curiosity. I love to spend time in nature (e.g. on summer scout camps) and to fall into the depth of my own thoughts. I also enjoy the musicality of people, even though I would not call myself a musician. You can typically see me on bicycle the whole summer."
        },
        {
          name: "Ľubo Gallo",
          role: "guy that can source almost anything, Your local lab manager substitution, biochemistry student",
          description: "When people see Ľubo crawling around lab corners, they say that he looks like a PI. Well, he's just 20. Science is his life. He spends most of his time at the lab. Even when he's on vacation, he's thinking about new projects or planning something amazing. In high school, he studied chemistry, and it stuck with him. He's just a multidisciplinary guy enjoying science. Also a professional nerd."
        }
      ]
    },
    {
      title: "Hipsters",
      members: [
        {
          name: "Peťo Schmidt",
          role: "head of linkedIn, the 'let´s sell the duckweed guy' chief email officer, economy student",
          description: "Energetic and thoughtful, he's the kind of person who leads with both heart and action. Whether he's dancing, running, or deep in a book, he's always learning and growing. A graduate of leadership academies and an active force in NGOs, he's passionate about making a real impact. He just graduated from ECON MUNI – and he's only getting started!"
        }
      ]
    },
    {
      title: "Hustlers",
      members: [
        {
          name: "Pravoslav Žilka",
          role: "Cultivator engineer. 3d modeling, faculty of mechanical engineering",
          description: "Finding elegance in complex systems, Pravo seeks patterns that reveal simplicity hidden within apparent chaos. His goal is to make use of all the remaining space and possibilities that time has to offer before the inevitable thermal dead end, turning limitations into opportunities for discovery. By embracing both the beauty of structure and the urgency of finitude, his paradigm views progress not as endless expansion, but as the art of shaping meaning and innovation within the boundaries of existence."
        },
        {
          name: "Martin Pavella",
          role: "cultivator developer, machine learning software architect",
          description: "Martin often feels torn between sacrificing everything for work and progress, and simply settling into a quiet and peaceful life. At the same time, he can't help but push himself to keep learning about how the world truly works. He is trying to figure out where he fits in it, and how he can do the most for the benefit of humanity, nature, and for the people close to him. He loves math and technology, especially the way they can make difficult problems feel so simple in hindsight."
        },
        {
          name: "Andrej Žabka",
          role: "Cultivator developer, electronics designer, CAD",
          description: "Once Andrej discovers something that sparks his curiosity, he doesn't let go – days blur into nights as he dives deep until he masters it. Drawn to the intersection of mechanics, electronics and creativity, he has worked with CNC machines, designed artistic pieces and built custom interactive systems blending engineering with storytelling. From automation and exhibition electronics to precise CAD models, he treats each task as both a technical puzzle and a chance to create something meaningful – technology as a way to give form to ideas that connect people with innovation."
        },
        {
          name: "David Kopecký",
          role: "Cultivation modelling, Machine learning engineer, philosopher",
          description: "Aiming for large-scale, long-term and sustainable success of humanity, holding ancestors proud, provide future generations with a high-tech sandbox and a clear mind. Focusing on biochemistry-related problems via a machine learning lens. Offering his creations to be broken by real-life scenarios and iteratively sharpened to the cutting-edge."
        },
        {
          name: "Anna Podmanická",
          role: "metabolic models expert, curious junior, highschool student",
          description: "Anna sees life as one big adventure full of questions worth asking. She loves learning, connecting ideas across disciplines—from math to astrobiology to environmental engineering—and especially diving into things she's not great at (yet!), like history or public speaking. She believes progress means growing wisdom together, not just power in the hands of a few. Whether she's working on her wastewater treatment project PURA, volunteering for AMAVET, or teaming up with iGEM Brno, she's happiest in curious, creative communities full of young people trying to make a difference. Her motto? If you're the smartest person in the room, you are in the wrong room:)"
        },
        {
          name: "Michal Šimčák",
          role: "cultivation master, duckweed cheff, biotechnology graduate",
          description: "Michal is a recent graduate of a master's degree in biotechnology, but he is still working at the university and is starting a doctoral study in microbiology. He is interested in nature and environmental biotechnology and wants to use science to help the Earth deal with the problems that we as humans cause it. His life has been connected with science for many years and he cannot imagine that this will ever change during his lifetime."
        },
        {
          name: "Marko Mećava",
          role: "cultivation hustler, promoters developer, proteomics and genomic student",
          description: "Balkan-tempered hedonist, passionate about science, sports and beauty, I thrive on contrasts – from extreme sports to biochemistry research. Feeling 'in between worlds' drives Marko to balance curiosity, creativity, discipline and joy. Synthetic biology excites me for its potential to solve global problems and spark innovation. Currently he is focusing on Alzheimer's and neurobiology, using stem cell models to study disease development. Beyond the lab Marko is training, running, enjoying techno, acting or working on a new venture. Ambitious, bold and bald, yet empathetic, his tattoos remind him of the contrasts that shape Marko´s life."
        },
        {
          name: "Ondřej Švanda",
          role: "botany student, media master, weedeater",
          description: "Lover of growth media preparation (it's like cooking) and making duckweeds happy and thriving. When Ondra works in flow box, Greenhouse or fytotrone he feels like on the seashore - thanks to its (for someone annoying) humming. Ondra is totally fascinated by the duckweeds' growth!"
        }
      ]
    },
    {
      title: "PIs",
      members: [
        {
          name: "Karel Říha, Ph.D.",
          role: "Senior Principal Investigator at Masaryk University and Director of Science at CEITEC",
          description: "He believes today is an extraordinary time to begin a research career and is passionate about guiding the next generation. He empowers young scientists by challenging them with the right questions to foster critical thinking. Despite a demanding schedule, he consistently finds time to offer thoughtful advice and suggest improvements to experiments, demonstrating his commitment to both science and the people who drive it forward."
        },
        {
          name: "Arturo Marí-Ordóñez, Ph.D.",
          role: "Research group leader at the Gregor Mendel Institute in Vienna",
          description: "Arturo leads a research group at the Gregor Mendel Institute in Vienna, where they study how plants detect and silence transposable elements through small RNA and chromatin-based pathways. His aim is to uncover the molecular mechanisms that safeguard genome integrity and translate these insights into broader applications in plant biology and biotechnology."
        },
        {
          name: "doc. Pavel Dvořák, Ph.D.",
          role: "Faculty member focused on synthetic biology and bioengineering",
          description: "Fostering synthetic biology and bioengineering at Masaryk University, across the Czech Republic, and beyond is my mission. Pavel believes that biology and bioengineering will not solve all of our problems, but they can solve many and make our lives more sustainable. Experiencing the beauty and diversity of nature while travelling, hiking, cycling, or simply enjoying quiet evenings on the terrace with his family assures him it is worth the effort. The enthusiasm of their talented students is what keeps him going."
        }
      ]
    },
    {
      title: "Advisors",
      members: [
        {
          name: "Helene Robert Boisivon, Ph.D.",
          role: "Plant biology researcher and advisor",
          description: "Helene believes that understanding the fundamental principles of plant life is key to addressing the greatest challenges of our time, such as climate change and food security. Although plant biology does not offer an answer to everything, it gives us powerful tools to create more resilient crops for more sustainable agriculture. Her international experience at leading European institutions has convinced her that scientific collaboration and a diversity of perspectives are essential for progress. It is the enthusiasm and curiosity of her students and team members that constantly inspire her and drive her forward."
        }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Check if we're in the intro section or team section
      // Transition happens at 50% of the intro section
      if (scrollPosition < windowHeight * 0.5) {
        setCurrentSection('Intro');
        setLeftColumnFixed(false);
        setShowTeamSection(false);
      } else {
        setShowTeamSection(true);
        setLeftColumnFixed(true);
        
        // Calculate which team section we're in based on scroll position
        // Subtract half viewport height to account for early transition
        const teamScrollPosition = scrollPosition - (windowHeight * 0.5);
        let totalMembers = 0;
        let currentSectionTitle = 'Founders';
        
        for (const section of teamSections) {
          // Use 0.6 multiplier since cards are 60vh tall
          if (teamScrollPosition < (totalMembers + section.members.length) * windowHeight * 0.6) {
            currentSectionTitle = section.title;
            break;
          }
          totalMembers += section.members.length;
        }
        
        setCurrentSection(currentSectionTitle);

        // Check if we're near the bottom of the page to unlock left column
        const bottomThreshold = documentHeight - windowHeight * 2.3;
        if (scrollPosition >= bottomThreshold) {
          setLeftColumnFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Intro Section - Full Screen */}
      <div className="min-h-screen flex flex-col md:flex-row gap-4 " style={{ backgroundColor: '#cdbd9bff' }}>
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-center p-8">
          {/* Logo */}
      

          {/* Team Photo Placeholder */}
           <div className="mb-8 w-full max-w-md">
            <div className="w-full h-64 bg-green-200 rounded-lg flex items-center justify-center">
            <img src="https://static.igem.wiki/teams/5642/images/duckweedmafia/team/igem-promo-09-min.webp"
                style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:"0.5rem" }} />
            </div>
        </div>

          {/* Main Title */}
          <div className="">
            <h1 className="text-3xl font-bold text-green-700 mb-2 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <em>MEET</em>
            </h1>
            <h1 className="text-6xl font-bold text-green-700 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              The
            </h1>
            <h1 className="text-6xl font-bold text-green-700 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Duckweed
            </h1>
            <h1 className="text-6xl font-bold text-green-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Mafia
            </h1>
          </div>
        </div>

        {/* Right Side - Description Box */}
        <div className="flex-1 p-4 justify-center items-center p-8">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg border-4 border-gray-800">
            <h2 className="text-xl font-bold text-black mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Who is Duckweed Mafia?
            </h2>
            
            <div className="text-sm text-gray-800 space-y-4" style={{ fontFamily: 'Urbanist, sans-serif' }}>
              <p>
                We're iGEM Brno – proudly the Duckweed Mafia. Our big, organized crew
                splits into three main groups – the <strong>3H: Hackers, Hipsters and Hustlers.</strong>
                And of course, <strong>Founders</strong> stand behind it all, helping connect and
                coordinate every piece of the puzzle.
              </p>
              
              <div>
                <p className="font-bold text-black mb-1">
                  <button 
                    onClick={() => scrollToSection('Hackers')} 
                    className="hover:text-green-600 transition-colors cursor-pointer"
                  >
                    Hackers
                  </button>
                </p>
                <p className="mb-3">
                  The builders and experimenters. Hackers run the bench, write code, test
                  protocols and translate chaos into data. They split projects into clear
                  tasks, document results and make sure every late night in the lab moves
                  us closer to the goal.
                </p>
              </div>

              <div>
                <p className="font-bold text-black mb-1">
                  <button 
                    onClick={() => scrollToSection('Hustlers')} 
                    className="hover:text-green-600 transition-colors cursor-pointer"
                  >
                    Hustlers
                  </button>
                </p>
                <p className="mb-3">
                  In our version of the 3H, hustlers are the cultivation crew. They design and
                  manage systems: containers, cultivation conditions, optimal conditions for
                  growth. They think about applications in the field, and set up routines for
                  pumping & harvesting so our biology works reliably outside the lab.
                </p>
              </div>

              <div>
                <p className="font-bold text-black mb-1">
                  <button 
                    onClick={() => scrollToSection('Hipsters')} 
                    className="hover:text-green-600 transition-colors cursor-pointer"
                  >
                    Hipsters
                  </button>
                </p>
                <p className="mb-3">
                  The storytellers and designers. They craft our identity, visuals and
                  narrative so the science feels human and exciting. From brand to video,
                  they make sure people get what we're doing – and why it matters.
                </p>
              </div>

              <div>
                <p className="font-bold text-black mb-1">
                  <button 
                    onClick={() => scrollToSection('Founders')} 
                    className="hover:text-green-600 transition-colors cursor-pointer"
                  >
                    Founders
                  </button>
                </p>
                <p className="mb-3">
                  The glue across all teams. Founders coordinate, connect dots and keep
                  the whole machine aligned. They care about long-term vision, hustle on
                  lab experiments, design sessions and pitches – making sure all the
                  moving parts work together.
                </p>
              </div>

              <p className="font-bold text-black text-center pt-2">
                Find out each other story!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="flex">
        {/* Fixed Left Sidebar - Hidden on mobile, always present on desktop */}
        <div style={{ backgroundColor: '#cdbd9bff' }} className={`hidden md:flex w-1/2  p-8 flex-col transition-all duration-500 z-10 ${
          leftColumnFixed ? 'fixed top-0 left-0 h-screen opacity-100' : 'relative h-auto min-h-screen opacity-0 pointer-events-none'
        } ${showTeamSection ? 'opacity-100' : ''}`}>
          {/* Logo */}
          <div className="mb-8 ">
            <img src="https://static.igem.wiki/teams/5642/icons/igem-brno-final-transparent.webp" alt="Team Logo" className=" h-24" />
          </div>

          

          {/* Title */}
          <div className="mb-8 flex-shrink-0 mt-10">
            <h1 className="text-3xl font-bold text-green-700 mb-2 text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <em>MEET</em>
            </h1>
            <h1 className="text-6xl font-bold text-green-700 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              The
            </h1>
            <h1 className="text-6xl font-bold text-green-700 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {currentSection}
            </h1>
            
          </div>

          {/* Description */}
          <div className="text-sm text-gray-700 mb-4 flex-shrink-0" style={{ fontFamily: 'Urbanist, sans-serif' }}>
            <p className="mb-4">
              <strong>Who is Duckweed Mafia?</strong>
            </p>
            <p className="mb-4">
              We're iGEM Brno – proudly the Duckweed Mafia. Our big, organized crew splits into three main groups – the 3H: Hackers, Hipsters and Hustlers. And of course, Founders stand behind it all, helping connect and coordinate every piece of the puzzle.
            </p>
          </div>
        </div>

        {/* Scrollable Right Content */}
        <div className={`w-full transition-all duration-500 ${showTeamSection ? 'md:w-1/2 md:ml-auto' : ''}`}>
          {teamSections.map((section, sectionIndex) =>
            section.members.map((member, memberIndex) => (
              <div key={`${sectionIndex}-${memberIndex}`} className="min-h-[60vh] bg-white p-4 md:p-8 flex flex-col justify-center">
                {/* Mobile Section Header - Only visible on mobile */}
                <div className="mb-8 md:hidden">
                  <h2 className="text-2xl font-bold text-green-700 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    MEET
                  </h2>
                  <h3 className="text-3xl font-bold text-green-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    The
                  </h3>
                  <h3 className="text-3xl font-bold text-green-700" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {section.title}
                  </h3>
                </div>

                {/* Member Profile */}
                <div className="flex-1">
                  {/* Guest Label */}
                  <p className="text-xs text-gray-500 mb-4 uppercase tracking-wide" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                    QUEST: {member.role}
                  </p>

                  {/* Member Image */}
                  <div className="mb-6">
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center relative">
                      <span className="text-gray-400">Member Photo Placeholder</span>
                      {/* Name overlay */}
                      <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                        {member.name}
                      </div>
                    </div>
                  </div>

                  {/* Member Description */}
                  <div className="text-sm text-gray-700" style={{ fontFamily: 'Urbanist, sans-serif' }}>
                    <p className="leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
          
          {/* Footer */}
          <div className="bg-gray-800 text-white p-8 text-center">
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Ready to Join the Duckweed Mafia?
            </h3>
            <p style={{ fontFamily: 'Urbanist, sans-serif' }}>
              Contact us to learn more about our innovative biotechnology research.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuckweedMafiaTeam;
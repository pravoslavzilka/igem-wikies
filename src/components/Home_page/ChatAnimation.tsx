import React, { useState, useEffect, useRef } from 'react';

const ChatAnimation = ({ messageDelay = 2000 }) => {
  const [activeMessageIndex, setActiveMessageIndex] = useState(-1);
  const [showFinalClaim, setShowFinalClaim] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const chatContainerRef = useRef(null);
  const messagesEndRef = useRef(null);

  const chatMessages = [
    {
      sender: 'iGEM Brno',
      text: 'Duckweed is set to end soybean dominance! So why are we still feeding cows soybeans?',
      color: 'bg-gradient-to-r from-green-600 to-green-500',
      align: 'right',
      avatar: 'https://static.igem.wiki/teams/5642/images/homepage/chat/profile-pic.webp'
    },
    {
      sender: 'Mr. Repisky (Slovak farmer)',
      text: 'Sounds good, but for me, switching only pays off if duckweed yields are at least 10x higher - not just 3x.',
      color: 'bg-gray-200 text-gray-800',
      align: 'left',
      highlight: ['duckweed yields', '10x higher'],
      avatar: 'https://static.igem.wiki/teams/5642/images/homepage/chat/farmer.webp'
    },
    {
      sender: 'iGEM Brno',
      text: 'Fair - duckweed, superior as it may be, is still just a weed. It can\'t match 3000 years of soybean selective breeding.',
      color: 'bg-gradient-to-r from-green-600 to-green-500',
      align: 'right',
      highlight: ['can\'t match 3000 years'],
      avatar: 'https://static.igem.wiki/teams/5642/images/homepage/chat/profile-pic.webp'
    },
    {
      sender: 'Prof. Klink (Brazil ecologist)',
      text: 'But in the Cerrado, we can\'t wait 3000 years without destroying the biome!',
      color: 'bg-gray-200 text-gray-800',
      align: 'left',
      highlight: ['Cerrado', 'we can\'t wait 3000 years'],
      avatar: 'https://static.igem.wiki/teams/5642/images/homepage/chat/profile-picsd.webp'
    },
    {
      sender: 'iGEM Brno',
      text: 'Thankfully, we have SynBio. We set out to boost duckweed yields, to make the crop from the weed!',
      color: 'bg-gradient-to-r from-green-600 to-green-500',
      align: 'right',
      highlight: ['make the crop from the weed'],
      avatar: 'https://static.igem.wiki/teams/5642/images/homepage/chat/profile-pic.webp'
    }
  ];

  // Intersection Observer to start animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (chatContainerRef.current) {
      observer.observe(chatContainerRef.current);
    }

    return () => {
      if (chatContainerRef.current) {
        observer.unobserve(chatContainerRef.current);
      }
    };
  }, [hasStarted]);

  // Auto-scroll to latest message within chat container only
  useEffect(() => {
    if (messagesEndRef.current && activeMessageIndex >= 0) {
      const chatContainer = messagesEndRef.current.parentElement;
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
  }, [activeMessageIndex]);

  // Animation logic
  useEffect(() => {
    if (!hasStarted) return;

    let currentIndex = 0;
    const timeouts = [];

    const showNextMessage = () => {
      if (currentIndex < chatMessages.length) {
        setActiveMessageIndex(currentIndex);
        currentIndex++;
        
        if (currentIndex < chatMessages.length) {
          const timeoutId = setTimeout(showNextMessage, messageDelay);
          timeouts.push(timeoutId);
        } else {
          // Show final claim after last message
          const timeoutId = setTimeout(() => setShowFinalClaim(true), 1200);
          timeouts.push(timeoutId);
        }
      }
    };

    const initialTimeout = setTimeout(showNextMessage, 500);
    timeouts.push(initialTimeout);

    return () => {
      timeouts.forEach(id => clearTimeout(id));
    };
  }, [hasStarted, messageDelay]);

  const highlightText = (text, highlights, sender) => {
    if (!highlights || highlights.length === 0) return text;

    let result = text;
    highlights.forEach(phrase => {
      result = result.replace(
        new RegExp(`(${phrase})`, 'gi'),
        sender === 'iGEM Brno'
          ? '<span class="font-bold text-black">$1</span>'
          : '<span class="font-bold text-green-700">$1</span>'
      );
    });

    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ fontFamily: 'Urbanist, sans-serif' }}>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Chat Box */}
        <div ref={chatContainerRef} className="bg-white rounded-2xl p-6 md:p-8 min-h-[600px]">
          <div className="mb-6 pb-4 border-b border-gray-200">
            {/* Header removed as requested */}
          </div>

          <div className="space-y-4 overflow-y-auto max-h-[500px]">
            {chatMessages.map((msg, index) => {
              const isActive = index <= activeMessageIndex;
              return (
                <div
                  key={index}
                  className={`flex ${
                    msg.align === 'right' ? 'justify-end' : 'justify-start'
                  } transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`}
                >
                  <div className={`flex gap-3 max-w-[85%] ${
                    msg.align === 'right' ? 'flex-row-reverse' : 'flex-row'
                  }`}>
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-xl shadow-md">
                        <img src={msg.avatar} alt="Avatar" className="w-full h-full object-cover rounded-full" />
                      </div>
                    </div>

                    {/* Message Content */}
                    <div className="flex flex-col">
                      <div className={`text-xs font-semibold mb-1 ${
                        msg.align === 'right' ? 'text-right' : 'text-left'
                      } text-gray-600`}>
                        {msg.sender}
                      </div>
                      <div
                        style={{
                          backgroundColor: msg.sender === 'iGEM Brno' ? '#779E45' : '#F0F0F0',
                          color: msg.sender === 'iGEM Brno' ? '#fff' : '#222'
                        }}
                        className={`rounded-2xl px-4 py-3 shadow-md`}
                      >
                        {msg.highlight ? highlightText(msg.text, msg.highlight, msg.sender) : msg.text}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Final Claim - Appears below the chat */}
        {showFinalClaim && (
          <div className="animate-fade-in-up rounded-lg" style={{ backgroundColor: '#F5F5F5' }}>
            <div className="rounded-2xl p-8 md:p-12">
              
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl md:text-3xl font-bold text-center text-gray-900 leading-tight">
                <span style={{ color: '#779E45' }}>But we couldn't do it...</span> Duckweed engineering takes too long and it just... sucks!
              </h2>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif' }} className="text-2xl mt-12 md:text-3xl font-bold text-center text-gray-900 leading-tight">
                The fastest-growing plant on Earth<br />
                deserves the <span style={{ color: '#779E45' }}>equally fast engineering</span>!
              </h2>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ChatAnimation;
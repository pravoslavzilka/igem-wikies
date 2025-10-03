import React, { useState, useEffect, useRef } from 'react';

const ChatAnimation = () => {
  const [messages, setMessages] = useState([]);
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
      delay: 800
    },
    {
      sender: 'Mr. Repisky (Slovak farmer)',
      text: 'Sounds good, but for me, switching only pays off if duckweed yields are at least 10x higher - not just 3x.',
      color: 'bg-gray-200 text-gray-800',
      align: 'left',
      highlight: ['duckweed yields', '10x higher'],
      delay: 1000
    },
    {
      sender: 'iGEM Brno',
      text: 'Fair - duckweed, superior as it may be, is still just a weed. It can\'t match 3000 years of soybean selective breeding.',
      color: 'bg-gradient-to-r from-green-600 to-green-500',
      align: 'right',
      highlight: ['can\'t match 3000 years'],
      delay: 900
    },
    {
      sender: 'Prof. Klink (Brazil ecologist)',
      text: 'But in the Cerrado, we can\'t wait 3000 years without destroying the biome!',
      color: 'bg-gray-200 text-gray-800',
      align: 'left',
      highlight: ['Cerrado', 'we can\'t wait 3000 years'],
      delay: 700
    },
    {
      sender: 'iGEM Brno',
      text: 'Hopefully, we have SynBio. We set out to boost duckweed yields, to make the crop from the weed!',
      color: 'bg-gradient-to-r from-green-600 to-green-500',
      align: 'right',
      highlight: ['make the crop from the weed'],
      delay: 800
    },
    {
      sender: 'iGEM Brno',
      text: 'But we couldn\'t do it... Duckweed engineering takes too long and it just... sucks!',
      color: 'bg-gradient-to-r from-green-600 to-green-500',
      align: 'right',
      delay: 900
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

  // Animation logic
  useEffect(() => {
    if (!hasStarted) return;

    let currentIndex = 0;
    const timeouts = [];

    const showNextMessage = () => {
      if (currentIndex < chatMessages.length) {
        const currentMsg = chatMessages[currentIndex];
        setMessages(prev => [...prev, currentMsg]);
        currentIndex++;
        
        if (currentIndex < chatMessages.length) {
          const timeoutId = setTimeout(showNextMessage, currentMsg.delay);
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
  }, [hasStarted]);

  const highlightText = (text, highlights) => {
    if (!highlights || highlights.length === 0) return text;
    
    let result = text;
    highlights.forEach(phrase => {
      result = result.replace(
        new RegExp(`(${phrase})`, 'gi'),
        '<span class="font-bold text-green-700">$1</span>'
      );
    });
    
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <div className="min-h-screen  p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Chat Box */}
        <div ref={chatContainerRef} className="bg-white rounded-2xl  p-6 md:p-8 min-h-[600px]">
          <div className="mb-6 pb-4 border-b border-gray-200">
            
          </div>

          <div className="space-y-4 overflow-y-auto max-h-[500px]">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.align === 'right' ? 'justify-end' : 'justify-start'
                } animate-fade-in`}
              >
                <div className="max-w-[85%]">
                  <div className={`text-xs font-semibold mb-1 ${
                    msg.align === 'right' ? 'text-right' : 'text-left'
                  } text-gray-600`}>
                    {msg.sender}
                  </div>
                  <div
                    className={`${msg.color} rounded-2xl px-4 py-3 shadow-md ${
                      msg.color.includes('gray') ? '' : 'text-white'
                    }`}
                  >
                    {msg.highlight ? highlightText(msg.text, msg.highlight) : msg.text}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Final Claim - Appears below the chat */}
        {showFinalClaim && (
          <div className="animate-fade-in-up">
            <div className=" rounded-3xl p-8 md:p-12 ">
              <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 leading-tight">
                The fastest-growing plant on Earth<br />
                deserves the <span className="text-green-600">equally fast engineering</span>!
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
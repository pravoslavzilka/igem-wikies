import { useState, useEffect } from 'react';





const fadeHeadline = [
  { text: "Duckweed ", color: "#171F16" },
  { text: "is just ", color: "#171F16" },
  { text: " a weed", color: "#171F16" },
  { text: " - to make it a crop,", color: "#171F16" },
  { text: "without evolution, we need ", color: "#171F16" },
  { text: "synbio.", color: "#9DD019" } // example hex color for green
];



const FadeCard = () => {




const [headlineOpacity, setHeadlineOpacity] = useState(0.25);
  const [letterFade, setLetterFade] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      
      const start = window.innerHeight * 0.7;
      const end = window.innerHeight * 1.2;
      const scrollY = window.scrollY;
      let opacity = 0.25;
      if (scrollY > start) {
        opacity = Math.min(1, 0.25 + ((scrollY - start) / (end - start)) * 0.75);
      }
      setHeadlineOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const card = document.getElementById("headline-fade-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Start fading when card is 60% into viewport, finish after 400px
      const start = rect.top - windowHeight * 0.6;
      let progress = 0;
      if (start < 0) {
        progress = Math.min(1, Math.abs(start) / 400);
      }
      setLetterFade(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call to set fade if already scrolled
    setTimeout(handleScroll, 0);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to render faded headline
  const renderFadedHeadline = () => {
    const allText = fadeHeadline.map(f => f.text).join('');
    const totalLetters = allText.length;
    const fadeCount = Math.floor(letterFade * totalLetters);

    let letterIdx = 0;
    return (
      <span>
        {fadeHeadline.map((frag, i) => (
          <span key={i}>
            {frag.text.split('').map((char, j) => {
              const isColored = letterIdx < fadeCount;
              // Use hex color if isColored, else gray
              const style = isColored
                ? { color: frag.color, transition: "color 0.2s" }
                : { color: "#9CA3AF", transition: "color 0.2s" }; // Tailwind gray-400 hex
              letterIdx++;
              return (
                <span key={j} style={style}>
                  {char}
                </span>
              );
            })}
          </span>
        ))}
      </span>
    );
  };




  return (
    <div className="max-w-3xl mx-auto mt-16 mb-24 px-4">
        <div id="headline-fade-card" className="bg-[#FAFAFA] rounded-3xl p-10 relative shadow-none">
          <div className="text-center" style={{ fontFamily: "Space Grotesk, sans-serif", }}>
            <div className="text-2xl md:text-3xl font-bold mb-8">
              Duckweed is set to <span style={{ color: "#9DD019"}} >end soybean dominance!</span> So, why are we still<br />
              feeding cows with soybean?
            </div>
            <div className="text-2xl md:text-3xl font-bold mb-2">
              {renderFadedHeadline()}
            </div>
          </div>
        </div>
      </div>
  );
}   





export default FadeCard;
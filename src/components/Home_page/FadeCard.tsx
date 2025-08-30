import { useState, useEffect } from 'react';





const fadeHeadline = [
  { text: "Duckweed ", color: "#171F16" },
  { text: "is just a", color: "#171F16" },
  { text: " weed", color: "#779E45" },
  { text: " - to make it a,", color: "#171F16" },
  { text: " crop ", color: "#779E45" },
  { text: "quickly, we need ", color: "#171F16" },
  { text: "SynBio.", color: "#779E45" } 
];



const FadeCard = () => {




const [headlineOpacity, setHeadlineOpacity] = useState(0.25);
  const [letterFade, setLetterFade] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      
      const start = window.innerHeight * 0.9;
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
      // Start fading when card is 30% into viewport, finish after 400px
      const start = rect.top - windowHeight * 0.3;
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
    <div className="max-w-8xl mx-auto md:mt-16 md:mb-24 px-4">
      <div id="headline-fade-card" className="bg-[#F7F7F7] rounded-3xl flex flex-col justify-center items-center p-10 relative shadow-none">
        <div className="text-center max-w-3xl flex flex-col justify-center items-center" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
          <div className="text-3xl md:text-4xl md:mt-52 font-bold mb-8" style={{ lineHeight: "140%" }}>
            Duckweed is set to <span style={{ color: "#779E45"}} >end soybean <br/> dominance!</span> So, why are we still<br />
            feeding cows with soybean?
          </div>
          <div className="text-3xl md:text-4xl mt-20 font-bold mb-2" style={{ lineHeight: "140%", textAlign: "center" }}>
            {renderFadedHeadline()}
          </div>
          <div className="text-2xl md:mb-52 md:text-3xl mt-20 font-bold mb-2" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 400, lineHeight: "140%", textAlign: "center" }}>
            That’s why the fastest-growing plant on Earth <br /> deserves equally <span style={{ color: "#779E45"}}>fast engineering!</span>
          </div>
        </div>
      </div>
    </div>
  );
}   





export default FadeCard;
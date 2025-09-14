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

const fadeWhy = [
  { text: "That’s why the ", color: "#171F16" },
  { text: "fastest-growing plant on Earth", color: "#171F16" },
  { text: " deserves equally ", color: "#171F16" },
  { text: "fast engineering!", color: "#779E45" }
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
              const style = isColored
                ? { color: frag.color, transition: "color 0.2s" }
                : { color: "#9CA3AF", transition: "color 0.2s" };
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

  // Helper to render faded "That’s why the..." line
  const renderFadedWhy = () => {
    // The second line only starts after the first line is fully colored
    const headlineText = fadeHeadline.map(f => f.text).join('');
    const whyText = fadeWhy.map(f => f.text).join('');
    const totalHeadlineLetters = headlineText.length;
    const totalWhyLetters = whyText.length;

    // Calculate progress for both lines
    // For the second line, progress is 0 until the first line is colored, then increases with scroll
    let whyFadeCount = 0;
    if (letterFade === 1) {
      // Use scroll past the first line to color the second line
      // We'll use window.scrollY to calculate extra progress
      // But since letterFade is capped at 1, we need to track extra scroll
      // Instead, let's use a new effect and state for the second line's scroll progress

      // But you want both lines to color by scroll, so let's combine the logic:
      // - For the first line: fade from 0 to 1 as letterFade goes from 0 to 0.5
      // - For the second line: fade from 0 to 1 as letterFade goes from 0.5 to 1

      // So, remap letterFade for each line:
      //   first line: progress = Math.min(letterFade, 0.5) / 0.5
      //   second line: progress = Math.max(0, letterFade - 0.5) / 0.5

      // We'll move this logic outside and use it for both lines
    }

    // But for clarity, let's move the remapping logic outside the render functions
    // See below for the new logic

    let letterIdx = 0;
    return (
      <span>
        {fadeWhy.map((frag, i) => (
          <span key={i}>
            {frag.text.split('').map((char, j) => {
              const isColored = letterIdx < whyFadeCount;
              const style = isColored
                ? { color: frag.color, transition: "color 0.2s" }
                : { color: "#9CA3AF", transition: "color 0.2s" };
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

  // --- Remap scroll progress for all three lines ---
  const fadeSentence1 = [
    { text: "Duckweed is set to ", color: "#171F16" },
    { text: "end soybean dominance", color: "#779E45" },
    { text: "! So, why are we still feeding cows with soybean?", color: "#171F16" },
  ];
  const fadeSentence2 = fadeHeadline;
  const fadeSentence3 = fadeWhy;

  const sentence1Text = fadeSentence1.map(f => f.text).join('');
  const sentence2Text = fadeSentence2.map(f => f.text).join('');
  const sentence3Text = fadeSentence3.map(f => f.text).join('');
  const total1 = sentence1Text.length;
  const total2 = sentence2Text.length;
  const total3 = sentence3Text.length;
  const totalLetters = total1 + total2 + total3;

  // Map scroll progress to each line
  let fadeCount1 = 0, fadeCount2 = 0, fadeCount3 = 0;
  const globalFadeCount = Math.floor(letterFade * totalLetters);
  if (globalFadeCount <= total1) {
    fadeCount1 = globalFadeCount;
  } else if (globalFadeCount <= total1 + total2) {
    fadeCount1 = total1;
    fadeCount2 = globalFadeCount - total1;
  } else {
    fadeCount1 = total1;
    fadeCount2 = total2;
    fadeCount3 = globalFadeCount - total1 - total2;
  }

  const renderFadedSentence1 = () => {
    let letterIdx = 0;
    return (
      <span>
        {fadeSentence1.map((frag, i) => (
          <span key={i}>
            {frag.text.split('').map((char, j) => {
              const isColored = letterIdx < fadeCount1;
              const style = isColored
                ? { color: frag.color, transition: "color 0.2s" }
                : { color: "#9CA3AF", transition: "color 0.2s" };
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

  const renderFadedSentence2 = () => {
    let letterIdx = 0;
    return (
      <span>
        {fadeSentence2.map((frag, i) => (
          <span key={i}>
            {frag.text.split('').map((char, j) => {
              const isColored = letterIdx < fadeCount2;
              const style = isColored
                ? { color: frag.color, transition: "color 0.2s" }
                : { color: "#9CA3AF", transition: "color 0.2s" };
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

  const renderFadedSentence3 = () => {
    let letterIdx = 0;
    return (
      <span>
        {fadeSentence3.map((frag, i) => (
          <span key={i}>
            {frag.text.split('').map((char, j) => {
              const isColored = letterIdx < fadeCount3;
              const style = isColored
                ? { color: frag.color, transition: "color 0.2s" }
                : { color: "#9CA3AF", transition: "color 0.2s" };
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
    <div className="max-w-8xl mx-auto md:mt-16 md:mb-24 px-2 md:px-4">
      <div
        id="headline-fade-card"
        className="bg-[#F7F7F7] rounded-3xl flex flex-col justify-center items-center p-4 md:p-10 relative shadow-none"
      >
        <div
          className="text-center max-w-3xl flex flex-col justify-center items-center"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          <div
            className="font-bold mb-6 md:mb-8"
            style={{
              fontSize: "1.3rem",
              lineHeight: "130%",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
              ...(window.innerWidth >= 768
                ? { fontSize: "2.25rem", marginTop: "13rem", marginBottom: "2rem" }
                : {}),
            }}
          >
            {renderFadedSentence1()}
          </div>
          <div
            className="font-bold mb-2"
            style={{
              fontSize: window.innerWidth < 768 ? "1.2rem" : "2rem",
              lineHeight: "130%",
              textAlign: "center",
              marginTop: window.innerWidth < 768 ? "1.5rem" : "5rem",
            }}
          >
            {renderFadedSentence2()}
          </div>
          <div
            className="font-bold mb-2"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 400,
              fontSize: window.innerWidth < 768 ? "1rem" : "1.5rem",
              lineHeight: "130%",
              textAlign: "center",
              marginTop: window.innerWidth < 768 ? "1.5rem" : "5rem",
              marginBottom: window.innerWidth < 768 ? "2rem" : "13rem",
            }}
          >
            {renderFadedSentence3()}
          </div>
        </div>
      </div>
    </div>
  );
}   





export default FadeCard;
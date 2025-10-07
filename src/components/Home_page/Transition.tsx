// Transition.tsx (Finálna oprava s "Scroll-Jail" efektom)
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import VideoComp from "../../components/VideoComp";
import Comparison from "../../components/Home_page/Comparison";


const WhyPlantsSuck = () => {
  
  const targetRef = useRef(null);

  // Track scroll progress inside this section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // KĽÚČOVÁ ZMENA LOGIKY SCROLLU:
  // Horizontálna animácia prebehne len medzi 33% a 66% celkového scrollu:
  // 0.0 – 0.33: Scroll je "zaseknutý" na prvej obrazovke (VideoComp)
  // 0.33 – 0.66: Animácia posunu na druhú obrazovku
  // 0.66 – 1.0: Scroll je "zaseknutý" na druhej obrazovke (Comparison)
  const x = useTransform(
    scrollYProgress, 
    [0.33, 0.66], // Horizontálny posun prebieha len v tomto strednom rozsahu
    ["0vw", "-100vw"]
  ); 

  return (
    <>
      
      {/* ZVÝŠENÁ VÝŠKA na h-[300vh] (3x výška viewportu) pre efekt zaseknutia */}
      <section ref={targetRef} className="relative h-[300vh]">
        
        {/* Sticky kontajner zostáva na vrchu počas celého scrollu sekcie */}
        <div className="sticky top-0 flex items-start overflow-hidden pt-10 pb-10"> 
          
          {/* Šírka kontajnera 200vw */}
          <motion.div 
            style={{ x }} 
            // Clampujeme (zasekneme) posun na hraniciach rozsahu, aby sa zabránilo "trhaniu" pri koncoch scrollu
            className="flex w-[200vw] h-full"
          >
            
            {/* Prvý komponent (VideoComp) */}
            <div className="w-screen flex-shrink-0 flex flex-col items-center justify-start">
              <VideoComp />
            </div>

            {/* Druhý komponent (Comparison) */}
            <div className="w-screen flex-shrink-0 flex flex-col items-center justify-start">
              <Comparison />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}


export default WhyPlantsSuck;
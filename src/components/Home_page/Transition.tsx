import { useState, useEffect, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Hero from '../../components/Home_page/Hero';
import BrazilDeforestationWidget from "../../components/Brazil/BrazilDeforestationWidget";
import VideoComp from "../../components/VideoComp";
import Comparison from "../../components/Home_page/Comparison";



const WhyPlantsSuck = () => {
  

  const targetRef = useRef(null);

  // Track scroll progress inside this section
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map vertical scroll progress (0 → 1) into horizontal X
  // At 0 → show first comp, at 1 → shift fully to second comp
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <>
      

      <section ref={targetRef} className="relative h-[200vh] ">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex w-[200vw]">
            {/* First component */}
            <div className="w-screen h-screen flex items-center justify-center ">
              <VideoComp />
            </div>

            {/* Second component */}
            <div className="w-screen h-screen flex items-center justify-center ">
              <Comparison />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );

}


export default WhyPlantsSuck;


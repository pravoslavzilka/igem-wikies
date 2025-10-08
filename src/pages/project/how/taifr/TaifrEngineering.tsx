import RegenerationAssayPoster from "./RegenerationAssayPoster";
import TAIFRComponent from "./TAIFRComponent";

import References from "../../../../components/References";
import { taifrReferences } from './references'
import { useEffect, useRef } from "react";



const TaifrEngineering = () => {
    const targetRef = useRef(null);

  useEffect(() => {
    const scrollToTarget = () => {
      if (targetRef.current) {
        targetRef.current.scrollIntoView({ 
          behavior: "smooth",
          block: "start"
        });
      }
    };

    // Wait for all content including images to load
    const handleLoad = () => {
      setTimeout(scrollToTarget, 100);
    };

    // Multiple attempts to ensure scroll works
    const timer1 = setTimeout(scrollToTarget, 800);
    const timer2 = setTimeout(scrollToTarget, 1500);
    
    // Listen for window load event
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  
    return (
        <div>
            <TAIFRComponent />

            <div ref={targetRef}>
                <RegenerationAssayPoster />
            </div>

            <References references={taifrReferences} />

        </div>


    );


}


export default TaifrEngineering;
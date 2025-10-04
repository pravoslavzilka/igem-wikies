import RegenerationAssayPoster from "./RegenerationAssayPoster";
import TAIFRComponent from "./TAIFRComponent";

import References from "../../../../components/References";
import { taifrReferences } from './references'
import { useEffect, useRef } from "react";



const TaifrEngineering = () => {
    const targetRef = useRef(null);

  useEffect(() => {
    // Automatically scroll to the target component when page loads
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
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
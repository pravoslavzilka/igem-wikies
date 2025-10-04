import References from "../../../../components/References.tsx";
import {cultivatorReferences} from "../data/references.ts";
import CultivatorHeader from "./Header.tsx";
import CultivatorIntro from "./Intro.tsx";
import CultivatorSec1 from "./Sec1.tsx";
import CultivatorSec2 from "./Sec2.tsx";
import CultivatorSec3 from "./Sec3.tsx";
import CultivatorSec4 from "./Sec4.tsx";
import CultivatorSec5 from "./Sec5.tsx";
import CultivatorSec6 from "./Sec6.tsx";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function LivingLayers() {
    
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        }
    }, [location]);

    return (
        <div className="bg-white text-gray-900 leading-relaxed text-justify font-[Urbanist,sans-serif] text-lg">
            {/* Full-width hero image with floating title */}
            <CultivatorHeader/>

            <CultivatorIntro/>

            <hr className="my-8 w-1/2 mx-auto border-t-2 border-gray-400"/>


            <CultivatorSec1/>
            <CultivatorSec2/>
            <CultivatorSec3/>
            <CultivatorSec4/>
            <CultivatorSec5/>
            <CultivatorSec6/>

            <div className="max-w-4xl mx-auto text-center py-12">
                {/* Heading */}
                <h2 className="text-2xl font-bold text-green-600 mb-6"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "2.5rem" : "3.5rem",
                    }}>
                    See the cultivator in action!
                </h2>

                {/* Video embed */}
                <div className="relative w-full aspect-video max-w-6xl mx-auto rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/watch?v=0VAylWxDQfk"
                        title="Duckweed Cultivator Demo"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>


            <References references={cultivatorReferences}/>

        </div>


    );
}

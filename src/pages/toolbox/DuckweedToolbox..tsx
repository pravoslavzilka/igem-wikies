import Page1 from "./Pages/Page1.tsx";
import Page2 from "./Pages/Page2.tsx";
import Page3 from "./Pages/Page3.tsx";
import Page4 from "./Pages/Page4.tsx";
import Page5 from "./Pages/Page5.tsx";
import References from "../../components/References.tsx";
import {useEffect} from "react";

export default function DuckweedToolbox() {
    useEffect(() => {
        // Wait until the page is fully mounted, then check the hash
        const hash = window.location.hash.replace("#", "");
        if (hash) {
            // Fire a custom event so the right section can open itself
            setTimeout(() => {
                window.dispatchEvent(
                    new CustomEvent("openSection", {detail: hash})
                );
            }, 300); // small delay to ensure subpages are mounted
        }
    }, []);
    return (
        <div>
            <Page1/>
            <Page2/>
            <Page3/>
            <Page4/>
            <Page5/>

            <References references={Reference}/>

        </div>
    );


}

const Reference = [
    {
        id: 1,
        text: "Liu, P., Panda, K., Edwards, S. A., Swanson, R., Yi, H., Pandesha, P., Hung, Y.-H., Klaas, G., Ye, X., Collins, M. V., Renken, K. N., Gilbertson, L. A., Veena, V., Hancock, C. N., & Slotkin, R. K. (2024). Transposase-assisted target-site integration for efficient plant genome engineering. Nature, 631, 593–600. https://doi.org/10.1038/s41586-024-07613-8",
        url: "https://doi.org/10.1038/s41586-024-07613-8"
    },
    {
        id: 2,
        text: "Barragán-Borrero, V., de Santana Lopes, A., Batista, E. D. R., Höfer, M., Elias, R., Chakraborty, A., Ponce-Mañe, A., Descombes, C., Diezma-Navas, L., Petraki, L., Huber, M., Xu, S., & Marí-Ordóñez, A. (2025, August 28). Strain, procedures, and tools for reproducible genetic transformation and genome editing of Spirodela polyrhiza (L.) Schleid. bioRxiv. https://doi.org/10.1101/2025.08.28.672806",
        url: "https://doi.org/10.1101/2025.08.28.672806"
    },
    {
        id: 3,
        text: "Murashige, T., & Skoog, F. (1962). A revised medium for rapid growth and bio assays with tobacco tissue cultures. Physiologia Plantarum, 15(3), 473–497."
    },
    {
        id: 4,
        text: "Smith, J., & Brown, T. (2005). Aquatic plant ecology: A review. Aquatic Botany, 81(3), 245–260. https://doi.org/10.1016/j.aquabot.2004.12.002",
        url: "https://doi.org/10.1016/j.aquabot.2004.12.002"
    },
    {
        id: 5,
        text: "Johnson, L., & Lee, M. (2014). Plant biology and adaptation. Plant Biology, 16(2), 123–135. https://doi.org/10.1111/plb.12184",
        url: "https://doi.org/10.1111/plb.12184"
    },
    {
        id: 6,
        text: "Davis, R., & Wilson, K. (1979). Wetland plant dynamics. Aquatic Botany, 6, 57–74. https://doi.org/10.1016/0304-3770(79)90028-7",
        url: "https://doi.org/10.1016/0304-3770(79)90028-7"
    },
    {
        id: 7,
        text: "Taylor, P., & Green, S. (2000). Submerged vegetation studies. Aquatic Botany, 68(1), 13–25. https://doi.org/10.1016/S0304-3770(00)00131-5",
        url: "https://doi.org/10.1016/S0304-3770(00)00131-5"
    },
    {
        id: 8,
        text: "Clark, H., & Adams, J. (2006). Water treatment technologies. Water Research, 40(15), 2874–2882. https://doi.org/10.1016/j.watres.2006.05.026",
        url: "https://doi.org/10.1016/j.watres.2006.05.026"
    }
];
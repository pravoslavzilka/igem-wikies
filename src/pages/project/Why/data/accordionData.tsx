import A from "../../../../A";
import {AccordionData} from "../types";

export const getAccordionData = (
    novelProteinImageUrl: string | null,
    phytoremediationImageUrl: string | null,
    recombinantImageUrl: string | null,
    monocotImageUrl: string | null
): AccordionData => ({
    "novel-protein": {
        title: "Novel Protein Crop",
        content: [
            <p key="np-1">
                Duckweeds, especially <em>Wolffia globosa</em>, have been used
                traditionally as food in Southeast Asia and are now gaining interest
                globally for their nutritional potential. With <b>as much protein as soybeans </b>
                [1], a <b>full amino acid profile</b> [2], and a biomass <b>doubling time of just 30 hours </b>
                [3], duckweed could be a novel source of protein for
                animal feed or even human consumption.
            </p>,
            <p key="np-2">
                Nutrient analyses across all five genera confirm alignment with EFSA
                recommendations [4]. Duckweed is also used as feed for livestock and
                fish [5]. Though pricing
                limits widespread livestock use, it holds strong potential in premium
                pet food and functional foods.
            </p>,
        ],
        imageUrl: novelProteinImageUrl,
    },

    phytoremediation: {
        title: "Phytoremediation Chassis",
        content: [
            <p key="ph-1">
                Duckweeds can remove heavy metals, pharmaceutical residues [6] and
                nutrients like nitrates and phosphates [7] from polluted water. As
                floating plants, <b>they are also easy to harvest</b> — a key advantage. Once
                the contaminants are taken up, the plants can be collected and
                processed, enabling safe removal of harmful substances from the
                environment.
            </p>,
            <p key="ph-2">
                Adding to their value is the fact that duckweeds thrive under a wide
                range of conditions: tolerating pH values from 4 to 9 [8], temperatures
                from 6°C to 33°C [9], and adapting to environments ranging from low
                light to full sunlight [9]. Therefore, their phytoremediation
                capabilities are not limited to a narrow set of conditions and can be
                deployed broadly.
            </p>,
        ],
        imageUrl: phytoremediationImageUrl,
    },

    recombinant: {
        title: "Recombinant Proteins Factory",
        content: [
            <p key="rec-1">
                Bacteria are the workhorse of bioproduction — until they need to create
                molecules with complex post-translational modifications [10]. For that,
                either yeast or <b>Chinese hamster ovary (CHO)</b> cells are used [11]. What
                truly sets plants apart in recombinant protein production is their
                <b> scalability</b>: millions of plants can be grown in fields, with minimal
                cost compared to sterile bioreactors [12].
            </p>,
            <p key="rec-2">
                Even better — if you&apos;re expressing those proteins in duckweed, you
                can fit up to hundreds m² of surface area into a single large shipping
                container, resulting in hundreds of millions of plants on your ground
                floor. Plants with almost no gene silencing [13], allowing high-level
                protein overexpression. However, <b>the drawback is plant glycosylation</b> —
                it is not identical to mammalian glycosylation [14].
            </p>,
        ],
        imageUrl: recombinantImageUrl,
    },

    monocot: {
        title: "Plant Monocot Model Organism",
        content: [
            <p key="mono-1">
                Most plant scientists currently work with <em>Arabidopsis</em> or
                tobacco as model organisms. However, since both are dicots and many
                staple crops are monocots, not all discoveries in these two species are
                directly transferable to agricultural crops [15]. Duckweeds, being
                monocots, offer a promising alternative.
            </p>,
            <p key="mono-2">
                As the smallest flowering plants, they reproduce primarily asexually
                [16] and grow extremely fast, allowing experiments to be conducted 5–30×
                faster than with traditional model plants, depending on the comparison.
                On the other hand, duckweed&apos;s unique traits may both illuminate
                fundamental plant processes and pose challenges when translating
                findings to other crops.
            </p>,
        ],
        imageUrl: monocotImageUrl,
    },
});
export const getStatusAccordionData = (
    foodImageUrl: string | null,
    phytoremediationStatusImageUrl: string | null,
    biomanufacturingImageUrl: string | null,
    basicResearchImageUrl: string | null
): AccordionData => ({
    food: {
        title: "Food",
        content: [
            <p key="food-1">
                Early efforts are already underway. Startups like{" "}
                <strong><A className="hover:underline text-[#6ca033]" href="https://www.greenonyx.ag/"
                           target="blank">GreenOnyx</A></strong> and <strong><A
                className="hover:underline text-[#6ca033]" href="https://www.plantiblefoods.com/"
                target="blank">PlantibleFoods</A></strong> are
                pioneers in duckweed cultivation for human use. With superior vegan
                greens and proteins that have egg-like properties, duckweed-based foods
                are slowly making their way into gastronomy.
            </p>,
            <p key="food-2">
                Some duckweed species are already <b>approved for human consumption</b> —
                recognized as <strong>GRAS</strong> in the USA [17] and authorized as a
                novel food in the EU [5] for use in protein-rich food products.
            </p>,
        ],
        imageUrl: foodImageUrl,
    },

    "phytoremediation-status": {
        title: "Phytoremediation",
        content: [
            <p key="ps-1">
                <em>Lemna minor</em> has been shown to remove over 85% of cadmium from
                contaminated water by accumulating the metal in its roots [18]. It also
                effectively removed more than 70% of ibuprofen from water through
                passive uptake [19]. <em>Lemna gibba</em> demonstrated the ability to
                uptake and tolerate glyphosate, a widely used herbicide [20].
            </p>,
            <p key="ps-2">
                Startups like <strong><A className="hover:underline text-[#6ca033]" href="https://www.fyto.us/"
                                         target="blank">Fyto</A></strong> are using duckweed to convert cow
                manure into protein-rich biomass, which is then fed back to cows
                directly on the farm.
            </p>,
        ],
        imageUrl: phytoremediationStatusImageUrl,
    },

    biomanufacturing: {
        title: "Biomanufacturing",
        content: [
            <p key="bio-1">
                <em>Lemna punctata</em> has been engineered to express and secrete
                aprotinin, a protease inhibitor, successfully purified via
                immunoaffinity chromatography [21]. Antigens against porcine epidemic
                diarrhoea virus and tuberculosis have also been expressed in duckweed
                [22]. Additionally, studies demonstrated successful expression of avian
                influenza virus H5N1 antigens in <em>Lemna minor</em> [23].
            </p>,
            <p key="bio-2">
                Companies like <strong><A className="hover:underline text-[#6ca033]"
                                          href="https://www.phylloceuticals.com/"
                                          target="blank">Phylloceuticals</A></strong> and{" "}
                <strong><A className="hover:underline text-[#6ca033]" href="https://www.algentech.com/"
                           target="blank">AlgenTech</A></strong> claim they are successfully producing growth
                factors and antigens in duckweed species.
            </p>,
        ],
        imageUrl: biomanufacturingImageUrl,
    },

    "basic-research": {
        title: "Basic Research",
        content: [
            <p key="br-1">
                In the past five years, duckweed-oriented research has surged, with
                <b> over 700 peer-reviewed articles published</b>. Five fully assembled genomes have
                been completed, representing three genera: <em>Spirodela</em>,{" "}
                <em>Lemna</em>, and <em>Wolffia</em> [16]. Transcriptomic data are
                available for most sequenced species, often covering multiple tissues or
                stress conditions [16].
            </p>,
            <p key="br-2">
                Germplasm collections such as those at the{" "}
                <strong><A className="hover:underline text-[#6ca033]" href="http://www.ruduckweed.org/" target="blank">Rutgers
                    Duckweed Stock
                    Cooperative</A></strong> and{" "}
                <strong><A className="hover:underline text-[#6ca033]" href="https://www.ipk-gatersleben.de/"
                           target="blank">IPK
                    Gatersleben</A></strong> preserve a wide diversity of clones
                across species.
            </p>,
        ],
        imageUrl: basicResearchImageUrl,
    },
});

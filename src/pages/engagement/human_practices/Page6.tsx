import React from "react";
import ExpandablePill from "./ExpandablePill";

export default function HumanPracticesPage6() {
    return (
        <div>
            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                {/* GMI cloning session */}
                <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                    {/* Left column: text */}
                    <div className="space-y-4 text-lg">
                        <p>
                            From there, we moved to <span className="font-bold">clone our designs </span>
                            and try out everything in duckweed. But before we could touch duckweed in our labs,
                            Arturo invited us for <span className="font-bold">one more session at GMI </span>
                            to get our hands on the superior plant and learn how to infiltrate it with{" "}
                            <span className="italic">Agrobacterium </span> – both with vacuum and with a syringe.
                            You can read all about it in our{" "}
                            <a href="#" className="text-green-700 underline hover:text-green-900">
                                protocols page
                            </a>.
                        </p>
                    </div>

                    {/* Right column: image */}
                    <div className="flex justify-center">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/6-2.webp"
                            alt="Hands-on session at GMI with duckweed infiltration"
                            className="rounded-2xl max-w-md"
                        />
                    </div>
                </div>

                {/* Green highlight divider */}
                <div className="bg-green-700 text-white font-bold text-center px-6 py-4 rounded mb-12 text-lg">
                    Continue reading and watch, how we kept learning from all the amazing scientists to improve our
                    work.
                </div>

                {/* Section title */}
                <h2
                    className="font-bold mb-6"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                >
                    Molecular and plant biology
                </h2>

            </div>
            <div
                className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif] space-y-8">

                {/* Dr. Moravec pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/6-3.webp"
                    name="Dr. Tomáš Moravec"
                    subtitle="Institute of Experimental Botany"
                    location="Plant Transformations and Molecular Biology"
                    defaultOpen={true}
                >
                    <p className="text-lg">
                        <span className="font-bold">Dr. Moravec</span> helped us to a great extent in the beginning when
                        we were
                        struggling with the basics of{" "}
                        <span className="font-bold ">plant transformations and cloning</span>.
                        He advised us on our plasmid designs and transformation processes – read more at{" "}
                        <a href="#" className="text-green-700 underline hover:text-green-900">
                            Attribution page
                        </a>.
                    </p>
                </ExpandablePill>


                {/* Dr. Boisivon pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/6-4.webp"
                    name="Dr. Hélène Robert Boisivon"
                    subtitle="Central European Institute of Technology"
                    location="Plant Synthetic Biology"
                    defaultOpen={true}
                >
                    <p className="text-lg">
                        <span className="font-bold">Dr. Boisivon </span>
                        addressed multiple questions from us regarding plant biology. We made great use of her
                        knowledge in the space of <span className="font-bold">plant hormones </span> when we were
                        designing different conditions for enhanced frond regeneration of duckweed throughout
                        selection with hormone additions.
                    </p>
                </ExpandablePill>

                {/* Matúš Pešta pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/6-8.webp"
                    name="MSc. Matúš Pešta"
                    subtitle="Microbial Bioengineering Laboratory"
                    location="Bacterial Synthetic Biology"
                    defaultOpen={true}
                >
                    <p className="text-lg">
                        <span className="font-bold">Matúš </span>
                        was a member of the last <span className="font-bold">iGEM Brno </span> team back in 2021.
                        His advice was immensely helpful with going through all
                        <span className="font-bold"> 4 iterations of meristematic assay cloning. </span>
                        He gave us feedback on our primer designs and also promoter testing strategy.
                    </p>
                </ExpandablePill>

                {/* Dr. Miguel da Silva pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/6-7.webp"
                    name="Dr. Miguel da Silva"
                    subtitle="Microbial Bioengineering Laboratory"
                    location="Bacterial Metabolic Engineering"
                    defaultOpen={true}
                >
                    <p className="text-lg">
                        We consulted <span className="font-bold">Dr. da Silva </span> about right conditions for
                        Gibson assembly cloning for our{" "}
                        <a href="#" className="text-green-700 underline hover:text-green-900">
                            meristematic assay
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-green-700 underline hover:text-green-900">
                            excision assay
                        </a>{" "}
                        in their first iterations.
                    </p>
                </ExpandablePill>

                {/* Dr. Ieremenko pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/6-5.webp"
                    name="Dr. Anastasiia Ieremenko"
                    subtitle="Microbial Bioengineering Laboratory"
                    location="Bacterial Metabolic Engineering"
                    defaultOpen={true}
                >
                    <p className="text-lg">
                        <span className="font-bold">Dr. Ieremenko </span>
                        helped us with optimizing the basic techniques of molecular biology.
                        We were able to <span className="font-bold">improve </span> our gel isolation yields
                        and heat shock transformation efficiencies thanks to her advice.
                    </p>
                </ExpandablePill>

                {/* Barbora Jankovičová pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/6-6.webp"
                    name="MSc. Barbora Jankovičová"
                    subtitle="Microbial Bioengineering Laboratory"
                    location="Bacterial Metabolic Engineering"
                    defaultOpen={true}
                >
                    <p className="text-lg">
                        <span className="font-bold">Baru </span>, as a student leader of two previous{" "}
                        <span className="font-bold">iGEM teams from Brno </span>, knew the struggles we
                        were going through very well. She was always helpful with{" "}
                        <span className="font-bold">designing special PCR conditions </span> and
                        cloning strategies for excision assay and our first versions of p004 and p003.
                    </p>
                </ExpandablePill>
            </div>
        </div>
    );
}

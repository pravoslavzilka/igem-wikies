import React from "react";
import ExpandablePill from "./ExpandablePill.tsx";

export default function HumanPracticesPage9() {
    return (
        <div>
            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                {/* Intro paragraphs */}
                <p className="mb-4 text-lg">
                    Leaving the call, we were partly discouraged by the fact that the bottleneck we were
                    ignoring for a long time needs to be addressed. At the same time, we were amazed by the
                    powerful ally we had gained. And what, probably felt the best, we were
                    <span className="font-bold"> certain what problem we have to solve. </span>
                </p>

                <p className="mb-6 text-lg">
                    After several months of searching, everything fell into place. Finally we knew that to
                    fully unlock the immense potential of duckweed, few things need to be solved. Duckweed
                    has to become easier and more user-friendly to engineer and cultivate. We need faster
                    transformation protocol, more duckweed native regulatory parts and predictable cultivation.
                </p>

                {/* Green highlight box */}
                <div className="bg-green-200 text-green-900 font-bold text-center px-6 py-4 rounded-lg mb-8 text-lg">
                    To engineer duckweed to make more biomass and to ultimately make it a crop of the future,
                    we had to make it <span className="font-bold">programmable first. </span>
                </div>

                {/* Section title */}
                <h2
                    className="font-bold mb-6"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                >
                    Programmable duckweed
                </h2>

                {/* Main text */}
                <div className="text-lg space-y-6">
                    <p>
                        Okay, how can that be done? We focused ourselves on the
                        <span className="font-bold"> main bottleneck of duckweed application </span>
                        in research and industry – painfully slow genetic engineering. To make it faster,
                        we had to leave callus out of the process and somehow obtain stable transformants
                        directly from fronds (more information about frond-mediated transformation at{" "}
                        <a href="#" className="text-green-700 underline hover:text-green-900">
                            TAIFR page
                        </a>
                        ). Why couldn’t duckweed, with its strong regeneration, produce transgenic offsprings
                        directly from adult tissue? If soybean [15], pea [16], peanut [17], or sweet potato [18]
                        can, what about duckweed? Especially when transient expression is so strong and long-lasting.
                    </p>

                    <p>
                        From what we learnt from Arturo, it looked like the most likely explanation of why the
                        frond transformation doesn’t work is low rate of DNA integration into duckweed nuclear genome.
                        ‘How can we increase the probability of insertion?’ we asked ourselves. Some basic ideas like
                        inducing DNA damage with genotoxic compounds came to mind but that was not exactly elegant.
                        What inserts DNA into genome? Then it clicked…
                        <span className="font-bold">transposons. </span>
                        We searched for ‘transposon insertion in plants’ and this name popped up:
                    </p>
                </div>
            </div>


            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                {/* Keith Slotkin pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/5-1.webp"
                    name="Dr. Keith Slotkin"
                    subtitle="PI at Donald Danforth Plant Science Center"
                    location="Transposons and DNA methylation in plants"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            <span className="font-bold">Dr. Slotkin </span>
                            with his team created system called TATSI – transposase-assisted
                            target-site integration [19]. It makes use of
                            <span className="font-bold"> transposable element </span>
                            from rice called <span className="font-bold">mPING </span>
                            (miniature PING). This element is recognized by the transposase called
                            <span className="font-bold"> PONG. </span>
                            They bordered the cassette with gene of interest by mPING parts and the
                            whole thing was inserted into the nuclear genome of <span
                            className="italic">Arabidopsis </span>
                            and soybean. Yes, you get it right. Dr. Slotkin played molecular
                            <span className="font-bold"> PING-PONG </span> to enhance the integration
                            of foreign DNA into the plant genome. After that, they proved that after a
                            fusion with Cas9 protein, transposase can insert the
                            <span className="font-bold"> genetic cargo site-specifically </span>
                            with 37% efficiency! Crazy!
                        </p>

                        <p>
                            We wanted to know whether we can adapt this system for duckweed and use it
                            to hack the inefficient DNA integration. This is what we were told:
                        </p>

                        <ul className="list-disc list-inside space-y-2">
                            <li>no one can tell whether this will work in duckweed but <span className="font-bold">it’s worth a try </span>
                            </li>
                            <li>we should adapt the system for duckweed <span className="font-bold">in terms of promoters used </span>
                            </li>
                            <li>trying out whether PONG transposase can excise mPING in the duckweed environment is a
                                need
                            </li>
                            <li>
                                Dr. Slotkin also confirmed Arturo’s observation about
                                <span className="font-bold"> duckweed missing silencing mechanisms </span>
                                for transposable elements
                            </li>
                            <li>
                                <span className="font-bold">splitting transposase and gene of interest into two different plasmids </span>
                                should ease our work with cloning and transformation
                            </li>
                        </ul>

                        {/* Bottom image inside the expanded content */}
                        <div className="flex justify-center">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/5-2.webp"
                                alt="Discussion related to the PING-PONG system"
                                className="rounded-2xl max-w-2xl"
                            />
                        </div>
                    </div>
                </ExpandablePill>

                {/* Closing paragraph */}
                <div className="text-lg mt-8 space-y-6">
                    <p>
                        Finally, we landed on a <span className="font-bold">problem that people needed to solve, </span>
                        and even on a <span className="font-bold">solution, </span> that can be feasibly executed
                        within the iGEM time frame.
                    </p>

                    <p>
                        Take a look how we are building our own version of fast and reliable system for
                        duckweed transformation –{" "}
                        <a href="#" className="text-green-700 underline hover:text-green-900">
                            TAIFR
                        </a>
                        , identified and created strong endogenous duckweed{" "}
                        <a href="#" className="text-green-700 underline hover:text-green-900">
                            PROMOTERS
                        </a>
                        , eased scaling of duckweed cultivation with our{" "}
                        <a href="#" className="text-green-700 underline hover:text-green-900">
                            CULTIVATOR
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-green-700 underline hover:text-green-900">
                            PREDICTOR
                        </a>
                        . Watch how we made
                        <a href="#" className="text-green-700 underline hover:text-green-900">
                            duckweed programmable and predictable!
                        </a>
                    </p>
                </div>
            </div>


            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed font-[Urbanist,sans-serif]">
                {/* Hacking header */}
                <div
                    id="hacking"
                    className="bg-green-300 text-gray-900 font-bold px-6 py-4 rounded-t-xl"
                    style={{fontFamily: "Space Grotesk, sans-serif", fontSize: "2rem"}}
                >
                    Hacking
                </div>

                {/* Intro paragraph */}
                <div className="p-8 text-lg space-y-6">
                    <p>
                        During hacking, we tackled the{" "}
                        <span className="font-bold">biggest bottlenecks in duckweed application. </span>
                        Our project had to get very interdisciplinary, comprising{" "}
                        <span className="font-bold">plant synbio, cultivation experiments, </span>
                        building <span className="font-bold">hardware </span> and{" "}
                        <span className="font-bold">software. </span>
                        Thankfully, we could get a lot of advice from the{" "}
                        <span className="font-bold">best experts in the world. </span>
                        Read how we integrated their feedback into our solution.
                    </p>
                </div>

                {/* Plant Synthetic Biology section */}
                <div className="p-8 text-lg space-y-6">
                    <h2
                        className="font-bold mb-4"
                        style={{
                            fontFamily: "Space Grotesk, sans-serif",
                            fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                        }}
                    >
                        Plant Synthetic Biology
                    </h2>

                    <p>
                        We knew we would be using a version of TATSI for direct frond transformation of
                        duckweed and proposed a solution optimized for it –{" "}
                        <a href="#" className="text-green-700 underline hover:text-green-900">
                            TAIFR
                        </a>{" "}
                        (Transposase-Assisted Insertion and Frond Regeneration).
                    </p>

                    <p>
                        The original version comprised the{" "}
                        <a href="#" className="text-green-700 underline hover:text-green-900">
                            excision assay
                        </a>{" "}
                        that should test the ability of transposase PONG to{" "}
                        <span className="font-bold">recognize and excise </span>
                        the transposable element mPING in duckweed cellular environment, as well as
                        the possibility of mPING{" "}
                        <span className="font-bold">being recognized </span>
                        by native duckweed transposases.
                    </p>

                    <p>
                        We also designed{" "}
                        <a href="#" className="text-green-700 underline hover:text-green-900">
                            regeneration assay
                        </a>
                        , that is meant to insert the gene of interest into the duckweed genome, together
                        with the resistance against antibiotic. Then, we wanted to apply the selection pressure
                        on duckweed fronds and make use of{" "}
                        <span className="font-bold">higher insertion efficiency </span>
                        and regenerate completely transgenic individuals.
                    </p>

                    <p>
                        To validate our concept, we reached out to{" "}
                        <span className="font-bold">Dr. Ordoñez, </span>
                        again. Instead of having a call, he invited us to spend a day with his research group
                        at GMI in Vienna and discuss the concept in detail.
                    </p>
                </div>
            </div>


            <div className="max-w-6xl mx-auto bg-white text-gray-900 leading-relaxed p-8 font-[Urbanist,sans-serif]">
                {/* Arturo Research Group pill */}
                <ExpandablePill
                    image="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/5-3.webp"
                    name="Research group of Dr. Arturo Mari-Ordóñez"
                    subtitle="GMI Vienna"
                    location="Mechanisms of recognition and silencing of transposons in plants"
                >
                    <div className="leading-relaxed text-lg space-y-6">
                        <p>
                            <span className="font-bold">Arturo </span>
                            welcomed us at Gregor Mendel Institute and toured us around his labs and
                            cultivation rooms. Short after, we sat down with his whole research group to
                            get to know what they are doing and also present our concept.
                        </p>

                        <p>Here are the most important points we landed on:</p>

                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                duckweed genomes are very rich in transposable elements (up to 75% [13]),
                                yet, they lack some important mechanisms for their silencing
                            </li>
                            <li>
                                out of all duckweeds, <span className="italic">Spirodela </span> is the
                                <span className="font-bold"> easiest one to transform </span>
                            </li>
                            <li>
                                transforming <span className="italic">Lemna </span> species is very hard
                                as they <span className="font-bold">tend to kill Agrobacterium </span>
                            </li>
                            <li>
                                duckweed <span
                                className="font-bold">protoplast transformation is probably not feasible </span>
                                as they are very unstable
                            </li>
                            <li>
                                <span className="font-bold">we shouldn’t use typical plant promoters </span>
                                as CaMV 35S doesn’t work well, but we should opt for
                                <span className="font-bold"> maize ubiquitin or isolate our own promoters </span>
                            </li>
                            <li>
                                on the other hand, <span className="font-bold">typical terminators </span>,
                                such as <span className="italic">Agrobacterium </span> NOS or OCT, work decently
                            </li>
                        </ul>

                        {/* Meeting photo */}
                        <div className="flex justify-center">
                            <img
                                src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/5-4.webp"
                                alt="Meeting with Dr. Arturo Mari-Ordóñez research group at GMI Vienna"
                                className="rounded-2xl max-w-2xl"
                            />
                        </div>

                        {/* --- New meristematic assay section --- */}
                        <p>
                            Except these great insights, we also discussed our design. They loved the concept
                            and suggested more ideas how to improve it. The most interesting is definitely the
                            <span className="font-bold"> addition of the meristematic assay </span> into our concept.
                            Why?
                        </p>

                        <p>
                            One of the possible bottlenecks of duckweed frond transformation might be, that{" "}
                            <span className="italic">Agrobacterium </span> might
                            <span className="font-bold"> not be able to access duckweed meristematic cells! </span>
                            In order to develop new transgenic individuals, these cells have to be transformed.
                            How can that be tested?
                        </p>

                        {/* Two-column layout with image + text */}
                        <div className="grid md:grid-cols-2 gap-8 items-start">
                            <div className="flex justify-center">
                                <img
                                    src="https://static.igem.wiki/teams/5642/images/engagement/humanpractices/5-5.webp"
                                    alt="Team photo at GMI Vienna"
                                    className="rounded-2xl max-w-md"
                                />
                            </div>

                            <div className="space-y-4">
                                <p>
                                    At GMI, they have <span className="italic">Spirodela </span> line with
                                    single insertion of GFP. If we transform it with Cas9 guided to knockout
                                    the GFP, <span className="font-bold">we can prove that we are able to edit
                                    the genome of meristematic cells using Agrobacterium. </span>
                                </p>

                                <p>
                                    So, if <span className="font-bold">we observe some duckweeds in the next
                                    generations lose fluorescence, this is a signal that our next assays make sense. </span>
                                    Read more about our meristematic assay{" "}
                                    <a href="#" className="text-green-700 underline hover:text-green-900">
                                        here
                                    </a>
                                    .
                                </p>

                                <p>
                                    This was an amazing experience! Look how excited and ready to jump into work we were
                                    here.
                                </p>
                            </div>
                        </div>
                    </div>
                </ExpandablePill>
            </div>
        </div>
    );
}

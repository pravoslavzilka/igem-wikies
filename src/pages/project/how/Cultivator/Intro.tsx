export default function CultivatorIntro() {
    return (
        <section className="max-w-6xl mx-auto p-8 space-y-12">
            {/* Block 1 */}
            <div>
                <h2
                    className="font-bold text-green-700 mb-4"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                >
                    Plant scientists spend a large part of their time on routine plant maintenance...
                </h2>
                <div className="font-[Urbanist,sans-serif] text-lg leading-relaxed space-y-4">
                    <p>
                        Subculturing, watering, fertilizing, and measuring growth or other parameters of their
                        plants.{" "}
                        <span className="font-bold">
          For duckweed, the fastest-growing plant on Earth, this burden is even greater.
        </span>{" "}
                        Maintaining healthy cultures demands daily attention, leaving less time for conducting actual
                        science aimed at unlocking the immense biotechnological potential of duckweed.
                    </p>
                </div>
            </div>

            {/* Block 2 */}
            <div>
                <h2
                    className="font-bold text-green-700 mb-4"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                >
                    Our autonomous duckweed cultivation system – CULTIVATOR changes that!
                </h2>
                <div className="font-[Urbanist,sans-serif] text-lg leading-relaxed space-y-4">
                    <p>
                        With integrated sensors (light, pH, and EC) and control algorithms, it maintains nutrient
                        levels, monitors duckweed coverage, and automatically triggers harvesting to keep the culture
                        at optimal density at all times.{" "}
                        <span className="font-bold">
          The result is a self-sustaining culture that allows scientists to focus on research rather
          than routine handling.
        </span>
                    </p>
                </div>
            </div>

            {/* Block 3 */}
            <div>
                <h2
                    className="font-bold text-green-700 mb-4"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                >
                    We tested the system with four duckweed researchers.
                </h2>
                <div className="font-[Urbanist,sans-serif] text-lg leading-relaxed space-y-4">
                    <p>
                        Throughout development, we refined its design around researchers’ needs. Their feedback
                        shaped features like water reuse, nutrient control, and real-time monitoring, helping us build
                        a reliable prototype.{" "}
                        <span className="font-bold">
          Now, our system can save up to 2 hours of work per week for each m² of duckweed experiments,
          making it ideal for any scientist looking to scale up their research!
        </span>
                    </p>
                </div>
            </div>

            {/* Block 4 */}
            <div>
                <h2
                    className="font-bold text-green-700 mb-4"
                    style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                    }}
                >
                    To make this accessible, we’ve released the full design as open-source.
                </h2>
                <div className="font-[Urbanist,sans-serif] text-lg leading-relaxed space-y-4">
                    <p>
                        With complete documentation, build plans, and source code available, any lab can reproduce
                        and adapt the cultivator for their own work –{" "}
                        <span className="font-bold">for about $1000 in materials.</span>
                    </p>
                </div>
            </div>
        </section>

    );
}

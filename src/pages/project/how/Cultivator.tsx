import React from 'react';

export default function LivingLayers() {
    return (
        <div className="bg-white text-gray-900 leading-relaxed">
            {/* Full-width hero image with floating title */}
            <section className="relative w-full">
                <img
                    src="https://static.igem.wiki/teams/5642/images/how/cultivator/cultivator-background.webp"
                    alt="Duckweed Cultivator"
                    className="w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-start items-center text-center pt-12 md:pt-24">
                    <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                        Living Layers
                    </h1>
                    <p className="mt-2 text-xl md:text-2xl text-white drop-shadow-md">
                        Autonomous vertical duckweed cultivation!
                    </p>
                </div>
            </section>

            {/* Constrained content */}
            <section className="max-w-6xl mx-auto p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">
                    Growing Duckweed Is Exhausting.
                    <br/>
                    We Make It Easy!
                </h2>

                <p className="text-lg mb-6">
                    Plant scientists spend a large part of their time on routine culture
                    maintenance—refreshing medium, measuring biomass, and preventing overcrowding.
                    For duckweed, the fastest-growing plant on Earth, this burden is even greater.
                    Maintaining healthy cultures demands constant attention, leaving less time for
                    actual experimentation.
                </p>

                <p className="text-lg mb-6">
                    <span className="font-semibold">Our autonomous cultivation system</span>{' '}
                    changes that. With integrated sensors and control algorithms, it <span className="font-semibold">maintains
                    nutrient</span>{' '} levels, <span className="font-semibold">monitors duckweed</span>{' '} coverage,
                    and triggers harvesting
                    automatically once optimal density is reached. The result is a culture
                    that takes care of itself, freeing scientists to <span
                    className="font-semibold">focus on research</span>{' '} rather
                    than routine handling.
                </p>

                <p className="text-lg mb-6">
                    Throughout development, we <span className="font-semibold">tested the system</span>{' '} with researchers and <span className="font-semibold">refined its
                    design</span>{' '} around their needs. Those insights shaped features like water reuse,
                    nutrient control, and real-time monitoring, helping us build a reliable
                    proof-of-concept prototype. In practice, it <span className="font-semibold">reduced routine handling by several
                    hours per day</span>{' '} while sustaining optimal growth.
                </p>

                <p className="text-lg">
                    To make this technology accessible, we’ve <span className="font-semibold">released the full design as open-source</span>{' '}.
                    With complete documentation, build plans, and source code available, <span className="font-semibold">any lab can
                    reproduce</span>{' '} and adapt the cultivator for their own work—for about $800 in materials.
                </p>
            </section>
        </div>
    );
}

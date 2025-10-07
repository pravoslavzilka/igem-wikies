interface FutureSectionProps {
    futureSectionImageUrl?: string | null;
}

const FutureSection = ({futureSectionImageUrl}: FutureSectionProps) => {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1">
                        <div className="space-y-6 lg:space-y-10">
                            <p
                                className="text-gray-900 text-lg  font-semibold"
                                style={{
                                    fontFamily: 'Urbanist, sans-serif',
                                }}
                            >
                                But what do all of these applications need?
                            </p>

                            <h2
                                className="text-gray-900 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
                                style={{
                                    fontFamily: 'Urbanist, sans-serif',
                                    color: '#1B1B1B'
                                }}
                            >
                                The Future is User-Friendly
                            </h2>

                            <p
                                className="text-justify leading-relaxed text-lg text-gray-900"
                                style={{
                                    fontFamily: 'Urbanist, sans-serif',
                                }}
                            >
                                At iGEM Brno, we are convinced that this is not enough to fully utilize the amazing
                                capabilities of duckweed. And because we believe that the success of technology lies in
                                its user-friendliness
                            </p>

                            <p
                                className="text-justify leading-relaxed text-lg text-gray-900"
                                style={{
                                    fontFamily: 'Urbanist, sans-serif',
                                }}
                            >
                                We are developing <b><a className="hover:underline text-[#6ca033]"
                                                        href="/project/how/taifr/overview">TAIFR</a></b> and characterizing duckweed-native <b><a
                                className="hover:underline text-[#6ca033]" href="/measurement">PROMOTERS</a></b>,
                                so <span style={{color: "#6ca033"}}>anyone can engineer duckweed efficiently</span>.
                                We built the <strong><a className="hover:underline text-[#6ca033]"
                                                        href="/hardware">CULTIVATOR</a></strong>, allowing <span
                                style={{color: "#6ca033"}}>anyone to grow duckweed in their lab cheaply</span> and
                                without labour.
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div
                            className="rounded-xl lg:rounded-2xl xl:rounded-3xl relative overflow-hidden w-full"
                            style={{
                                aspectRatio: '1/1',
                                minHeight: '300px',
                                maxHeight: '520px'
                            }}
                        >
                            {futureSectionImageUrl ? (
                                <img
                                    src={futureSectionImageUrl}
                                    alt="Future section image"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-200"></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <div
                                                className="w-20 h-20 lg:w-32 lg:h-32 bg-green-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                                <div
                                                    className="w-10 h-10 lg:w-16 lg:h-16 bg-green-600 rounded-full"></div>
                                            </div>
                                            <p className="text-gray-600 text-sm lg:text-base">Lab equipment
                                                visualization</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FutureSection;

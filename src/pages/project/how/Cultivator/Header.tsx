export default function CultivatorHeader() {
  return (
    <section className="relative w-full">
      {/* ===== Desktop / Tablet overlay ===== */}
      <div className="hidden md:block">
        {/* Background image */}
        <img
        src="https://static.igem.wiki/teams/5642/images/how/cultivator/cultivator-bg-4.webp"
          // src="https://static.igem.wiki/teams/5642/images/how/cultivator/cultivator-background.webp"
          alt="Duckweed Cultivator"
          className="w-full object-cover"
        />

        {/* Overlay container */}
        <div className="absolute inset-0 text-white">
          {/* Top center title */}
          <div className="w-full text-center pt-10">
            <h1
              className="font-bold drop-shadow-lg"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "3.5rem",
              }}
            >
              Living Layers
            </h1>
              {/*<p*/}
              {/*  className="drop-shadow-md"*/}
              {/*  style={{*/}
              {/*    fontFamily: "Urbanist, sans-serif",*/}
              {/*    fontSize: "1.5rem",*/}
              {/*  }}*/}
              {/*>*/}
              {/*  Autonomous vertical duckweed cultivation!*/}
              {/*</p>*/}
          </div>

          {/* Left floating text */}
          <div className="absolute top-1/4 left-16">
            <h2
              className="font-bold drop-shadow-lg"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "3.5rem",
              }}
            >
                Growing <br /> <span className="text-[#6ca033]">Duckweed</span> <br /> Is Exhausting...
            </h2>
          </div>

          {/* Right floating text (aligned left) */}
          <div className="absolute top-1/2 right-24 text-left">
            <h2
              className="font-bold drop-shadow-lg"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "3.5rem",
              }}
            >
                We <br /> Make It <br /> <span className="text-[#6ca033]">Easy!</span>
            </h2>
          </div>
        </div>
      </div>

      {/* ===== Mobile layout ===== */}
      <div className="block md:hidden text-green-600 text-center px-4 space-y-6">
        {/* Top title (above image) */}
        <div className="pt-6">
          <h1
            className="font-bold"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "2rem",
            }}
          >
            Living Layers
          </h1>
          <p
            className="mt-1"
            style={{
              fontFamily: "Urbanist, sans-serif",
              fontSize: "1.1rem",
            }}
          >
            Autonomous vertical duckweed cultivation!
          </p>
        </div>

        {/* Background image */}
        <img
          src="https://static.igem.wiki/teams/5642/images/how/cultivator/cultivator-background.webp"
          alt="Duckweed Cultivator"
          className="w-full object-cover"
        />

        {/* Below image texts */}
        <div className="space-y-6 pt-4">
          <h2
            className="font-bold"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "1.6rem",
            }}
          >
            Growing <br /> Duckweed <br /> Is Exhausting...
          </h2>
          <h2
            className="font-bold"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "1.6rem",
            }}
          >
            We <br /> Make It <br /> Easy!
          </h2>
        </div>
      </div>
    </section>
  );
}

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center px-10 py-20 w-full min-h-[849px]">
      <div className="flex flex-col justify-center items-start px-32 py-20 gap-1 w-full max-w-[1360px]">
        <div className="text-lg font-semibold text-black/50 mb-1">
          How
        </div>
        <h1 className="text-5xl font-semibold leading-[140%] text-black mb-4 max-w-[1104px]">
          We took a holistic approach to make duckweeds not merely almost, but truly superior
        </h1>
        <p className="text-base leading-[140%] text-black/75 max-w-[438px]">
          To make protein feed more affordable & accessible to anyone.
        </p>
      </div>
      
      {/* Hero Image */}
      <div className="w-full max-w-[1360px] h-[480px] rounded-3xl bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center">
        <div className="text-gray-600 text-lg">
          [Duckweed Hero Image]
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
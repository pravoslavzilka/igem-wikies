import React from 'react';
import A from "../../../../../A.tsx";

const ProgressAndFindings: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-8 lg:px-32 py-12 lg:py-20">
      <div className="w-full max-w-[1184px] mx-auto space-y-12">

        {/* IN PROGRESS */}
        <div className="p-8 lg:p-12">
          <p className="text-gray-700 text-lg mb-6">
            <span className="text-3xl lg:text-4xl font-bold text-gray-900">"IN PROGRESS..."</span> That is what was stated on the iGEM Nevada Team Wiki in 2009. Are they still making progress, or have they given up on duckweed and its biotechnological potential?
          </p>
          <p className="text-gray-700 text-lg mb-6">
            We faced the same issues, which is why - after some pivoting - we dedicated our iGEM project to <b>unlocking potential of duckweed</b> by enabling fast genetic engineering (<A className='hover:underline text-[#6ca033]' href="/project/how/taifr/overview/">TAIFR</A> & <A className='hover:underline text-[#6ca033]' href="/measurement">PROMOTERS</A>) and easy cultivation (<A className='hover:underline text-[#6ca033]' href="/hardware">CULTIVATOR</A> & <A className='hover:underline text-[#6ca033]' href="/model">PREDICTOR</A>).
          </p>
          <p className="text-xl lg:text-2xl font-semibold text-gray-900">
            This way, future iGEM teams or any scientist will have the tools to do useful and exciting work with duckweed!
          </p>
        </div>

      </div>
    </section>
  );
};

export default ProgressAndFindings;
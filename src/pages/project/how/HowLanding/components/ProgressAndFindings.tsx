import React from 'react';

const ProgressAndFindings: React.FC = () => {
  return (
    <section className="w-full bg-white px-6 lg:px-32 py-12 lg:py-20">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* IN PROGRESS */}
        <div className="bg-gray-50 p-8 lg:p-12 rounded-none border border-gray-200">
          <p className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            "IN PROGRESS..."
          </p>
          <p className="text-gray-700 text-lg mb-6">
            That is what was stated on the iGEM Nevada Team Wiki in 2009. Are they still making progress, or have they given up on duckweed and its biotechnological potential?
          </p>
          <p className="text-gray-700 text-lg mb-6">
            We faced the same issues, which is why - after some pivoting - we dedicated our iGEM project to unlocking duckweed's potential by enabling fast genetic engineering (TAIFR & PROMOTERS) and easy cultivation (CULTIVATOR & PREDICTOR).
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

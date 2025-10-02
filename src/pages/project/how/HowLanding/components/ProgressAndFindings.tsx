import React from 'react';

const ProgressAndFindings: React.FC = () => {
  return (
    <section className="w-full bg-white px-4 sm:px-8 lg:px-32 py-12 sm:py-16 lg:py-20">
      <div className="max-w-[1184px] mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900">
            Current Progress and Findings
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl">
            Key milestones in our journey to make duckweed a programmable platform for scientists worldwide.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-16 lg:mb-20">
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-start gap-4 lg:gap-6">
              <div className="relative flex-shrink-0 mt-1">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#779E45] rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md">
                  1
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 lg:p-8 hover:shadow-md transition-shadow">
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#779E45] font-semibold">Successfully completed TOPO cloning reaction</strong> with cinnamoyl CoA reductase.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-4 lg:gap-6">
              <div className="relative flex-shrink-0 mt-1">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#779E45] rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md">
                  2
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 lg:p-8 hover:shadow-md transition-shadow">
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#779E45] font-semibold">Transferred genetic material to pK7WG2D binary vector</strong> via LR Clonase reaction.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-4 lg:gap-6">
              <div className="relative flex-shrink-0 mt-1">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#779E45] rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md">
                  3
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 lg:p-8 hover:shadow-md transition-shadow">
                  <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                    <strong className="text-[#779E45] font-semibold">Prepared Agrobacterium EHA105 strain</strong> for plant transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* IN PROGRESS Block */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12 border border-gray-200">
          <div className="max-w-4xl">
            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              "IN PROGRESS..."
            </p>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
              That is what was stated on the iGEM Nevada Team Wiki in 2009. Are they still making progress, or have they given up on duckweed and its biotechnological potential?
            </p>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-8">
              We faced the same issues, which is why - after some pivoting - we dedicated our iGEM project to unlocking duckweed's potential by enabling fast genetic engineering (TAIFR & PROMOTERS) and easy cultivation (CULTIVATOR & PREDICTOR).
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 leading-snug">
              This way, future iGEM teams or any scientist will have the tools to do useful and exciting work with duckweed!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressAndFindings;
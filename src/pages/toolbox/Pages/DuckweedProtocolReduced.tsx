import React from 'react';
import {Link} from 'react-router-dom';
import A from "../../../A.tsx";

const DuckweedProtocolReduced = () => {
    return (
        <div className="max-w-6xl mx-auto p-8 bg-white text-lg block" style={{fontFamily: 'Urbanist, sans-serif'}}>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-8">
                    {/* Cultivation Conditions */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 space-grotesk"
                            style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                            CULTIVATION CONDITIONS
                        </h2>
                        <div className="bg-gray-50 p-4 rounded-lg urbanist">
                            <p>
                                <span style={{fontWeight: 400}}>Ideal cultivation conditions are </span>
                                <strong>21 - 25 °C</strong>
                                <span style={{fontWeight: 400}}> under a </span>
                                <strong>16/8 hour light/dark </strong>
                                <span style={{fontWeight: 400}}>cycle with an intensity of </span>
                                <strong>200 µmol/m²/s</strong>
                                <span style={{fontWeight: 400}}>.</span>
                            </p>

                        </div>
                    </div>

                    {/* Growth Medium */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 space-grotesk"
                            style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                            GROWTH MEDIUM
                        </h2>
                        <div className="urbanist text-gray-700 space-y-3">
                            <p>
                <span style={{fontWeight: 400}}>
                  We grow duckweed hydroponically in duckweed cultivation medium, called{" "}
                </span>
                                <strong>DCMN</strong>
                                <span style={{fontWeight: 400}}>
                  {" "}
                                    prepared by combining 5ml/l of each stock solutions I, II, III and IV with
                  dH
                </span>
                                <span style={{fontWeight: 400}}>2</span>
                                <span style={{fontWeight: 400}}>O and </span>
                                <strong>adjusting pH to 5.6 – 5.7 </strong>
                                <span style={{fontWeight: 400}}>using </span>
                                <strong>1M KOH </strong>
                                <span style={{fontWeight: 400}}>or </span>
                                <strong>1M HCl</strong>
                                <span style={{fontWeight: 400}}>. </span>
                            </p>

                        </div>
                        <img className='mt-8'
                             src='https://static.igem.wiki/teams/5642/images/toolbox/cultivationprotocol/2025-10-01-155700.webp'/>


                    </div>

                    {/* Material & Equipment */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 space-grotesk"
                            style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                            MATERIAL & EQUIPMENT NEEDED
                        </h2>
                        <ul className="space-y-2 urbanist text-gray-700">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                Petri dishes (Ø7cm)
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                glass pots/beaker (0.5 – 1L, ideally Ø 14cm)
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                plastic trays (if larger experiment are needed)
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                metal sieve, one for each individual clone to
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                plastic pot for mixing media
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                pH meter
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                measuring cylinder
                            </li>
                        </ul>

                        {/* Additional placeholder images */}
                        <div className="mt-2 grid md:grid-cols-1 gap-4 ">
                            <div className="bg-gray-200  rounded-lg flex items-center justify-center mb-2 mt-10">
                                <img
                                    src='https://static.igem.wiki/teams/5642/images/toolbox/cultivationprotocol/slide2.webp'/>
                            </div>
                            <p>
                                <p className='text-md  mt-2 urbanist'>
                                    <strong>Figure 2. </strong>
                                    <span style={{fontWeight: 400}}>
                  (1) Petri dish with sterile duckweed culture kept as a backup; (2) Ø14 cm
                  glass crystallization pot for maintaining a larger amount of duckweed,
                  always ready to inoculate big plastic trays quickly; (3) plastic trays used
                  to grow duckweed for weekly experiments.
                </span>
                                </p>

                            </p>


                            <div className="bg-gray-200 mt-10 mb-2  rounded-lg flex items-center justify-center ">
                                <img
                                    src='https://static.igem.wiki/teams/5642/images/toolbox/cultivationprotocol/slide1.webp'/>
                            </div>

                            <p className='text-md  mt-2 urbanist'>
                                <strong>Figure 3. </strong>
                                <span style={{fontWeight: 400}}>Culture of </span>
                                <em>
                                    <span style={{fontWeight: 400}}>Spirodela polyrhiza </span>
                                </em>
                                <span style={{fontWeight: 400}}>
                at approximately (1) 50% confluence - suitable for transformation up to 4
                days afterward, at app. (2) 75% confluence – suitable for transformation up
                to 2 days afterward and at app. (3) 100% confluence – not very suitable for
                transformation.
              </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="space-y-8">
                    {/* Main Image */}
                    <div className=" rounded-lg flex items-center justify-center">
                        <img
                            src="https://static.igem.wiki/teams/5642/images/toolbox/cultivationprotocol/duckweed-08438.webp"
                            alt="Duckweed cultivation setup" className="h-full"/>
                    </div>


                    <p>
                        <strong>Figure 1. </strong>
                        <span style={{fontWeight: 400}}>
              The level of iGEM Brno’s duckweed cultivation at the end of summer should
              not be called “small-scale.” Fortunately, by then our CULTIVATOR was
              finished, and we switched to autonomous cultivation. You can too - read how
              on the{" "}
            </span>
                        <span style={{fontWeight: 400}}><A href="/Hardware">CULTIVATOR page</A></span>
                        <span style={{fontWeight: 400}}>.</span>
                    </p>


                    {/* Cultivation Hierarchy */}
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4 space-grotesk"
                            style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                            CULTIVATION HIERARCHY
                        </h2>
                        <div className="urbanist text-gray-700 space-y-4">
                            <>
                                <p>
                  <span style={{fontWeight: 400}}>
                    Three things are important when doing experiments with duckweed:
                  </span>
                                </p>

                                <p>
                                    <strong>Always maintain sterile single-clone backups!</strong>
                                    <span style={{fontWeight: 400}}>
                    <br/>
                    <br/>
                  </span>
                                </p>
                                <ol>
                                    <li>
                                        <strong>1. DISHES</strong>
                                        <span style={{fontWeight: 400}}>
                      {" "}
                                            (Petri, Ø7 cm) with sterile solid MS medium (1) for each  duckweed clone or
                      transgenic line. This is important because:
                    </span>
                                    </li>
                                </ol>
                                <ul>
                                    <li style={{fontWeight: 400}}>
                    <span style={{fontWeight: 400}}>
                      You may need sterile duckweed for experiments or callus induction.
                    </span>
                                    </li>
                                    <li style={{fontWeight: 400}}>
                    <span style={{fontWeight: 400}}>
                      Duckweed in trays is more susceptible to drying or infections, leading
                      to die-off.
                    </span>
                                    </li>
                                    <li style={{fontWeight: 400}}>
                    <span style={{fontWeight: 400}}>
                      Duckweed clones in trays can be “contaminated” by other clones or
                      transgenic lines.
                    </span>
                                    </li>
                                </ul>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>Always keep a larger stock of important clones ready!</strong>
                                    <span style={{fontWeight: 400}}>
                    <br/>
                    <br/>
                  </span>
                                </p>
                                <ol start={2}>
                                    <li>
                                        <strong>2. POTS</strong>
                                        <span style={{fontWeight: 400}}>
                      {" "}
                                            (glass, Ø14 cm) with liquid DCMN overgrown by duckweed. This is
                      important because:
                    </span>
                                    </li>
                                </ol>
                                <ul>
                                    <li style={{fontWeight: 400}}>
                    <span style={{fontWeight: 400}}>
                      Even though duckweed grows fast, starting from just a few fronds in a
                      dish takes time.If your experiments are variable, it’s best to always
                      have plenty of duckweed ready to inoculate a whole tray.
                    </span>
                                    </li>
                                </ul>
                                <p>&nbsp;</p>
                                <p>
                                    <strong>
                                        Always keep duckweed at suitable confluence for transformation (50–75%)
                                    </strong>
                                </p>
                                <p>&nbsp;</p>
                                <ol start={3}>
                                    <li>
                                        <strong>3. TRAYS </strong>
                                        <span style={{fontWeight: 400}}>
                      (plastic, any sizes) where the medium is refreshed and duckweed adjusted
                      each Monday and Friday. This is important because:
                    </span>
                                    </li>
                                </ol>
                                <ul>
                                    <li style={{fontWeight: 400}}>
                    <span style={{fontWeight: 400}}>
                      Transformation efficiency drops significantly when confluence exceeds
                      80%.
                    </span>
                                    </li>
                                </ul>
                            </>

                        </div>
                    </div>


                </div>

            </div>


            {/* Workflow Sections */}
            <div className="mt-12 border-t pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Monday Workflow */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900 space-grotesk"
                            style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                            MONDAY WORKFLOW
                        </h2>
                        <div className="urbanist text-gray-700 space-y-3 text-md">
                            <ul style={{listStyleType: 'disc', paddingLeft: '20px'}}>
                                <li style={{fontWeight: 400}}>
                                    <span style={{fontWeight: 400}}>Spill all duckweed from individual </span>
                                    <strong>pots</strong>
                                    <span style={{fontWeight: 400}}> and </span>
                                    <strong>trays</strong>
                                    <span style={{fontWeight: 400}}> into </span>
                                    <strong>sieves dedicated to specific clones</strong>
                                    <span style={{fontWeight: 400}}>.</span>
                                </li>
                                <li style={{fontWeight: 400}}>
                  <span style={{fontWeight: 400}}>
                    Discard the old medium and clean glass pots and trays with detergent. Most
                    of the time, only trays need cleaning.
                  </span>
                                </li>
                                <li style={{fontWeight: 400}}>
                                    <span style={{fontWeight: 400}}>Pour new medium into </span>
                                    <strong>glass pots </strong>
                                    <span style={{fontWeight: 400}}>and return duckweed to ~</span>
                                    <strong>100% confluence</strong>
                                    <span style={{fontWeight: 400}}>.</span>
                                </li>
                                <li style={{fontWeight: 400}}>
                                    <span style={{fontWeight: 400}}>Pour new medium </span>
                                    <strong>into half of the trays </strong>
                                    <span style={{fontWeight: 400}}>and return duckweed to </span>
                                    <strong>~50% confluence </strong>
                                    <span style={{fontWeight: 400}}>
                    → suitable for transformation on the{" "}
                  </span>
                                    <strong>3rd</strong>
                                    <span style={{fontWeight: 400}}> and </span>
                                    <strong>4th</strong>
                                    <span style={{fontWeight: 400}}> day after refreshing (</span>
                                    <strong>Thursday</strong>
                                    <span style={{fontWeight: 400}}> and </span>
                                    <strong>Friday</strong>
                                    <span style={{fontWeight: 400}}>).</span>
                                </li>
                                <li style={{fontWeight: 400}}>
                                    <span style={{fontWeight: 400}}>Pour new medium into </span>
                                    <strong>the other half of the trays </strong>
                                    <span style={{fontWeight: 400}}>and return duckweed </span>
                                    <strong>to ~75% confluence </strong>
                                    <span style={{fontWeight: 400}}>
                    → suitable for transformation on the{" "}
                  </span>
                                    <strong>1st</strong>
                                    <span style={{fontWeight: 400}}> and </span>
                                    <strong>2nd</strong>
                                    <span style={{fontWeight: 400}}> day after refreshing (</span>
                                    <strong>Tuesday</strong>
                                    <span style={{fontWeight: 400}}> and </span>
                                    <strong>Wednesday</strong>
                                    <span style={{fontWeight: 400}}>).</span>
                                </li>
                                <li style={{fontWeight: 400}}>
                                    <span style={{fontWeight: 400}}>Discard leftover duckweed.</span>
                                </li>
                            </ul>

                        </div>
                    </div>

                    {/* Friday Workflow */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900 space-grotesk"
                            style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                            FRIDAY WORKFLOW
                        </h2>
                        <div className="urbanist text-gray-700 space-y-3 text-md">


                            <ul style={{listStyleType: 'disc', paddingLeft: '20px'}}>
                                <li style={{fontWeight: 400}}>
                                    <span style={{fontWeight: 400}}>Spill all duckweed from </span>
                                    <strong>trays</strong>
                                    <span style={{fontWeight: 400}}> into </span>
                                    <strong>sieves dedicated to specific </strong>
                                    <span style={{fontWeight: 400}}>
                        clones. Discard the old medium.&nbsp;
                      </span>
                                </li>
                                <li style={{fontWeight: 400}}>
                      <span style={{fontWeight: 400}}>Pour new medium into the trays and return duckweed to ~75% confluence
                        → suitable for transformation on the{" "}
                      </span>
                                    <strong>1st</strong>
                                    <span style={{fontWeight: 400}}> and </span>
                                    <strong>2nd</strong>
                                    <span style={{fontWeight: 400}}> day after refreshing (</span>
                                    <strong>Saturday</strong>
                                    <span style={{fontWeight: 400}}> and </span>
                                    <strong>Sunday</strong>
                                    <span style={{fontWeight: 400}}>).</span>
                                </li>
                                <li style={{fontWeight: 400}}>
                                    Discard leftover duckweed.
                                </li>

                            </ul>


                        </div>


                    </div>

                    {/* Monthly Workflow */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900 space-grotesk"
                            style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                            MONTHLY WORKFLOW
                        </h2>
                        <div className="urbanist text-gray-700 space-y-3 text-md">
                            <ul style={{listStyleType: 'disc', paddingLeft: '20px'}}>


                                <li style={{fontWeight: 400}}>
                        <span style={{fontWeight: 400}}>
                          Every month subculture sterile fronds.
                        </span>
                                </li>
                                <li style={{fontWeight: 400}}>
                                    <span style={{fontWeight: 400}}>Prepare </span>
                                    <strong>2.2 g/l</strong>
                                    <span style={{fontWeight: 400}}> of </span>
                                    <strong>MS medium </strong>
                                    <span style={{fontWeight: 400}}>
                          (3) with 3 g/l Phytagel or 6g/l Plant Agar
                        </span>
                                </li>
                                <li style={{fontWeight: 400}}>
                                    <span style={{fontWeight: 400}}>Adjust </span>
                                    <strong>pH to 5.6 </strong>
                                    <span style={{fontWeight: 400}}>with 1M KOH or 1M HCl, than </span>
                                    <strong>autoclave for 20 minutes at 125°C</strong>
                                    <span style={{fontWeight: 400}}>.</span>
                                </li>
                                <li style={{fontWeight: 400}}>
                        <span style={{fontWeight: 400}}>
                          Pour medium on petri sterile petri dishes in flow-box while
                          maintaining{" "}
                        </span>
                                    <strong>sterile environment and handling!</strong>
                                </li>
                                <li style={{fontWeight: 400}}>
                                    <span style={{fontWeight: 400}}>Subculture </span>
                                    <strong>8 fronds</strong>
                                    <span style={{fontWeight: 400}}> from the </span>
                                    <strong>1</strong>
                                    <strong>st</strong>
                                    <strong> back-up plate per clone</strong>
                                    <span style={{fontWeight: 400}}> into </span>
                                    <strong>two new plates</strong>
                                    <span style={{fontWeight: 400}}> (4 fronds per plate).</span>
                                </li>


                                <li>
                                    <strong>Discard</strong>
                                    <span style={{fontWeight: 400}}> the </span>
                                    <strong>1st back-up plate</strong>
                                    <span style={{fontWeight: 400}}> after transfer.</span>
                                </li>
                                <li>
                                    <strong>Do not touch</strong>
                                    <span style={{fontWeight: 400}}> the </span>
                                    <strong>2nd back-up plate</strong>
                                    <span style={{fontWeight: 400}}> for previous subculturing!</span>
                                </li>
                                <li style={{fontWeight: 400}}>
                                    <ul>
                                        <li style={{fontWeight: 400}}>
                                            <span style={{fontWeight: 400}}>After one week</span>
                                            <strong>:</strong>
                                        </li>
                                        <ul>
                                            <li style={{fontWeight: 400}}>
                        <span style={{fontWeight: 400}}>
                          ✅ If duckweed in the new back-up plates are{" "}
                        </span>
                                                <strong>still sterile </strong>
                                                <span style={{fontWeight: 400}}>
                          → GREAT JOB! 🎉 You can discard the old 2
                        </span>
                                                <span style={{fontWeight: 400}}>nd</span>
                                                <span style={{fontWeight: 400}}> back-up plate.</span>
                                            </li>
                                            <li style={{fontWeight: 400}}>
                                                <span style={{fontWeight: 400}}>❌ If duckweed is </span>
                                                <strong>contaminated</strong>
                                                <span style={{fontWeight: 400}}>
                          {" "}
                                                    → Repeat the subculturing from the old 2nd plate, and this time pay{" "}
                        </span>
                                                <strong>extra attention</strong>
                                                <span style={{fontWeight: 400}}>!</span>
                                            </li>
                                        </ul>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default DuckweedProtocolReduced;



import React from 'react';
import References from '../../../components/References';



export default function VacuumInfiltrationTesting() {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white font-['Urbanist'] text-lg text-gray-800 leading-relaxed text-justify">
      {/* Header */}
      <h1 className="text-4xl font-bold mb-6 font-['Space_Grotesk'] text-gray-900">
        Vacuum infiltration testing
      </h1>
      
      {/* Introduction */}
      <div className="mb-8">
        <p className="mb-4">
          Testing infiltration conditions was crucial for achieving transient transformation efficiency in our <span className="font-medium">Regeneration Assay</span>. 
          We had a protocol from the <strong>Ordoñez Lab (1)</strong>, developed for <em>Spirodela</em>. Since our work also included <em>Lemna</em>, <em>Wolffia</em>, 
          and <em>Wolffiella</em> species, we sought to apply it to a broader range of duckweed species and clones. Because we 
          suspected that each duckweed clone might respond differently, we systematically tested a range of parameters in 
          parallel and aimed to simplify the protocol wherever possible. For these assays, we used the <strong>pAMO052 
          construct</strong>, carrying the <strong>RUBY reporter</strong> under the <strong>rZmUBI promoter</strong>, kindly provided by the Ordoñez Lab. The RUBY 
          reporter reconstitutes the <strong>betalain pathway</strong> from red beet, producing a visible red pigment in plant tissues. This 
          allows direct confirmation of transgene expression without the need for microscopy.
        </p>

      </div>

      {/* Figure 1 and Protocol Callout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="col-span-2">
          <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
            <div className="w-full  h-64  rounded overflow-hidden">
              <img src="https://static.igem.wiki/teams/5642/images/toolbox/vacumtesting/duckweed-08365-min.webp" alt="In vitro calli of Spirodela polyrhiza 162 expressing RUBY" className=" object-cover" />
            </div>
            <div className="mt-4 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <h3 className="font-['Space_Grotesk'] font-bold text-lg text-blue-800 mb-2">
              Look at our simplified duckweed transformation protocol for transient expression!
            </h3>
          </div>
          </div>
        </div>

        <div className="col-span-2">
          <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
            <div className="w-full  h-64  rounded overflow-hidden">
              <img src="https://static.igem.wiki/teams/5642/images/toolbox/vacumtesting/vacuum-pics-copy-2.webp" alt="In vitro calli of Spirodela polyrhiza 162 expressing RUBY" className=" object-cover" />
            </div>
            <p className="text-md mt-4 text-gray-600">
              <strong>Figure 1.</strong> An example of stable expression of RUBY resulting in red coloring from betalain in calli of <em>Spirodela polyrhiza</em> 162
            </p>
          </div>
        </div>
        
    
      </div>

      {/* Agrobacterium strains tested */}
      <section className="mb-8 mt-10">
        <h2 className="text-2xl font-bold mb-4 font-['Space_Grotesk'] text-gray-900">
          Agrobacterium strains tested
        </h2>
        <p className="mb-4">
          <em>Agrobacterium tumefaciens</em> strains differ in virulence and host range - testing several of them (<strong>AtEHA105</strong>, 
          <strong>AtGV3101</strong> and <strong>AtC58C1</strong>) lets us find the most effective for our species.
        </p>
      </section>

      {/* Duckweed clones tested */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 font-['Space_Grotesk'] text-gray-900">
          Duckweed clones tested
        </h2>
        <p className="mb-4">
          As genotypes vary in susceptibility, we tested <strong>12 duckweed clones</strong> deposited to us by <strong>Dr. Morello from IBBA 
          BioBank</strong>, our enablement partner. <strong>Clones at our collection:</strong> <em>Spirodela polyrhiza</em> 162, <em>Spirodela polyrhiza</em> 7498, 
          <em>Spirodela polyrhiza</em> 9509, <em>Lemna minor</em> 5500, <em>Lemna minor</em> 5930, <em>Lemna minor</em> 8623´, <em>Lemna japonica</em> 8627, <em>Lemna 
          gibba</em> 7742, <em>Lemna obscura</em> 9342, <em>Lemna valdiviana</em> 9382, <em>Wolffia globosa</em> 9527, <em>Wolffia hyalina</em> 9525
        </p>
      </section>

      {/* Vacuum infiltration conditions */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 font-['Space_Grotesk'] text-gray-900">
          Vacuum infiltration conditions
        </h2>
        <p className="mb-4">
          We tested <strong>time of vacuum infiltration</strong> for <strong>5, 10, 15, and 20 minutes</strong> as longer vacuum application can pull bacteria 
          deeper into tissues but also risks tissue damage – we tested a range to find the optimum for each clone.
        </p>
        <p className="mb-4">
          We tested <strong>co-cultivation</strong> of <em>Agrobacterium</em> with duckweed under <strong>light and dark conditions</strong> at <strong>21 °C</strong>, with the light on a 
          <strong> 16/8 h photoperiod</strong> at <strong>200 µmol photons·m⁻²·s⁻¹</strong>. Light can trigger plant defenses, while darkness may favour T-
          DNA transfer, so both conditions were compared.
        </p>
        <p className="mb-4">
          As <strong>Silwet L-77</strong> is used in the protocol of Dr. Ordoñez as a surfactant to reduce surface tension and improve 
          bacterial entry (typically in waxy leaves), we tested whether it boosts transformation efficiency in our clones. Since we 
          found it difficult to obtain for some iGEM teams, showing that it is not strictly necessary would be beneficial.
        </p>
      </section>

      {/* Results */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 font-['Space_Grotesk'] text-gray-900">
          Results
        </h2>
        <p className="mb-4">
          From the tested strains mentioned above, <strong>AtEHA105</strong> proved to be the most effective for duckweed transformation, 
          followed by <strong>AtGV3101</strong> and <strong>AtC58C1</strong>. There was no difference in the ability of strains to infect different duckweed 
          clones. All <em>Agrobacterium</em> strains successfully transiently transformed duckweed clones <strong>Sp7428, Sp9509, Sp162, 
          Lg7742, and Wg9522</strong> (confirmed visually by the red appearance of fronds caused by RUBY), with the highest 
          transformation efficiency observed in <strong>Sp7428</strong>.
        </p>
        <p className="mb-4">
          <strong>Infiltration was most effective with 5 - 10 minutes</strong> of vacuum application. Longer treatments (15 - 20 minutes) 
          caused excessive tissue damage and frond die-off.
        </p>
        <p className="mb-4">
          <strong>Co-cultivation under light conditions</strong> resulted in healthier, faster-dividing fronds, whereas co-cultivation in 
          <strong> darkness</strong> not only slowed growth but also prevented any transient expression.
        </p>
        <p className="mb-4">
          The addition of <strong>Silwet L-77</strong> had no effect compared to the control, probably because duckweed leaves are not as 
          waxy as those of <em>Arabidopsis</em> or maize, where Silwet is especially useful.
        </p>
      </section>

      {/* Figure 2 */}
      <div className="mb-8">
        
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            
            
            <img src="https://static.igem.wiki/teams/5642/images/toolbox/vacumtesting/vacuum-pics-min.webp" alt="Lemna gibba 7742 expressing RUBY after 5 min vacuum and light co-cultivation" className=" object-cover col-span-5 md:h-64" />

            <div className='col-span-2'>
                <p className="text-sm text-gray-600">
                  <strong>Figure 2.</strong> Transient transformation of <em>Lemna gibba</em> 7742 by AtEHA105 with 
                  the pAM052 construct (rZmUBI-RUBY) resulted in RUBY being expressed in 
                  some fronds after 5 minutes of vacuuming followed by co-cultivation 
                  under light (1), no expression after 5 minutes of vacuuming followed by co-
                  cultivation in darkness (2), and decreased efficiency of transformation 
                  after 20 minutes of vacuuming followed by co-cultivation under light 
                  (3) due to frond senescence. Photos were taken six days post infiltration.
                </p>
            </div>
          </div>
          
        
      </div>

      {/* Always start from glycerol stock */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 font-['Space_Grotesk'] text-gray-900">
          Always start from glycerol stock!
        </h2>
        <p className="mb-4">
          We demonstrated (although unintentionally) that the longer you reuse the same <em>Agrobacterium</em> culture for inoculation 
          of new culture for transformation, the less efficient the transformation becomes. We found this through repeated 
          deliveries of <strong>pAMO101 constructs</strong> (GFP reporter driven by rZmUBI promoter), which served as a reliable control for 
          our TAIFR assays. Since we knew this construct was functional, it acted as a gold standard for testing whether our 
          vacuum infiltration was efficient, independent of the construct being evaluated. For a long time, we could not identify 
          the reasons for the drop in transformation efficiency (basically from <strong>90% to almost 0%</strong>) until we met <strong>Prof. 
          Wang</strong> (read more on the Human Practices page).
        </p>
        <p className="mb-4">
          We were then strongly advised to <strong>create multiple glycerol stocks</strong> from an <em>Agrobacterium</em> colony identified as 
          positive (by colony PCR) and functionally verified by transformation. New transformations should <strong>always be started 
          from glycerol stock</strong>, not from leftover culture used in previous transformations and stored in the fridge, as we had 
          done.
        </p>
      </section>

      {/* Figure 3 */}

      <div className="mb-8">
        
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
            

            <img src="https://static.igem.wiki/teams/5642/images/toolbox/vacumtesting/vacuum-pics-miniv.webp" alt="Lemna gibba 7742 expressing RUBY after 5 min vacuum and light co-cultivation" className=" object-cover col-span-5 md:h-64" />

            <div className='col-span-2'>
                <p className="text-sm text-gray-600">
            <strong>Figure 3.</strong> Transient expression of GFP driven by the pAMO101 construct 
            (rZmUBI-GFP) in <em>Spirodela polyrhiza</em> 7428 decreased from 90% efficiency 
            (1) using <em>Agrobacterium</em> culture created from glycerol stock, to 10% 
            (2) when using the same culture kept for a week at 4 °C for inoculation of 
            new culture, and to 0% (3) after two weeks. Pictures were taken 6 days 
            post-infiltration using a fluorescence microscope.
          </p>
            </div>
          </div>
          
        

      
      </div>

      {/* Bottom message */}
      <div className="mb-8 bg-red-100 border-l-4 border-red-500 p-4 rounded-r-lg">
        <p className="font-bold text-red-800">
          Always prepare enough glycerol stocks and start each vacuum infiltration with a fresh one!
        </p>
      </div>


        

      <References references={Reference} />

    </div>
  );
}


const Reference = [
    {
        id: 1,
        text: "Barragán-Borrero, V., de Santana Lopes, A., Rodrigues Batista, E. D., Höfer, M., Elias, R., Chakraborty, A., Ponce-Mañe, A., Descombes, C., Diezma-Navas, L., Petraki, L., Huber, M., Xu, S., & Marí-Ordóñez, A. (2025). Strain, procedures, and tools for reproducible genetic transformation and genome editing of Spirodela polyrhiza (L.) Schleid [Preprint]. bioRxiv. https://doi.org/10.1101/2025.08.28.672806",
        url: "https://doi.org/10.1101/2025.08.28.672806"
    },

  ]
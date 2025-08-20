import React from 'react';

const LivingLayersDocument = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-black font-sans">
      {/* Header with background image */}
      <div className="relative bg-gradient-to-br from-green-600 to-green-800 text-white overflow-hidden">
        {/* Background image placeholder */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white text-lg">
            [Background Image - Duckweed cultivation system]
          </div>
        </div>
        
        <div className="relative z-10 p-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Living Layers</h1>
          <p className="text-2xl font-light mb-8">Autonomous vertical duckweed cultivation!</p>
          
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Growing Duckweed Is Exhausting.</h2>
            <h2 className="text-3xl font-bold mb-6">We Make It Easy!</h2>
          </div>
          
          <div className="max-w-3xl mx-auto text-lg leading-relaxed mb-6">
            <p className="mb-6">
              The result? Our compact prototype enabled us to conduct large-scale 
              experiments while saving up to 5 hours of manual labor per day - no 
              more subculturing guesswork, no more constant interventions. Just 
              thriving duckweed cultures, automatically maintained and optimized for 
              growth.
            </p>
          </div>
          
          <div className="bg-orange-500 text-white p-4 rounded-lg max-w-3xl mx-auto">
            <p className="text-lg font-semibold">
              Our system is completely open-source so anyone can download the code, follow the build 
              plans, and assemble their own fully autonomous duckweed cultivator for just around $800!
            </p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="p-8">
        <div className="flex gap-8 mb-12">
          <div className="flex-1">
            <p className="text-base leading-relaxed mb-4">
              Plant scientists spend a significant portion of their time just handling 
              plants—measuring biomass and refreshing medium. Duckweed is no exception. Being 
              the fastest growing plant on the planet, it demands constant attention to maintain the 
              right nutrient levels and avoid overcrowding.
            </p>
            
            <p className="text-xl font-bold text-green-700 mb-4">
              Our autonomous cultivation system changes that!
            </p>
            
            <p className="text-base leading-relaxed">
              With integrated sensors and smart modelling, the system automatically 
              monitors electrical conductivity to refresh the medium—eliminating the need for 
              manual subculturing. Using light-sensitive photoresistors, it continuously tracks 
              duckweed coverage in real-time, ensuring the culture remains at optimal density. And 
              when it's time to harvest, it does it for you.
            </p>
          </div>
          
          <div className="w-80">
            <div className="bg-gray-300 h-64 flex items-center justify-center text-gray-600 border">
              [System Image Placeholder]
            </div>
          </div>
        </div>

        <p className="text-lg font-bold mb-4">We developed a vertical duckweed cultivator featuring:</p>
        
        <div className="flex gap-8 mb-12">
          <div className="flex-1">
            <ul className="list-none space-y-2">
              <li>• 5 cultivation layers, spaced 15 cm apart</li>
              <li>• A total cultivation area of 2.5 m²</li>
              <li>• 75 liters of water capacity</li>
              <li>• Custom-designed acrylic trays for optimal plant growth</li>
              <li>• A bespoke aluminum support structure for stability and durability</li>
              <li>• Compact dimensions: 120 cm tall, with a 60 cm × 100 cm footprint</li>
            </ul>
          </div>
          
          <div className="w-80">
            <div className="bg-gray-300 h-48 flex items-center justify-center text-gray-600 border">
              [Dimensions Diagram Placeholder]
            </div>
          </div>
        </div>

        <div className="flex gap-8 mb-12">
          <div className="flex-1">
            <p className="text-base leading-relaxed mb-4">
              To maintain optimal growth conditions, it's essential to monitor the 
              duckweed biomass on each layer.
            </p>
            
            <p className="text-base leading-relaxed mb-4">
              Since duckweed grows most efficiently when the surface is fully 
              covered, we measure the thickness of the duckweed layer using our 
              custom-designed PROBE system — the <strong>PhotoResistor Oclusion-based 
              Biomass Estimator</strong>.
            </p>
            
            <div className="bg-gray-300 h-48 flex items-center justify-center text-gray-600 border mb-4">
              [PROBE System Diagram Placeholder]
            </div>
          </div>
          
          <div className="w-80">
            <div className="bg-gray-300 h-64 flex items-center justify-center text-gray-600 border">
              [PROBE Grid Image Placeholder]
            </div>
          </div>
        </div>

        <p className="text-base leading-relaxed mb-6">
          PROBE uses a grid of chained, light-sensitive photoresistors submerged beneath the 
          water surface. A photoresistor (or the light-dependent resistor) is an electronic 
          component whose resistance decreases when light falls on it, as it is made of 
          light-sensitive semiconducting material [1]. By measuring the voltage drop across this 
          grid of sensors, we can determine how much light is absorbed by the duckweed. When 
          this data is processed using linear regression, it provides an accurate, real-time estimate 
          of the biomass present on each layer.
        </p>

        <p className="text-base leading-relaxed mb-12">
          The grid of photoresistors is encased in a waterproof plastic casing, allowing for simple 
          installation and maintenance. A single cable with the 3.5mm jack connector connects the 
          PROBE to the system.
        </p>

        <div className="flex gap-8 items-center mb-12">
          <div className="w-80">
            <div className="bg-gray-300 h-32 flex items-center justify-center text-gray-600 border">
              [LED Setup Diagram Placeholder]
            </div>
          </div>
          
          <div className="flex-1">
            <div className="text-6xl font-bold text-green-600 mb-2">11cm</div>
            <p className="text-base leading-relaxed">
              Each cultivation layer is equipped with dedicated LED lighting, positioned just 11 
              cm above the water surface to ensure high light intensity with minimal energy use. This 
              setup enables photosynthetically active radiation (PAR) levels of up to 180 μmol/m² 
              at the water surface, while maintaining power consumption between 36 W and 72 
              W per layer.
            </p>
          </div>
        </div>

        <p className="text-base leading-relaxed mb-6">
          At the heart of the system is a central Raspberry Pi single-board computer, which functions 
          as the main server and control hub. It communicates wirelessly via Wi-Fi and the MQTT 
          application protocol with multiple ESP32 microcontrollers distributed throughout the 
          cultivator. MQTT (Message Queuing Telemetry Transport) in a popular application protocol. It 
          implements a publish-subscribe communication pattern, which is specifically suited for IoT 
          (Internet Of Things) applications. It is even suitable for unstable network connections where it 
          guarantees stability. It is based on a central MQTT broker, which is a computer program 
          continuously running on a server [2].
        </p>

        <div className="flex gap-8 mb-6">
          <div className="flex-1">
            <p className="text-base leading-relaxed mb-4">
              Each ESP32 in the system is responsible for controlling specific hardware 
              components—including LED grow lights, electromagnetic water valves, and the circulation 
              pump—based on commands received from the Raspberry Pi. Users can access the system 
              through a web-based graphical user interface (GUI) hosted on the Raspberry Pi. This 
              interface is accessible from any device with a browser and provides a real-time overview of 
              the cultivator's status as well as full control over system parameters and operations. All the 
              code we used is available in our GitHub repository.
            </p>
            
            <div className="bg-green-100 p-3 text-center border">
              <p className="font-bold">See the result for yourself!</p>
            </div>
          </div>
          
          <div className="w-80">
            <div className="bg-gray-300 h-48 flex items-center justify-center text-gray-600 border">
              [System Architecture Placeholder]
            </div>
          </div>
        </div>

        <div className="flex gap-8 mb-12">
          <div className="flex-1">
            <p className="text-base leading-relaxed mb-4">
              The server, Wi-Fi router, and power supply are packaged in a separate 
              suitcase, which is plugged into a wall outlet. A single power cable 
              connecting the suitcase to the cultivator is all that's required. All 
              data transfer is handled wirelessly.
            </p>
            
            <p className="text-base leading-relaxed mb-6">
              The suitcase also contains electrical circuit breakers and current 
              protection circuits, which ensure safety. In case of a short circuit or 
              some other failure, the power will be immediately automatically turned off.
            </p>
            
            <div className="bg-gray-300 h-24 flex items-center justify-center text-gray-600 border text-xs mb-4">
              [RaspberryPi server, ESP, ESP Connection Diagram]
            </div>
          </div>
          
          <div className="w-80">
            <div className="bg-gray-300 h-64 flex items-center justify-center text-gray-600 border">
              [Suitcase Contents Image]
            </div>
          </div>
        </div>

        <p className="text-base leading-relaxed mb-6">
          The remaining electronics are mounted directly on the cultivator, neatly organized into two waterproof boxes, 
          each equipped with an ESP32 microcontroller.
        </p>

        <div className="flex gap-8 mb-6">
          <div className="flex-1">
            <p className="font-bold mb-2">• The first box primarily includes:</p>
            <div className="ml-4 mb-4">
              <p>○ Five relays for switching the grow lights on each layer on and off</p>
              <p>○ Five relays for actuating the electromagnetic valves that direct water flow to specific layers</p>
              <p>○ Five connectors for reading output from the PROBE system on each layer</p>
            </div>
          </div>
          
          <div className="flex-1">
            <p className="font-bold mb-2">• The second box contains:</p>
            <div className="ml-4">
              <p>○ Electronics for measuring water conductivity</p>
              <p>○ MOSFET transistors for controlling peristaltic pumps that precisely dose nutrients into the water</p>
              <p>○ Two PWM (Pulse Width Modulation) DC motor drivers for operating the harvesting and circulation pumps</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-100 p-3 text-center border mb-12">
          <p className="font-bold">Detailed Schematics</p>
        </div>

        <div className="flex gap-8 mb-6">
          <div className="flex-1">
            <p className="text-base leading-relaxed mb-4">
              While the duckweed grows, gentle water streams continuously stir the medium, 
              ensuring even nutrient distribution. As biomass accumulates, the system monitors 
              growth on each layer. Once a predefined density threshold is reached, targeted 
              water streams are activated to guide excess duckweed over the tray's edge, 
              enabling precise, automated harvesting without disturbing the remaining plants.
            </p>
            
            <p className="text-base leading-relaxed mb-4">
              To achieve reliable and efficient harvesting, we tested water streams of 
              various diameters, adjusted jet spacing, and experimented with different outlet 
              angles. The most effective configuration features:
            </p>
            
            <ul className="list-none mb-4">
              <li>• 1 mm diameter jets, spaced 7 cm apart</li>
              <li>• Streams exiting at 45° along the harvesting direction and 30° downward</li>
            </ul>
            
            <p className="text-base leading-relaxed">
              This setup enables consistent harvesting with minimal water usage, gently guiding 
              excess duckweed over the tray edge without disturbing the remaining biomass.
            </p>
          </div>
          
          <div className="w-80">
            <div className="bg-gray-300 h-64 flex items-center justify-center text-gray-600 border">
              [Harvesting System Image]
            </div>
          </div>
        </div>

        <p className="text-base leading-relaxed mb-12">
          Water is pumped from a central reservoir using a PWM-controlled pump, allowing 
          precise control of pressure across all layers. The flow is directed through a 
          ladder of electromagnetic valves, which selectively channel water to individual 
          layers.This architecture enables isolated harvesting, making it possible to cultivate 
          different duckweed strains on separate layers without cross-contamination.
        </p>

        <p className="text-base leading-relaxed mb-6">
          The harvested duckweed falls through a vertical drop chute, where it is separated from 
          the water, and stored until it is picked up by the operator. The collected water is immediately 
          filtered, ensuring that it remains free of duckweed and and suitable for reuse in future 
          cultivation cycles.
        </p>

        <p className="text-base leading-relaxed mb-6">
          The water is then directed into a central reservoir. Inside the reservoir, sensors 
          automatically measure the water's electrical conductivity (EC) and the pH 
          level to assess the dissolved nutrient levels, while peristaltic pumps 
          accurately inject the nutrients as needed. The system allows for 4 
          different liquid additives to be separately mixed into the medium. In 
          order to prevent clumping in the liquid additives, dedicated electric DC motors 
          periodically spin a metal stirrer inside the containers, using neodymium 
          magnets below the base of the containers. A mixing pump then 
          ensures an even distribution inside the main reservoir, maintaining an ideal 
          growth solution and preventing the crystallization of the combined 
          additives.
        </p>

        <p className="text-base leading-relaxed mb-6">
          Once enriched and balanced, the water is cycled back into the trays for the next 
          round of cultivation. This closed-loop design minimizes waste, conserves 
          resources, and keeps the duckweed growing under optimal conditions—harvest 
          after harvest.
        </p>

        <div className="bg-green-100 p-3 text-center border mb-12">
          <p className="font-bold">See how our nutrient system works in detail.</p>
        </div>

        <div className="flex gap-8 mb-6">
          <div className="flex-1">
            <p className="text-base leading-relaxed mb-4">
              Each layer of the system holds a large water tray, where duckweed naturally grows 
              on the surface. These trays are made from 4 mm thick opaque acrylic sheets, precisely 
              cut using a computer-controlled laser cutter based on our custom design.
            </p>
            
            <p className="text-base leading-relaxed mb-4">
              After experimenting with simple straight-edge trays, we refined the design 
              to feature interlocking components that slot together, maximizing strength and 
              durability. The trays are assembled using specialized acrylic glue, and all seams are 
              sealed with non-toxic silicone to ensure water resistance.
            </p>
            
            <p className="text-base leading-relaxed">
              During early trials with transparent acrylic, we observed that light entering from the 
              sides encouraged unwanted algae growth. Switching to opaque acrylic significantly 
              reduced algae proliferation, improving overall system hygiene and duckweed 
              health.
            </p>
          </div>
          
          <div className="w-80">
            <div className="bg-gray-300 h-48 flex items-center justify-center text-gray-600 border">
              [Tray Design Image]
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-12">
          <div className="bg-blue-100 p-3 text-center border flex-1">
            <p className="font-bold">Detailed Schematic</p>
          </div>
          <div className="bg-green-100 p-3 text-center border flex-1">
            <p className="font-bold">See the trays in detail</p>
          </div>
        </div>

        <div className="flex gap-4 mb-12">
          <div className="bg-green-100 p-3 text-center border flex-1">
            <p className="font-bold">Check out the GUI</p>
          </div>
          <div className="bg-blue-100 p-3 text-center border flex-1">
            <p className="font-bold">See the whole water circulation system</p>
          </div>
          <div className="bg-purple-100 p-3 text-center border flex-1">
            <p className="font-bold">See the what lights we used</p>
          </div>
        </div>

        <div className="border-t pt-6">
          <p className="font-bold mb-4">References:</p>
          <p className="text-sm leading-relaxed mb-3">
            [1] Dingore, A., Salunkhe, D., & Kalantri, H. (2020). Light Dependent Resistor 
            Product Separator. International Journal of Innovative Research in Science, 
            Engineering and Technology, 9(5). Retrieved from 
            https://www.ijirset.com/upload/2020/may/97_Light.PDF
          </p>
          <p className="text-sm leading-relaxed">
            [2] Koziolek, H., Grüner, S., Rückert, J. (2020). A Comparison of MQTT Brokers 
            for Distributed IoT Edge Computing. In: Jansen, A., Malavolta, I., Muccini, H., 
            Ozkaya, I., Zimmermann, O. (eds) Software Architecture. ECSA 2020. Lecture 
            Notes in Computer Science(), vol 12292. Springer, Cham. 
            https://doi.org/10.1007/978-3-030-58923-3_23
          </p>
        </div>
      </div>
    </div>
  );
};

export default LivingLayersDocument;
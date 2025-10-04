export default function CultivatorBillOfMaterials() {
    const materials = [
        {name: "Aluminum support frame", amount: "30 m"},
        {name: "Acrylic sheet (opaque, 4 mm)", amount: "5 pcs (65×115 cm)"},
        {name: "Water pump", amount: "2 pcs"},
        {name: "Peristaltic pump", amount: "4 pcs"},
        {name: "Electromagnetic valve", amount: "5 pcs"},
        {name: "ESP32 microcontroller", amount: "2 pcs"},
        {name: "Raspberry Pi 4", amount: "1 pc"},
        {name: "LED grow lights + diffusers", amount: "15 m"},
        {name: "Water reservoir (40 L)", amount: "1 pc"},
        {name: "pH sensor", amount: "1 pc"},
        {name: "EC sensor", amount: "1 pc"},
        {name: "Silicone tubing (opaque, 12 mm)", amount: "1 m"},
        {name: "Silicone tubing (4 mm)", amount: "1 m"},
        {name: "Magnetic stirrer motor", amount: "4 pcs"},
        {name: "Acrylic glue", amount: "1 tube"},
        {name: "Non-toxic silicone sealant", amount: "1 tube"},
        {name: "DC motor driver (PWM)", amount: "1 pc"},
        {name: "Relay / MOSFET transistor", amount: "15 pcs"},
        {name: "DC connector", amount: "25 pcs"},
        {name: "Electronics box", amount: "2 pcs"},
        {name: "Voltage step-down module", amount: "4 pcs"},
        {name: "Power supply (12V, 500W)", amount: "1 pc"},
        {name: "Circuit protection unit", amount: "1 pc"},
        {name: "WiFi router", amount: "1 pc"},
        {name: "Light Dependent Resistor", amount: "100 pcs"},
        {name: "200 kΩ Resistor", amount: "5 pcs"},
        {name: "Plastic PROBE sensor casing", amount: "5 pcs"},
        {name: "4mm² 2-wire cable", amount: "2 m"},
        {name: "1mm² 2-wire cable", amount: "40 m"},
        {name: "12V fan", amount: "2 pcs"},
        {name: "PVC pipe (20 mm)", amount: "11 m"},
        {name: "PVC corner piece (20 mm)", amount: "12 pcs"},
        {name: "PVC T piece (20 mm)", amount: "9 pcs"},
        {name: "Brass tube (3 mm)", amount: "7 m"},
    ];

    return (
        <div className="max-w-6xl mx-auto p-8 bg-white text-gray-900 font-[Urbanist,sans-serif]">
            <h2
                className="font-bold text-green-700 mb-6 text-center"
                style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: window.innerWidth < 768 ? "1.6rem" : "2rem",
                }}
            >
                Bill of Materials
            </h2>

            <p className="text-lg mb-6 text-justify">
                The complete <span className="font-bold text-[#6ca033]">Bill of Materials (BOM)</span> lists
                every component used to build our autonomous cultivator. The design prioritizes{" "}
                <span className="font-bold">accessibility</span>, using{" "}
                <span className="font-bold text-[#6ca033]">readily available and affordable parts</span> that
                can be sourced from standard suppliers or online marketplaces.
            </p>

            {/* Scrollable table container */}
            <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
                <div className="overflow-y-auto max-h-80">
                    <table className="min-w-full border-collapse text-[0.95rem]">
                        <thead className="bg-green-700 text-white sticky top-0">
                        <tr>
                            <th className="text-left py-3 px-4 font-semibold rounded-tl-lg">Component</th>
                            <th className="text-left py-3 px-4 font-semibold rounded-tr-lg">Amount</th>
                        </tr>
                        </thead>
                        <tbody>
                        {materials.map((item, index) => (
                            <tr
                                key={index}
                                className={`${
                                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                                } hover:bg-green-50 transition`}
                            >
                                <td className="py-2 px-4 border-t border-gray-200">{item.name}</td>
                                <td className="py-2 px-4 border-t border-gray-200">{item.amount}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <p className="mt-6 text-sm text-gray-600 italic text-center">
                *Scroll to view the full list of components.
            </p>
        </div>
    );
}

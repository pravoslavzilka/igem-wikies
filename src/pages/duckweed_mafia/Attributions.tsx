



const Attributions = () => {

  const teamID = import.meta.env.VITE_TEAM_ID;
    
  return (
    <div className="max-w-6xl mx-auto">   
        <h1 className="text-4xl text-center font-bold mb-16 mt-16" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Attributions</h1>



        
        <iframe
          style={{ width: "100%", height: "1000px", border: "none" }}
          id="igem-attribution-form"
          src={`https://teams.igem.org/wiki/5642/attributions`}
        />


    </div>
  );
}



export default Attributions;




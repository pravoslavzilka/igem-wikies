const FinalMessageSection = () => {
  return (
    <section 
      className="flex justify-center items-start bg-white relative"
      style={{ 
        padding: '40px 128px 80px', 
        gap: '64px',
        width: '1440px',
        height: '415px'
      }}
    >
      <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gray-100"></div>
      <div 
        className="bg-gray-100 rounded-2xl z-10 flex flex-col items-center text-center"
        style={{ 
          padding: '80px 200px', 
          gap: '16px',
          width: '1184px',
          height: '295px',
          borderRadius: '16px'
        }}
      >
        <p 
          className="text-gray-900 text-center"
          style={{ 
            fontFamily: 'Urbanist, sans-serif',
            fontSize: '32px',
            fontWeight: 600,
            lineHeight: '140%',
            color: '#1B1B1B',
            width: '784px',
            height: '135px'
          }}
        >
          And that is also why we went to iGEM - to show the entire SynBio community the potential of duckweed and to make tools available for anyone to unlock it!
        </p>
      </div>
    </section>
  );
};

export default FinalMessageSection;
import React from 'react';

function CustomersUi() {
  // const settings = {
  //   width: 300,
  //   height: 300,
  //   image: './scratch-cover.jpg', // The image that covers the scratchable area
  //   finishPercent: 70, // How much should be scratched before revealing the content
  //   onComplete: () => console.log('Revealed!'), // Callback when scratching is complete
  // };

  return (
    <div
      className="min-h-screen bg-black flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: "url('/bg-new.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      {/* Logo Section */}
      <div className="text-center mb-2 flex flex-col  justify-center items-center">
        <img src="./logo.jpg" className="w-44" alt="logo" />
      </div>

      {/* Scratch Card Section */}
      <div className="text-center mb-6">
        <img src="./scratch-card.jpg" className="w-60 rounded-full " alt="" />
      </div>

      {/* Scratch Card UI */}
      <div className="text-center mb-6">
    
      </div>
    </div>
  );
}

export default CustomersUi;

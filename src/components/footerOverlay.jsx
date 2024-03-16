import React from 'react';

const FooterOverlay = () => (
  <div className="relative w-full h-full z-0 flex flex-col ">
    <div className="h-1/4 bg-black" />
    <div className="h-3/4 bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }} />
  </div>
);

export default FooterOverlay;

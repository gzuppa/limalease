

import React from 'react';

const GoogleMap = () => {
  return (
    <>
      <div className="map-section">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.608563485092!2d-99.20842618859989!3d19.429311681773726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d201f60726c1e9%3A0xfca2ec23d0fedec0!2sPerif.%20Blvd.%20Manuel%20%C3%81vila%20Camacho%2040%2C%20Lomas%20-%20Virreyes%2C%20Lomas%20de%20Chapultepec%20III%20Secc%2C%20Miguel%20Hidalgo%2C%2011000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1751066186048!5m2!1ses!2smx" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
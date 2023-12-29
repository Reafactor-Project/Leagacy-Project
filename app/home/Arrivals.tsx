import React from 'react';
import "./Arrivals.css";

const Arrivals: React.FC = () => {
  const imageUrl = 'https://i.ibb.co/yd4cNfv/Frame-740.png'; 

  return (
    <div className="imagee-container">
      <img src={imageUrl} alt="Image" />
    </div>
  );
};

export default Arrivals;

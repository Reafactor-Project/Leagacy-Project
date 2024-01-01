import React from 'react';
import "./Delivery.css";

const Delivery: React.FC = () => {
  const imageUrl = 'https://i.postimg.cc/VsSPBfDY/e87e5165-1214-471a-8b28-b590f7ae311a.png'; 

  return (
    <div className="image-containersss">
      <img src={imageUrl} alt="Image" />
    </div>
  );
};

export default Delivery;

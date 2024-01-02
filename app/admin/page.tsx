import React from "react";
import './Admin.css';
import Navbar from "./navebarAdmin";

const Admin: React.FC = () => {
  // Replace these placeholders with actual data
  const email = "user@example.com";
  const name = "John Doe";

  return (
    <>
      <div className="divAdmin">
        <div className="divAdmin2">
          <Navbar/>

        </div>
      </div>
    </>
  );
};

export default Admin;

import React from "react";
import {Link} from "react-router-dom"
const Home = () => {
  return (
    

    <div className="flex items-center  my-6">
      {/* Home */}
      <div className="relative bg-blue-900 text-white px-6 py-2 right-clip">
        <Link to="/">Home</Link>
      </div>

      {/* Service */}
      <div className="relative bg-blue-900 text-white px-6 py-2 clip-arrow">
        <Link to="/service">Service</Link>
      </div>

      {/* Hematology & Cytogenetics */}
      <div className="relative bg-red-600 text-white px-6 py-2 clip-arrow">
        Hematology & Cytogenetics
      </div>
    </div>


  );
};

export default Home;

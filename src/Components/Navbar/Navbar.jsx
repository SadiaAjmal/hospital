// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const categories = [
    { name: "Laboratory Testing", path: "/service/laboratory-testing" },
    { name: "Radiology", path: "/service/radiology" },
    { name: "Pathology", path: "/service/pathology" },
  ];

  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-xl font-bold">
        MyClinic
      </Link>

      {/* Nav Links */}
      <ul className="flex items-center space-x-6">
        <li>
          <Link to="/">Home</Link>
        </li>

        {/* Service Dropdown */}
        <li
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button className="focus:outline-none">Services ▾</button>

          {open && (
            <ul className="absolute left-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-lg">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    to={cat.path}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        
        <li>
          <Link to="/publications">Publications</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;

// src/components/Breadcrumb.jsx
import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ items }) => {
    return (
        <div className="flex items-center my-6">
            {items.map((item, index) => {
                // Last item will be red (active)
                const isLast = index === items.length - 1;
                const className = isLast
                    ? "relative bg-red-600 text-white px-6 py-2 clip-arrow"
                    : index === 0
                        ? "relative bg-blue-900 hover:bg-red-600 transition-color duration-300 text-white px-6 py-2 right-clip"
                        : "relative bg-blue-900 hover:bg-red-600 transition-color duration-300 text-white px-6 py-2 clip-arrow";

                return (
                    <div key={index} className={className}>
                        {item.link ? (
                            <Link to={item.link}>{item.label}</Link>
                        ) : (
                            <span>{item.label}</span>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default BreadCrumb;

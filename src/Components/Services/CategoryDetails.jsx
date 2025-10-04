// src/Components/Services/CategoryDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import servicesData from "../../Data/servicesData";

const CategoryDetails = () => {
  const { category } = useParams();
  const categoryData = servicesData[category];

  if (!categoryData) {
    return <h2 className="text-center py-10">Category not found</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <BreadCrumb
        items={[
          { label: "Home", link: "/" },
          { label: "Service", link: "/service" },
        ]}
      />

      {/* Heading */}
      {categoryData?.title && (
        <h1 className="text-3xl font-bold mb-4">{categoryData.title}</h1>
      )}

      {categoryData?.desc && (
        <p className="text-gray-600 mb-6">{categoryData.desc}</p>
      )}
      {categoryData?.desc1 && (
        <p className="text-gray-600 mb-6">{categoryData.desc1}</p>
      )}
      
      {categoryData?.desc2 && (
        <p className="text-gray-600 mb-6">{categoryData.desc2}</p>
      )}
      
      {categoryData?.desc3 && (
        <p className="text-gray-600 mb-6">{categoryData.desc3}</p>
      )}

      {/* Subcategories grid */}
      {categoryData?.subcategories?.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {categoryData.subcategories.map((sub) => (
            <Link
              key={sub.id}
              to={`/service/${category}/${sub.id}`}
              className="transition p-4 text-center"
            >
              {sub.image && (
                <img
                  src={sub.image}
                  alt={sub.name}
                  className="w-full h-52 object-cover mb-2 rounded"
                />
              )}
              {sub.name && (
                <h3 className="text-lg font-medium">{sub.name}</h3>
              )}
             
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No subcategories available for this service.
        </p>
      )}
    </div>
  );
};

export default CategoryDetails;

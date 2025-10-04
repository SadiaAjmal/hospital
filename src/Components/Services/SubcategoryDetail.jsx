// src/Components/Services/SubcategoryDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../BreadCrumb";
import servicesData from "../../data/servicesData";
import { FaPhoneAlt, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const SubcategoryDetail = () => {
    const { category, subcategory } = useParams();
    const categoryData = servicesData[category];

    if (!categoryData) {
        return <h2 className="text-center py-10">Category not found</h2>;
    }

    const sub = categoryData.subcategories.find(
        (s) => String(s.id) === subcategory
    );

    if (!sub) {
        return <h2 className="text-center py-10">Subcategory not found</h2>;
    }

    return (
        <div className="px-6 py-10">

            <BreadCrumb
                items={[
                    { label: "Home", link: "/" },
                    { label: "Service", link: "/service" },
                    { label: categoryData.title, link: `/service/${category}` },
                ]}
            />

            <h1 className="text-3xl font-bold mb-4">{sub.name}</h1>

            <div className=" flex flex-1 ">
                <div className="">
                    {sub?.intro && (
                        <p className="text-gray-600 mb-6">{sub.intro}</p>
                    )}

                    {sub?.assurance && (
                        <p className="text-gray-600 mb-6">{sub.assurance}</p>
                    )}


                </div>


                <img
                    src={sub.image}
                    alt={sub.name}
                    className="w-full max-w-xl h-64 object-cover rounded mb-6"
                />

            </div>



            {sub?.description && (
                <p className="text-gray-600 mb-6">{sub.description}</p>
            )}


            <div className="flex item-center gap-10">

                <h2 className=" text-2xl font-semibold text-gray-500">For an appointment and to get this service</h2>

                <div className="flex flex-wrap gap-2 mb-6">
                    <button className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 font-semibold hover:bg-blue-800 transition cursor-pointer">
                        <FaPhoneAlt /> CALL NOW
                    </button>
                    <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 font-semibold hover:bg-red-500 transition cursor-pointer">
                        <FaCalendarAlt /> BOOK AN APPOINTMENT
                    </button>
                    <button className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 font-semibold hover:bg-blue-800 transition cursor-pointer">
                        <FaMapMarkerAlt /> IDC LOCATIONS
                    </button>
                </div>

            </div>

            {/* Info Section */}
            <div className="text-gray-800 space-y-3">
                <p>
                    <span className="font-medium">Please call Patient Services Department at</span>
                </p>
                <p>
                    <span className="font-semibold">UAN #:</span> 051-111-000-432
                </p>

                <p className="text-sm">
                    <span className="font-semibold">Disclaimer:</span> Every diagnostic test has scientific acceptable
                    technology or technique-based limitations of uncertainty of measurement,
                    false positive or false negative and so do not fall under the domain of
                    negligence.{" "}
                    <span className="font-bold">
                        In case of any such scenario, we offer free repeat of test within 24-48 hours.
                    </span>
                </p>
            </div>


        </div>
    );
};

export default SubcategoryDetail;

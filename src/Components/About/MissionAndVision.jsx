// src/components/MissionAndVision.jsx
import React from "react";
import BreadCrumb from "../BreadCrumb";


const sections = [
   
    {
        heading: "Our Mission",
        description:
            "Our mission is to empower communities by delivering innovative solutions, fostering inclusivity, and creating long-term value for people and businesses alike.",
        img: "/ourMission.jpg",
        imgAlt: "Mission image",
    },
    
    {
        heading: "Our Vision",
        description:
            "Our vision is to be a catalyst for positive change — building a future where technology and humanity meet to solve real-world problems.",
        img: "/ourVision.jpg",
        imgAlt: "Vision image",
    },
    {
        heading: "Our Values",
        description:
            "We believe in integrity, collaboration, and continuous improvement. Our values guide our decisions and shape how we serve communities.",
        img: "/ourValues.jpg",
        imgAlt: "Values image",
    },
];

const MissionAndVision = () => {
    return (
        <main className="md:px-20 px-3 py-10 overflow-hidden">
            
            <BreadCrumb
                items={[
                    { label: "Home", link: "/" },
                    { label: "About", link: "/about" },
                    { label: "Mission&Vision", link: "/" },
                ]}
            />
            
            {sections.map((item, index) => (
                <section
                    key={index}
                    className={`flex flex-col md:flex-row items-center justify-between gap-3 md:gap-10 py-5 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                        }`}
                >


                    {/* Text */}
                    <aside
                        className="md:w-1/2 w-full flex flex-col"
                    >
                        <div className=" w-full md:space-y-6">
                            <h2 className="text-3xl font-bold text-gray-900">
                                {item.heading}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    </aside>
                    
                    
                    {/* Image */}
                    <figure
                        className="md:w-1/2 w-full"
                    >
                        <img
                            src={item.img}
                            alt={item.imgAlt}
                            className="w-full h-80 object-cover rounded-xl shadow-lg"
                        />
                    </figure>
                    
                </section>
            ))}
        </main>
    );
};

export default MissionAndVision;

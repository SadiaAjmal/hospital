import React from "react";
import { FaStethoscope, FaCogs, FaHeart, FaMicroscope } from "react-icons/fa"; 

const WhyChooseUs = () => {
    
    const features = [
        {
            id: 1,
            title: "World-Class Medical Team",
            description:
                "Our doctors are leaders in their fields, committed to providing the best possible outcomes.",
            icon: <FaStethoscope className="text-blue-600 text-xl" />,
        },
        {
            id: 2,
            title: "Advanced Technology",
            description:
                "We invest in the latest medical technologies to ensure accurate diagnoses and effective treatments.",
            icon: <FaCogs className="text-blue-600 text-xl" />,
        },
        {
            id: 3,
            title: "Patient-Centered Care",
            description:
                "Your health and comfort are our top priorities. We tailor our care to your individual needs.",
            icon: <FaHeart className="text-blue-600 text-xl" />,
        },
        {
            id: 4,
            title: "Research & Innovation",
            description:
                "We are at the forefront of medical research, bringing the most innovative treatments available.",
            icon: <FaMicroscope className="text-blue-600 text-xl" />,
        },
    ];
    
    return (
        <main className="">
            {/* Hero Section */}
            <header
                className="relative bg-blue-900 text-white"
                style={{
                    backgroundImage: `url("https://www.shutterstock.com/image-photo/young-scientists-conducting-research-investigations-600nw-2149947783.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                <section className="relative z-10 container mx-auto px-6 py-20 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Experience the IDC Difference: Where Expertise Meets Compassion
                    </h1>
                    <p className="max-w-2xl mx-auto text-base md:text-lg">
                        Discover our unwavering commitment to providing world-class,
                        patient-centered care, powered by innovation and a deep sense of
                        empathy.
                    </p>
                </section>
            </header>

            {/* Why Choose Section */}
            <section className="px-3 md:px-20 py-12">
                <header className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold">Why Choose IDC?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                        We are dedicated to providing the highest quality of care through
                        our expert team, advanced technology, and a compassionate approach
                        that puts our patients first.
                    </p>
                </header>

                <section className="grid md:grid-cols-2 gap-20">
                    {/* Left Features */}
                    <aside className="space-y-4">
                        {features.map((feature) => (
                            <article
                                key={feature.id}
                                className="flex items-start p-4 bg-gray-50"
                            >
                                <div className=" p-6 bg-blue-100 flex items-center justify-center rounded-full mr-4">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold">{feature.title}</h3>
                                    <p className="text-sm text-gray-600">{feature.description}</p>
                                </div>
                            </article>
                        ))}
                    </aside>

                    {/* Right Commitment Box */}
                    <article className="bg-gray-50 rounded-sm overflow-hidden flex flex-col justify-between">
                        <figure className=" h-58">
                            <img src="https://www.shutterstock.com/image-photo/young-scientists-conducting-research-investigations-600nw-2149947783.jpg" alt="" className="h-full w-full"/>
                        </figure>
                        <figcaption className=" p-5 space-y-2">
                            <h3 className="font-semibold text-xl">
                                Our Commitment to Excellence
                            </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            At IDC, we believe that exceptional healthcare is a combination of
                            cutting-edge science and genuine human connection. Our mission is
                            to deliver not just treatments, but holistic care that respects
                            the dignity and individuality of every patient. We continuously
                            strive for excellence by investing in our people, our technology,
                            and our community, ensuring that you receive the best care
                            possible, every single time.
                        </p>
                        <footer>
                            <button className=" bg-blue-900 text-white px-5 py-2 rounded-md hover:bg-blue-800 transition">
                                Explore Our Services
                            </button>
                        </footer>
                        </figcaption>
                       
                    </article>
                </section>
            </section>
            
            
            {/*         Hear from our patients         */}
            
            <section>
                <h2 className="text-xl md:text-3xl font-bold text-gray-800 text-center my-5">
                    Hear from Our Patients
                </h2>
                <div className="flex justify-center ">
                    <video
                        className="w-full h-[50vh] max-w-xl rounded-xl shadow-lg"
                        controls
                    >
                        <source src="public\Video\Media2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                
            </section>

            {/*         Experience difference         */}  

            <section className=" bg-gray-50 w-full py-10 mt-20 text-center">
                <h2 className=" text-2xl font-bold">Experience aman lab difference </h2>
                
                <div className=" mt-5 space-x-5">
                    <button className=" px-5 py-2 bg-blue-500 rounded-sm cursor-pointer text-white">Schedule an appointment</button>
                    <button className=" px-5 py-2 bg-red-500 rounded-sm cursor-pointer text-white">Share your story</button>
                </div>
            </section>            
            
            
        </main>
    );
};

export default WhyChooseUs;

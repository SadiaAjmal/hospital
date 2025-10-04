import React from 'react'
import BreadCrumb from '../BreadCrumb'

const Managment = () => {
    const managmentInfo = [
        {
            id: 1,
            image:"/ourVision.jpg",
            name: "Prof. Dr. Rizwan Uppal",
            role: "Founding Chairman/CEO",
            desc: "Prof. Dr. Rizwan has more than 30 years of experience of active clinical practice. As the Founder, Chairman and CEO of IDC, he has steered the company from a humble start up to being one of the leading diagnostic facilities of the country.",
        },
        {
            id: 2,
            image: "/ourVision.jpg",
            name: "Dr. Rehan Uppal",
            role: "Co-Founder/Deputy CEO",
            desc: "Dr. Rehan Uppal, co-founder of IDC since 2004, is a Consultant and Holistic Care Physician with 28+ years of experience. A graduate of King Edward Medical College, he plays a key leadership role as Deputy CEO, driving IDC's growth.",
        },
        {
            id: 3,
            image:"/ourVision.jpg",
            name: "Mr. Bilal Aslam Qureshi",
            role: "Chief Financial Officer",
            desc: "Mr. Bilal, a top 4 FT(UK) MBA graduate from the University of Manchester and a chartered certified accountant, has over 15 years of international experience in telecom, consulting, and healthcare.",
        },
    ]

    return (
        <section className='md:px-20 px-3'>
            <BreadCrumb
                items={[
                    { label: "Home", link: "/" },
                    { label: "About", link: "/about" },
                    { label: "Managment", link: "/managment" },
                ]}
            />

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                {managmentInfo.map((info) => (
                    <article key={info.id} className="">
                        <figure className="mb-4">
                            <img
                                src={info.image}
                                alt={info.name}
                                className="w-58 h-58 rounded-full mx-auto object-cover"
                            />
                        </figure>
                        <figcaption>
                            <h2 className='text-2xl text-blue-500 hover:text-red-500 transition-colors duration-700 cursor-pointer text-center mb-2'>
                                {info.name}
                            </h2>
                            <h3 className='text-black text-center font-semibold mb-3'>
                                {info.role}
                            </h3>
                            <p className="text-gray-600 ">{info.desc}</p>
                        </figcaption>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Managment
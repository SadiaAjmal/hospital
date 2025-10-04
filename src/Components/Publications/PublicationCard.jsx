import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';
import publications from '../../Data/publications';

const PublicationCard = () => {



    return (
        <main>
            {/*     Hero        */}
            <header
                className=" relative text-white h-[60vh] w-full flex items-center justify-center"
                style={{
                    backgroundImage: `url("https://www.shutterstock.com/image-photo/young-scientists-conducting-research-investigations-600nw-2149947783.jpg")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-100/30"></div>
                <h1 className=" z-20 text-2xl md:text-4xl font-bold mb-4 bg-red-500 w-fit px-6 py-3">
                    Aman Researches
                </h1>

            </header>

            {/*         cards       */}

            <section className=' md:px-20 px-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 my-20 gap-10'>

                {publications.map((pub) => (
                    <article className=' bg-gray-100 rounded-xl overflow-hidden'>
                        <figure>
                            <img src={pub.img} alt="" />
                        </figure>
                        <figcaption className=' p-3 space-y-5'>
                            <h2 className=' text-blue-500'>Name: <span className=' font-bold'>{pub.authorName}</span></h2>
                            <h3 className=' text-lg'>{pub.title}</h3>
                            <Link to={`/publication/${pub.id}`} className=' uppercase text-sm text-blue-500 flex items-center gap-2'>Read full article
                                <GoArrowUpRight className=' text-2xl' />
                            </Link>
                        </figcaption>
                    </article>
                ))}



            </section>


        </main>
    )
}

export default PublicationCard

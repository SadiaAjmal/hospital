import React from 'react'
import BreadCrumb from '../BreadCrumb'

const WhoWeAre = () => {
    return (
        <main className="md:px-20 px-3">
            <BreadCrumb
                items={[
                    { label: "Home", link: "/" },
                    { label: "About", link: "/about" },
                    { label: "Who We Are", link: "/whoWeAre" },
                ]}
            />

            {/* Introduction */}
            <section aria-labelledby="who-we-are-heading">
                <h2 id="who-we-are-heading" className="md:text-3xl text-xl my-10">
                    Who We Are
                </h2>

                <p className="py-5 border-t-4 border-blue-600 md:text-lg">
                    Founded in 2003, Islamabad Diagnostic Centre, brain child of Prof. Dr. Rizwan Uppal is the first diagnostic facility providing entire spectrum of imaging & lab services under one roof. Since inception, IDC has built a successful track record and is known for its latest imaging technologies, broad range of laboratory tests and quick turn-around times, with over 3000 staff members, and one of Pakistan’s largest pool of qualified Radiologists and Pathologists on its team.
                </p>

                <p className="text-lg">
                    The imaging modalities are connected with each other through PACS where doctors from abroad are also involved to make tele diagnosis. It is also the only diagnostic centre in the capital that provides lab and imaging services on 24/7 basis, 365 days a year.
                </p>
            </section>

            {/* Message of CEO */}
            <section className="bg-gray-50 my-20 p-10 md:text-lg rounded-sm" aria-labelledby="ceo-message-heading">
                <h2 id="ceo-message-heading" className="w-full md:text-3xl text-xl text-center font-bold pb-5">
                    Message from Founder & CEO
                </h2>

                <article className="flex w-full gap-10">
                    <figure className="w-[40vw]">
                        <img
                            src="https://idc.net.pk/wp-content/uploads/2021/03/WhatsApp-Image-2021-03-19-at-3.59.03-PM.jpeg"
                            alt="Prof. Dr. Rizwan Uppal, Founder & CEO of IDC"
                            className="w-full rounded"
                        />
                    </figure>

                    <div className="w-[60vw] space-y-4">
                        <p>
                            It all started in 2003, with a vision to provide comprehen-sive, all-under-one-roof diagnostic services on a 24/7 basis. I founded Islamabad Diagnostic Centre (IDC) with the invaluable support of my brothers, Dr. Rehan Uppal and Dr. Imran Uppal.
                        </p>

                        <p>
                            IDC’s journey began with its first branch in Wah Cantt, named in memory of our late father, Dr. Aslam Uppal. Shortly after, we expanded to a second branch at F-8 Markaz, Islamabad. Today, Alhamdulillah, IDC has grown into a network of over 150 centers across 50 cities in Pakistan, fulfilling our mission to become the country’s most trusted and reliable healthcare network. IDC’s remarkable growth and reputation stem from our commitment to quality and a dedicated team of doctors, technologists, and specialists. We maintain global standards across our diagnostic services, including ISO 15189-accredited pathology, which is expertly managed by a team of qualified pathologists and technologists overseeing operations across multiple cities. The IDC network is recognized by various provincial and federal bodies like IHRA, PHC, SHC, KHC, etc. Our state-of-the-art total lab automation systems ensure consistent, high-quality testing with fast results. As a leader in diagnostic radiology, IDC is honored to be the only private diagnostic center in Pakistan recognized for FCPS training in radiology. IDC’s radiology is recognized by the Pakistan’s Nuclear Authority (PNRA). It is an academically driven entity and is a collaborating partner with Isra University and Riphah University for healthcare education.
                        </p>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default WhoWeAre

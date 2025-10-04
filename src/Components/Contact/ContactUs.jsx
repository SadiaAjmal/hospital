import React from "react";
import BreadCrumb from "../BreadCrumb";
import { IoCallOutline } from "react-icons/io5";
import { LuHandHelping } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";

const ContactUs = () => {
  return (
    <main className=" md:px-20 px-3 min-h-screen">
      
      <BreadCrumb
        items={[
          { label: "Home", link: "/" },
          { label: "Contact", link: "/contact" },
        ]}
      />
      
      {/* Emergency Banner */}
      <aside className=" w-full  my-10 text-center flex items-center justify-center font-semibold">
        <p className=" bg-red-600 text-white px-10 py-3 rounded-sm flex items-center gap-2 ">
          <IoCallOutline className=" text-xl" />In case of emergency, call 911</p>

      </aside>

      {/* Page Container */}
      <section className="">
        {/* Heading */}
        <header className=" mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-600 mt-2">
            We are here to help. Please feel free to reach out to us with any
            questions or concerns.
          </p>
        </header>

        {/* Contact Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">


          {/* Left Column */}
          <article>


            {/* Get in Touch */}
            <section className=" mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Get In Touch
              </h2>
              <address className="bg-gray-50 p-5 rounded-sm not-italic text-gray-700 space-y-3">
                <p>
                  <strong>Address:</strong> 123 Main Street, Anytown, USA 12345
                </p>
                <p>
                  <strong>Phone:</strong>{" "}
                  <a href="tel:1234567890" className="text-blue-600 hover:underline">
                    (123) 456-7890
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:contact@citygeneralhospital.com"
                    className="text-blue-600 hover:underline"
                  >
                    contact@citygeneralhospital.com
                  </a>
                </p>
              </address>
            </section>

            {/* Send Message Form */}
            <section className=" my-10">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Send Us a Message
              </h2>
              <form className="space-y-5">
                <label className="block">
                  <span className="sr-only">Name</span>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-gray-50 px-3 py-2 rounded-sm focus:outline-none outline-none"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Email</span>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-50 px-3 py-2 rounded-sm focus:outline-none outline-none"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Phone</span>
                  <input
                    type="phone"
                    placeholder="Phone"
                    className="w-full bg-gray-50 px-3 py-2 rounded-sm focus:outline-none outline-none"
                  />
                </label>
                <label className="block">
                  <span className="sr-only">Message</span>
                  <textarea
                    placeholder="Message"
                    className="w-full bg-gray-50 h-40 rounded-sm px-3 py-2 focus:outline-none outline-none"
                  />
                </label>
                <button
                  type="submit"
                  className=" bg-blue-600 text-white cursor-pointer py-2 px-5 rounded-sm hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </form>
            </section>
          </article>

          {/* Right Column */}
          <article>


            {/* Map Section */}
            <section className=" mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Our Location
              </h2>
              <iframe
                title="Google Map"
                className="w-full h-64 rounded-sm"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.916478002079!2d-74.00601508459394!3d40.71277597933027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316c2f6e21%3A0xddd7c95f2f98d10!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1691234567890!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </section>


            {/* More Information */}
            <section className="rounded-sm py-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                More Information
              </h2>

              <article className="prose text-gray-700 space-y-2">
                <p>
                  For an appointment of <strong>General Medical Checkup</strong>:
                </p>
                <p>
                  Please call <strong>Patient Services Department</strong> at
                </p>

                <h3 id="helpline-heading" className="font-bold text-xl w-fit text-gray-800 flex items-center justify-center gap-2">
                  <LuHandHelping className=" text-2xl text-blue-600"/>
                  <p>24/7 Helpline</p>
                </h3>

                <section aria-labelledby="helpline-heading">

                  <ul className="list-none flex gap-3 space-y-1">
                    <strong>UAN# :</strong>{" "}
                    <li className=" flex flex-col">
                      <a href="tel:051111000432" className="text-blue-600 hover:underline">
                        051-111-000-432
                      </a>
                      <a href="tel:03111000432" className="text-blue-600 hover:underline">
                        03-111-000-432
                      </a>
                    </li>
                  </ul>
                </section>

                <address className="not-italic mt-3 w-fit flex items-center gap-2">
                  <HiOutlineMail className=" text-2xl text-blue-600"/>
                  <a
                    href="mailto:info@idc.net.pk"
                    className="font-bold hover:underline"
                  >
                    info@idc.net.pk
                  </a>
                </address>
              </article>
            </section>



          </article>
        </section>
      </section>
    </main>
  );
};

export default ContactUs;

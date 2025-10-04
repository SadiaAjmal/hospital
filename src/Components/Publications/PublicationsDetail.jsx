import React from "react";
import { useParams, Link } from "react-router-dom";
import publications from "../../Data/publications";

const PublicationDetails = () => {
    const { id } = useParams();
    const publication = publications.find((pub) => pub.id === parseInt(id));

    if (!publication) {
        return (
            <p className="text-center text-red-500">Publication not found.</p>
        );
    }

    return (
        <div className=" md:px-20 px-3 py-10">
           

            
               

                {/* Title */}
                {publication.title && (
                    <h1 className="md:text-4xl text-2xl text-center font-semibold mb-5 text-blue-500">{publication.title}</h1>
                )}

              

            
            {/* Author names */}
            {publication.authorName && (
                <p className="text-lg font-semibold mb-2 text-blue-500">
                    Author Names:{" "}
                    <span className="font-semibold text-gray-600">{publication.authorName}</span>
                </p>
            )}
            

            {/* Corresponding Author names */}
            {publication.coresspondingAuthor && (
                <p className="text-lg font-semibold  mb-2 text-blue-500">
                    Corresponding Author & Co-PI:{" "}
                    <span className="font-semibold text-gray-600">{publication.coresspondingAuthor}</span>
                </p>
            )}
              

                {/* Sections */}
                {publication.sections && publication.sections.length > 0 && (
                    <div className="space-y-6 mt-5">
                        {publication.sections.map((section, index) => (
                            <div key={index}>
                                {section.heading && (
                                    <h2 className="text-xl font-bold mb-2 text-blue-500">
                                        {section.heading}
                                    </h2>
                                )}
                                {section.content && (
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        {section.content}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                {/* Authors */}
                {publication.authors && publication.authors.length > 0 && (
                    <div className="mt-10">
                        <h2 className="text-lg font-bold mb-2">Authors</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            {publication.authors.map((author, index) => (
                                <li key={index}>{author}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* References */}
                {publication.references && publication.references.length > 0 && (
                    <div className="mt-10">
                        <h2 className="text-lg font-bold mb-2 text-blue-500">References</h2>
                        <ul className="list-nonr text-gray-700 space-y-1">
                            {publication.references.map((ref, index) => (
                                <li key={index}>{ref}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
    );
};

export default PublicationDetails;

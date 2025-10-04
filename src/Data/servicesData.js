// src/data/servicesData.js
const servicesData = {
    "laboratory-testing": {
        title: "Laboratory Testing",
        desc: "Islamabad Diagnostic Centre (Pvt) Ltd has always been in the forefront in introducing emerging technologies in the field of diagnostics.",
        desc1: "This is the only center in private sector where each segment of diagnostics like Hematology, Cytogenetics, Microbiology, Molecular Biology, Virology, Histopathology, Chemistry, Special Chemistry, Clinical Pathology, Parasitology, Immunology and Serology are available under one roof and being supervised by qualified consultants.",
        desc2: "IDC in collaboration with SynLab Services (Germany) and The Doctor’s Lab (TDL) UK undertakes specialized tests, not available in Pakistan. Additionally IDC takes pride in offering accurate and reliable diagnostics within quickest turn-around times.",
        subcategories: [

            {
                id: 1,
                name: "Molecular Testing",
                image: "https://www.shutterstock.com/image-photo/young-scientists-conducting-research-investigations-600nw-2149947783.jpg",
                intro: "IDC feels privileged to offer one of the best Real Time PCR services for molecular biology diagnosis of infectious diseases and Covid-19. We were the first to establish COVID PCR “Lab” in Private sector and managed to do the most PCRs in support of the Government of Pakistan to meet this challenge. IDCs rapid sharing of COVID data with the concerned authorities helped in implementing smart lock downs limiting the spread of the disease.",


                assurance: "Authenticity of Virological investigations at IDC is ensured by a strict internal quality assurance program which is supplemented by regular participation in the Randox International Quality Assessment Scheme (RIQAS) and College of American Pathologist (CAP) Proficiency Testing.",



                description: "Advanced DNA and RNA analysis for precise results.",
            },
            {
                id: 2,
                name: "Hematology",
                image: "https://www.shutterstock.com/image-photo/young-scientists-conducting-research-investigations-600nw-2149947783.jpg",
                description: "Blood analysis to detect disorders and conditions.",
            },
            {
                id: 3,
                name: "Microbiology",
                image: "https://www.shutterstock.com/image-photo/young-scientists-conducting-research-investigations-600nw-2149947783.jpg",
                description: "Identify bacteria, viruses, and fungi with precision.",
            },
            {
                id: 4,
                name: "Biochemistry",
                image: "https://www.shutterstock.com/image-photo/young-scientists-conducting-research-investigations-600nw-2149947783.jpg",
                description: "Chemical analysis for organ function and health.",
            },
            {
                id: 5,
                name: "Immunology",
                image: "https://www.shutterstock.com/image-photo/young-scientists-conducting-research-investigations-600nw-2149947783.jpg",
                description: "Testing immune responses and related disorders.",
            },
        ],
    },

    "radiology": {
        title: "Radiology",
        description: `Our Radiology department provides advanced imaging 
    techniques for accurate diagnosis. We use state-of-the-art 
    machines to capture detailed internal body structures.`,
        subcategories: [{
                id: 1,
                name: "X-Ray",
                image: "https://www.shutterstock.com/image-photo/chest-xray-600nw-109393142.jpg",
                description: "Standard imaging to detect bone fractures and lung issues.",
            },
            {
                id: 2,
                name: "MRI",
                image: "https://www.shutterstock.com/image-photo/patient-getting-mri-scan-600nw-1212701635.jpg",
                description: "High-resolution imaging of soft tissues and organs.",
            },
            {
                id: 3,
                name: "CT Scan",
                image: "https://www.shutterstock.com/image-photo/ct-scan-machine-600nw-1184951417.jpg",
                description: "Detailed cross-sectional body scans for accurate results.",
            },
            {
                id: 4,
                name: "Ultrasound",
                image: "https://www.shutterstock.com/image-photo/ultrasound-pregnancy-scan-600nw-1449130568.jpg",
                description: "Non-invasive imaging using sound waves.",
            },
        ],
    },

    "pathology": {
        title: "Pathology",
        description: `Our Pathology services provide specialized tests 
    to study tissues, cells, and organs for disease diagnosis.`,
        subcategories: [{
                id: 1,
                name: "Histopathology",
                image: "https://www.shutterstock.com/image-photo/histopathology-slide-600nw-154602057.jpg",
                description: "Examination of tissue samples under a microscope.",
            },
            {
                id: 2,
                name: "Cytopathology",
                image: "https://www.shutterstock.com/image-photo/cytology-smear-600nw-1425858752.jpg",
                description: "Microscopic examination of cell samples.",
            },
            {
                id: 3,
                name: "Forensic Pathology",
                image: "https://www.shutterstock.com/image-photo/forensic-scientist-600nw-1659735849.jpg",
                description: "Investigating causes of death for legal cases.",
            },
        ],
    },
};

export default servicesData;
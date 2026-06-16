export const ResumeData = {
    personalInfo: {
        name: 'MARK WATSON',
        location: 'Sydney, NSW Australia 2000',
        phone: '0448 488 884',
        links: [
            { label: 'mark@watsonised.me', url: 'mailto:mark@watsonised.me' },
            { label: 'Portfolio', url: 'https://get.watsonised.me' },
            { label: 'GitHub', url: 'https://github.com/mark33mark' },
            { label: 'LinkedIn', url: 'https://linkedin.com/in/mark-watsonised' },
        ],
    },
    summary:
        'Results focused full stack web developer with a unique background in commercial property development and capital transactions. Proven ability to bridge the gap between complex business requirements and high-performance technical solutions. Highly capable of collaborating within Agile teams using Git, specializing in modern JavaScript ecosystems to architect scalable, production-ready applications from high level conceptual briefs.',
    technicalSkills: [
        {
            category: 'Languages',
            items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'C', 'PHP', 'Python', 'Rust', 'SQL'],
        },
        {
            category: 'Frameworks & Libraries',
            items: ['React', 'Redux', 'SolidJS', 'Node.js', 'Express', 'TanStack Query', 'Mongoose'],
        },
        {
            category: 'Cloud & Databases',
            items: ['AWS (S3, DynamoDB, EC2)', 'MongoDB', 'MySQL', 'Netlify', 'Git', 'AI', 'APIs'],
        },
    ],
    professionalExperience: [
        {
            role: 'Software Engineer & Analyst',
            company: 'Prospero Commerce Limited',
            location: 'London, UK',
            dateRange: 'Aug 2025 – Present',
            summary:
                'Driving the development of custom CRM and data analytics tools for a market-leading retail advisory firm, directly enhancing client service delivery and operational efficiency.',
            highlights: [
                {
                    text: 'Architected core system concepts, collaborating directly with key stakeholders to map and execute optimal implementation pathways.',
                },
                {
                    text: "Engineered a secure, highly scalable CRM application using React, seamlessly integrating with the client's proprietary server infrastructure.",
                },
            ],
        },
        {
            role: 'Property & Development Manager / Dev',
            company: 'CSR Limited',
            location: 'Sydney, NSW',
            dateRange: 'Nov 2023 – Aug 2025',
            summary:
                'Managed a commercial portfolio of 120 leases and 50 freehold properties while simultaneously spearheading the development of internal corporate software assets.',
            highlights: [
                {
                    text: 'Designed and deployed a custom full-stack property management application to track portfolio metrics and automate reporting: ',
                    link: { label: 'watson-property.netlify.app', url: 'https://watson-property.netlify.app' },
                },
                {
                    text: 'Implemented secure user authentication workflows utilizing JWT and robust server-client handshakes.',
                },
                {
                    text: 'Integrated complex maps API layers featuring dynamic data-point visualization for physical assets utilizing React, TanStack Query, and MongoDB.',
                },
            ],
        },
        {
            role: 'Software Engineer',
            company: 'Learnosity Pty Ltd',
            location: 'Sydney, NSW',
            dateRange: 'Feb 2022 – Nov 2023',
            summary:
                'Developed scalable features and resolved complex bugs within a fast-paced Agile environment for an enterprise EdTech API processing over 3 million daily requests.',
            highlights: [
                {
                    text: 'Engineered a zero-dependency, native HTML5 drag-and-drop feature, significantly reducing bundle size and improving client-side performance.',
                },
                {
                    text: 'Authored performant algorithms for dynamic on-screen image handling, scaling, and browser layout optimization.',
                },
            ],
        },
        {
            role: 'Developer & Consultant',
            company: 'Watsonised Pty Ltd',
            location: 'Sydney, NSW',
            dateRange: 'July 2019 – Feb 2022',
            summary:
                'Founded an independent development consultancy providing end-to-end software engineering, UI/UX design, and web administration services.',
            highlights: [
                {
                    text: 'Delivered robust corporate platform architectures and technical solutions for clients including: ',
                    link: { label: 'prosperocommerce.com', url: 'https://prosperocommerce.com' },
                },
            ],
        },
        {
            role: 'Regional Development Manager',
            company: 'Woolworths Group',
            location: 'Sydney, NSW',
            dateRange: 'Jan 2012 – June 2019',
            summary:
                'Directed capital investment deployment and expansion strategies for corporate commercial real estate assets across the NSW region.',
            highlights: [
                {
                    text: 'Secured executive board approvals and successfully transacted 130 portfolio properties valued at over $200M, generating $20M in profit within a 2-year window.',
                },
            ],
        },
    ],
    technicalProjects: [
        {
            title: 'Quot3d',
            description:
                'A full-stack web application leveraging a Node.js/Express backend and MySQL database to dynamically query and serve curated content via a RESTful API.',
            links: [
                { label: 'Live App', url: 'https://quot3d.netlify.app' },
                { label: 'GitHub', url: 'https://github.com/Mark33Mark/quoted' },
            ],
        },
        {
            title: 'Flickering',
            description:
                'An installable Progressive Web Application (PWA) engineered using the MERN stack. Implements complex state management for real-time mood and emotional metric logging.',
            links: [{ label: 'GitHub', url: 'https://github.com/Mark33Mark/flickering' }],
        },
        {
            title: 'Property Management',
            description:
                'A full stack application utilising JWT authentication with refresh tokens and an administration console. Engineered using react, redux and google maps data clustering.',
            links: [
                { label: 'Live App', url: 'https://watson-property.netlify.app' },
                { label: 'GitHub', url: 'https://github.com/Mark33Mark/c1r-property-schedule' },
            ],
        },
        {
            title: 'Dog Wiki',
            description:
                'A simple app to investigate dog breeds and their suitability for you.',
            links: [
                { label: 'Live App', url: 'https://dog-wiki.netlify.app' },
                { label: 'GitHub', url: 'https://github.com/Mark33Mark/dogwiki_serverless' },
            ],
        },
    ],
    education: [
        {
            degree: 'Coding Bootcamp Certificate – Full Stack Developer',
            institution: 'University of Sydney',
            dateRange: 'Aug 2021 – Feb 2022',
            details: 'Comprehensive training in HTML5, CSS3, JavaScript ES6+, Node.js, Databases, Express, and React.',
        },
        {
            degree: 'Bachelor of Building Construction Management (1st Class Honours)',
            institution: 'University of NSW',
            dateRange: '5-Year Degree',
            details:
                'Appointed by the Computer Science faculty to tutor the computing track. Awarded the Multiplex Prize for highest overall course marks.',
        },
    ],
};
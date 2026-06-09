import '../styling/resume_document.css';

export const ResumeDoc = () => {
    return (
        <div className='ResumeDoc'>
            {/* Header */}
            <header className='ResumeDoc-Header'>
                <h1 className='ResumeDoc-Title'>MARK WATSON</h1>
                <p className='ResumeDoc-Subtitle'>Sydney, NSW Australia 2000</p>
                <p className='ResumeDoc-Subtitle'>| 0448 488 884 |</p>
                <div className='ResumeDoc-Links'>
                    <a href='mailto:mark@watsonised.me'>mark@watsonised.me</a>
                    <span>•</span>
                    <a href='https://get.watsonised.me' target='_blank' rel='noopener noreferrer'>
                        Portfolio
                    </a>
                    <span>•</span>
                    <a href='https://github.com/Mark33Mark' target='_blank' rel='noopener noreferrer'>
                        GitHub
                    </a>
                    <span>•</span>
                    <a href='https://linkedin.com/in/mark-watsonised' target='_blank' rel='noopener noreferrer'>
                        LinkedIn
                    </a>
                </div>
            </header>

            {/* Summary */}
            <section className='ResumeDoc-Section'>
                <h2 className='ResumeDoc-SectionTitle'>Summary</h2>
                <p className='ResumeDoc-Text'>
                    Full stack web developer with a commercial background in property development and capital
                    transactions. Draws on a deep understanding of hardware electronics and programming across diverse
                    environments to deliver high-performance user experiences. Highly capable of developing in agile
                    teams using Git, effectively delivering from well articulated briefs or high-level conceptual
                    requests.
                </p>
            </section>

            {/* Technical Skills */}
            <section className='ResumeDoc-Section'>
                <h2 className='ResumeDoc-SectionTitle'>Technical Skills</h2>
                <div className='ResumeDoc-SkillsGrid'>
                    <div className='ResumeDoc-SkillsColumn'>
                        <h3>Languages</h3>
                        <p>JavaScript, TypeScript, HTML, CSS, C, PHP, Python, Rust, SQL</p>
                    </div>
                    <div className='ResumeDoc-SkillsColumn'>
                        <h3>Frameworks & Libraries</h3>
                        <p>React, Redux, SolidJS, Node.js, Express, TanStack Query, Mongoose</p>
                    </div>
                    <div className='ResumeDoc-SkillsColumn'>
                        <h3>Cloud & Databases</h3>
                        <p>AWS (S3, DynamoDB, EC2), MongoDB, MySQL, Netlify, Git, AI, APIs</p>
                    </div>
                </div>
            </section>

            {/* Professional Experience */}
            <section className='ResumeDoc-Section'>
                <h2 className='ResumeDoc-SectionTitle'>Professional Experience</h2>

                {/* Prospero */}
                <div className='ResumeDoc-ExperienceItem'>
                    <div className='ResumeDoc-ExperienceHeaderRow'>
                        <h3 className='ResumeDoc-ExperienceRole'>
                            Software Engineer & Analyst <span>| Prospero Commerce Limited (London, UK)</span>
                        </h3>
                        <span className='ResumeDoc-ExperienceDate'>Aug 2025 – Present</span>
                    </div>
                    <p className='ResumeDoc-ExperienceSummary'>
                        Develop custom CRM and data analytics tools for a market-leading retail advisory company to
                        improve client service delivery.
                    </p>
                    <ul className='ResumeDoc-ExperienceList'>
                        <li>
                            Designed core architecture concepts and collaborated with stakeholders to map out optimal
                            implementation pathways.
                        </li>
                        <li>
                            Engineered a bespoke, production-ready CRM software system using React linked directly to
                            the client's proprietary server infrastructure.
                        </li>
                    </ul>
                </div>

                {/* CSR */}
                <div className='ResumeDoc-ExperienceItem'>
                    <div className='ResumeDoc-ExperienceHeaderRow'>
                        <h3 className='ResumeDoc-ExperienceRole'>
                            Property & Development Manager / Dev <span>| CSR Limited (Sydney, NSW)</span>
                        </h3>
                        <span className='ResumeDoc-ExperienceDate'>Nov 2023 – Aug 2025</span>
                    </div>
                    <p className='ResumeDoc-ExperienceSummary'>
                        Managed a commercial portfolio of 120 leases and 50 freehold properties, leading a team of two
                        while building corporate software assets.
                    </p>
                    <ul className='ResumeDoc-ExperienceList'>
                        <li>
                            Architected and deployed a custom full-stack property management application from the ground
                            up to track portfolio metrics (
                            <a href='https://watson-property.netlify.app' target='_blank' rel='noopener noreferrer'>
                                Live Link
                            </a>
                            ).
                        </li>
                        <li>
                            Implemented secure user authentication workflows via JWT tokens and robust server-client
                            handshakes.
                        </li>
                        <li>
                            Integrated complex maps API layers featuring dynamic data-point visualization for physical
                            assets using React, TanStack Query, and MongoDB.
                        </li>
                    </ul>
                </div>

                {/* Learnosity */}
                <div className='ResumeDoc-ExperienceItem'>
                    <div className='ResumeDoc-ExperienceHeaderRow'>
                        <h3 className='ResumeDoc-ExperienceRole'>
                            Software Engineer <span>| Learnosity Pty Ltd (Sydney, NSW)</span>
                        </h3>
                        <span className='ResumeDoc-ExperienceDate'>Feb 2022 – Nov 2023</span>
                    </div>
                    <p className='ResumeDoc-ExperienceSummary'>
                        Worked within a fast-paced Agile sprint structure to develop features and resolve complex bugs
                        for an enterprise EdTech API scaling to 3 million daily requests.
                    </p>
                    <ul className='ResumeDoc-ExperienceList'>
                        <li>
                            Engineered a custom native HTML5 drag-and-drop feature entirely from scratch without using
                            heavy third-party packages.
                        </li>
                        <li>
                            Wrote performant algorithms for dynamic on-screen image handling, scaling, and optimized
                            browser layout display.
                        </li>
                    </ul>
                </div>

                {/* Watsonised */}
                <div className='ResumeDoc-ExperienceItem'>
                    <div className='ResumeDoc-ExperienceHeaderRow'>
                        <h3 className='ResumeDoc-ExperienceRole'>
                            Developer & Consultant <span>| Watsonised Pty Ltd (Sydney, NSW)</span>
                        </h3>
                        <span className='ResumeDoc-ExperienceDate'>July 2019 – Feb 2022</span>
                    </div>
                    <p className='ResumeDoc-ExperienceSummary'>
                        Founded a development consultancy supplying software engineering, UI design, and web
                        administration services (
                        <a href='https://prosperocommerce.com' target='_blank' rel='noopener noreferrer'>
                            prosperocommerce.com
                        </a>
                        ).
                    </p>
                </div>

                {/* Woolworths */}
                <div className='ResumeDoc-ExperienceItem'>
                    <div className='ResumeDoc-ExperienceHeaderRow'>
                        <h3 className='ResumeDoc-ExperienceRole'>
                            Regional Development Manager <span>| Woolworths Group (Sydney, NSW)</span>
                        </h3>
                        <span className='ResumeDoc-ExperienceDate'>Jan 2012 – June 2019</span>
                    </div>
                    <p className='ResumeDoc-ExperienceSummary'>
                        Directed capital investment deployment and expansion strategies for corporate commercial real
                        estate assets across NSW.
                    </p>
                    <ul className='ResumeDoc-ExperienceList'>
                        <li>
                            Secured executive board approvals and successfully transacted 130 portfolio properties
                            valued over $200M, generating $20M profit within a 2-year window.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Technical Projects */}
            <section className='ResumeDoc-Section'>
                <h2 className='ResumeDoc-SectionTitle'>Technical Projects</h2>
                <div className='ResumeDoc-ProjectsGrid'>
                    <div className='ResumeDoc-ProjectCard'>
                        <h3>Quot3d</h3>
                        <p>
                            A data-driven web app backed by a MySQL database that dynamically selects and delivers
                            random quotes via an Express and Node.js backend architecture.
                        </p>
                        <div className='ResumeDoc-ProjectLinks'>
                            <a href='https://quot3d.netlify.app' target='_blank' rel='noopener noreferrer'>
                                Live App
                            </a>
                            <a href='https://github.com/quoted' target='_blank' rel='noopener noreferrer'>
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className='ResumeDoc-ProjectCard'>
                        <h3>Flickering</h3>
                        <p>
                            An installable Progressive Web Application (PWA) engineered using the MERN stack (MongoDB,
                            Express, React, Node) built specifically for mood and emotional logging metrics.
                        </p>
                        <div className='ResumeDoc-ProjectLinks'>
                            <a href='https://github.com/flickering' target='_blank' rel='noopener noreferrer'>
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className='ResumeDoc-ProjectCard'>
                        <h3>Weather Dashboard</h3>
                        <p>
                            An asynchronous front-end application executing targeted API REST calls to the OpenWeather
                            system. Features a 7-day forecast array with clean visual data mappings.
                        </p>
                        <div className='ResumeDoc-ProjectLinks'>
                            <a href='#' target='_blank' rel='noopener noreferrer'>
                                Live App
                            </a>
                            <a href='https://github.com/weather-dashboard' target='_blank' rel='noopener noreferrer'>
                                GitHub
                            </a>
                        </div>
                    </div>

                    <div className='ResumeDoc-ProjectCard'>
                        <h3>Lettuce Eat</h3>
                        <p>
                            A recipe search platform using the Spoonacular API engine. Parses user-defined food
                            ingredients to render interactive recipes featuring extensive UI configuration options.
                        </p>
                        <div className='ResumeDoc-ProjectLinks'>
                            <a href='#' target='_blank' rel='noopener noreferrer'>
                                Live App
                            </a>
                            <a href='https://github.com/recipe-generator' target='_blank' rel='noopener noreferrer'>
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className='ResumeDoc-Section'>
                <h2 className='ResumeDoc-SectionTitle'>Education</h2>

                <div className='ResumeDoc-EducationItem'>
                    <div className='ResumeDoc-EducationHeaderRow'>
                        <h3>Coding Bootcamp Certificate – Full Stack Developer</h3>
                        <span className='ResumeDoc-EducationDate'>Aug 2021 – Feb 2022</span>
                    </div>
                    <p className='ResumeDoc-EducationDetails'>
                        University of Sydney — Focused on HTML5, CSS3, JavaScript ES6+, Node.js, Databases, Express, and
                        React.
                    </p>
                </div>

                <div className='ResumeDoc-EducationItem'>
                    <div className='ResumeDoc-EducationHeaderRow'>
                        <h3>Bachelor of Building Construction Management (1st Class Honours)</h3>
                        <span className='ResumeDoc-EducationDate'>5-Year Degree</span>
                    </div>
                    <p className='ResumeDoc-EducationDetails'>
                        University of NSW — appointed by Computer Science faculty to tutor the computing track. Awarded
                        Multiplex Prize for highest course marks.
                    </p>
                </div>
            </section>
        </div>
    );
};

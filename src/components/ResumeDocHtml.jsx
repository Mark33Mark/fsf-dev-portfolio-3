import { ResumeData } from '../utilities';
import '../styling/resume_document.css';

export const ResumeDocHtml = () => {
    const {
        personalInfo: { name, location, phone, links },
        summary,
        technicalSkills,
        professionalExperience,
        technicalProjects,
        education,
    } = ResumeData;

    return (
        <div className="ResumeDoc">
            <header className="ResumeDoc-Header">
                <h1 className="ResumeDoc-Title">{name}</h1>
                <p className="ResumeDoc-Subtitle">{location}</p>
                <p className="ResumeDoc-Subtitle">{`| ${phone} |`}</p>
                <div className="ResumeDoc-Links">
                    {links.map((link, index) => (
                        <div key={index}>
                            <span>•</span>
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                {link.label}
                            </a>
                        </div>
                    ))}
                    <span>•</span>
                </div>
            </header>

            <section className="ResumeDoc-Section">
                <h2 className="ResumeDoc-SectionTitle">Summary</h2>
                <p className="ResumeDoc-Text">{summary}</p>
            </section>

            <section className="ResumeDoc-Section">
                <h2 className="ResumeDoc-SectionTitle">Technical Skills</h2>
                <div className="ResumeDoc-SkillsGrid">
                    {technicalSkills.map((skill, index) => {
                        return (
                            <div className="ResumeDoc-SkillsColumn" key={index}>
                                <h3>{skill.category}</h3>
                                <span key={index}>{skill.items.join(', ')} </span>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="ResumeDoc-Section">
                <h2 className="ResumeDoc-SectionTitle">Professional Experience</h2>

                {professionalExperience.map((experience, index) => {
                    const { role, company, location, dateRange, summary, highlights } = experience;
                    return (
                        <div className="ResumeDoc-ExperienceItem" key={index}>
                            <div className="ResumeDoc-ExperienceHeaderRow">
                                <h3 className="ResumeDoc-ExperienceRole">
                                    {experience.role} <span>{`| ${company} ${location}`}</span>
                                </h3>
                                <span className="ResumeDoc-ExperienceDate">{dateRange}</span>
                            </div>
                            <p className="ResumeDoc-ExperienceSummary">{summary}</p>
                            <ul className="ResumeDoc-ExperienceList">
                                {highlights.map((highlight, index) => {
                                    return (
                                        <li key={index}>
                                            {highlight.text}
                                            {highlight.link ? (
                                                <a href={highlight.link.url} target="_blank" rel="noopener noreferrer">
                                                    {' '}
                                                    {highlight.link.label}
                                                </a>
                                            ) : null}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </section>

            <section className="ResumeDoc-Section">
                <h2 className="ResumeDoc-SectionTitle">Technical Projects</h2>
                <div className="ResumeDoc-ProjectsGrid">
                    {technicalProjects.map((project, index) => {
                        const { title, description, links } = project;
                        return (
                            <div className="ResumeDoc-ProjectCard" key={index}>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <div className="ResumeDoc-ProjectLinks">
                                    {links.map((link, index) => (
                                        <a href={link.url} target="_blank" rel="noopener noreferrer" key={index}>
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="ResumeDoc-Section">
                <h2 className="ResumeDoc-SectionTitle">Education</h2>

                {education.map((qualification, index) => {
                    const { degree, institution, dateRange, details } = qualification;
                    return (
                        <div className="ResumeDoc-EducationItem" key={index}>
                            <div className="ResumeDoc-EducationHeaderRow">
                                <h3>{degree}</h3>
                                <span className="ResumeDoc-EducationDate">{dateRange}</span>
                            </div>
                            <p className="ResumeDoc-EducationDetails">{details}</p>
                        </div>
                    );
                })}
            </section>
        </div>
    );
};

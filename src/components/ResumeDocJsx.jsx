import { Document, Page, Text, View, Link } from '@react-pdf/renderer';
import { ResumeData } from '../utilities';
import { pdfStyles } from '../styling/pdf-renderer';

export const ResumeDocJsx = () => {
    const {
        personalInfo: { name, location, phone, links },
        summary,
        technicalSkills,
        professionalExperience,
        technicalProjects,
        education,
    } = ResumeData;

    return (
        <View>
            <View style={pdfStyles.header}>
                <Text style={pdfStyles.title}>{name}</Text>
                <Text style={pdfStyles.subtitle}>{location}</Text>
                <Text style={pdfStyles.subtitle}>{`| ${phone} |`}</Text>

                <View style={pdfStyles.linksRow}>
                    {links.map((link, index) => {
                        return (
                            <View key={index} style={pdfStyles.linksRow}>
                                <Text style={pdfStyles.linkBullet}>•</Text>
                                {
                                    <Link src={link.url} style={pdfStyles.pdfLink}>
                                        {link.label}
                                    </Link>
                                }
                                {links.length === index + 1 ?
                                    <Text style={pdfStyles.linkBullet}>•</Text>
                                :   null}
                            </View>
                        );
                    })}
                </View>
            </View>

            <View style={pdfStyles.section}>
                <Text style={pdfStyles.sectionTitle}>Summary</Text>
                <Text style={pdfStyles.text}>{summary}</Text>
            </View>

            <View style={pdfStyles.section}>
                <Text style={pdfStyles.sectionTitle}>Technical Skills</Text>

                <View style={pdfStyles.skillsFlexRow}>
                    {technicalSkills.map((skill, index) => {
                        return (
                            <View style={pdfStyles.skillsColumn} key={index}>
                                <Text style={pdfStyles.columnHeading}>{skill.category}</Text>
                                <Text style={pdfStyles.skillsRow}>{skill.items.join(', ')}</Text>
                            </View>
                        );
                    })}
                </View>
            </View>

            <View style={pdfStyles.section}>
                <Text style={pdfStyles.sectionTitle}>Professional Experience</Text>

                {professionalExperience.map((experience, index) => {
                    const { role, company, location, dateRange, summary, highlights } = experience;
                    return (
                        <View style={pdfStyles.experienceItem} key={index}>
                            <View style={pdfStyles.experienceHeaderRow}>
                                <Text style={pdfStyles.roleTitle}>
                                    {experience.role}{' '}
                                    <Text style={pdfStyles.companySpan}>{`| ${company} ${location}`}</Text>
                                </Text>
                                <Text style={pdfStyles.dateSpan}>{dateRange}</Text>
                            </View>
                            <Text style={pdfStyles.experienceSummary}>{summary}</Text>

                            {highlights.map((highlight, hIndex) => {
                                return (
                                    <View style={pdfStyles.listItemRow} key={hIndex}>
                                        <Text style={pdfStyles.bulletPoint}>•</Text>
                                        <Text style={pdfStyles.listItemText}>
                                            {highlight.text}
                                            {highlight.link && (
                                                <Link src={highlight.link.url} style={pdfStyles.pdfLink}>
                                                    {highlight.link.label}
                                                </Link>
                                            )}
                                        </Text>
                                    </View>
                                );
                            })}
                        </View>
                    );
                })}
            </View>

            <View style={pdfStyles.section} break>
                <Text style={pdfStyles.sectionTitle}>Technical Projects</Text>

                <View style={pdfStyles.projectsFlexContainer}>
                    {technicalProjects.map((project, index) => {
                        const { title, description, links } = project;
                        return (
                            <View style={pdfStyles.projectCard} key={index}>
                                <Text style={pdfStyles.cardHeading}>{title}</Text>

                                <Text style={pdfStyles.cardContent}>{description}</Text>
                                <View style={pdfStyles.projectLinksRow}>
                                    {links.map((link, hIndex) => (
                                        <Link src={link.url} style={pdfStyles.pdfLink} key={hIndex}>
                                            {link.label}
                                        </Link>
                                    ))}
                                </View>
                            </View>
                        );
                    })}
                </View>
            </View>

            <View style={pdfStyles.section}>
                <Text style={pdfStyles.sectionTitle}>Education</Text>

                {education.map((qualification, index) => {
                    const { degree, institution, dateRange, details } = qualification;
                    return (
                        <View style={pdfStyles.experienceItem} key={index}>
                            <View style={pdfStyles.experienceHeaderRow}>
                                <Text style={pdfStyles.educationHeading}>{degree}</Text>
                                <Text style={pdfStyles.dateSpan}>{dateRange}</Text>
                            </View>
                            <Text style={pdfStyles.text}>{details}</Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
};

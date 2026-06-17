import { PrivacyAndCookiePolicy } from '../../utilities';

export const Information = () => {
    const { title, effectiveDate, introduction, sections } = PrivacyAndCookiePolicy.policyDocument;

    return (
        <div className='Information-Container'>
            <h1 className='Information-PageHeading'>{title}</h1>

            <p className='Information-Introduction'>{introduction}</p>

            {sections.map(section => (
                <div className='Information-Section' key={section.id}>
                    <h3 className='Information-SectionTitle'>{section.title}</h3>
                    <p className='Information-SectionItem'>{section.body}</p>
                </div>
            ))}
            <p className='Information-SectionItem_effectiveDate'>last updated: {effectiveDate}</p>
        </div>
    );
};

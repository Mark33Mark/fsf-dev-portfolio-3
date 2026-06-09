import { Skills } from '../../utilities';

export const About = () => {
    return (
        <>
            <h1 className='About-PageHeading'>Welcome...</h1>

            <div className='About-ProfileContainer'>
                <p>
                    I'm <span className="About-MyName">Mark Watson</span>, a skilled full stack web developer with a property development and capital
                    transactions background, who has worked for some of Australia's largest corporations.
                </p>
                <p> Based in Sydney, Australia.</p>
                <p>
                    With a foundation of creativity and technical expertise, I can develop intuitive user experiences
                    for the web.
                </p>
                <p>Skilled in developing responsive and accessible web designs using: </p>

                <ul className='About-TagsList'>
                    {Skills.map((skill, index) => (
                        <li key={index} className='About-TagsList_tag'>
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

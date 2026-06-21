import { AppsData } from '../../utilities/ProjectData';
import { CodeIcon, TerminalIcon, GitHubLogoIcon, WebpageIcon } from '../Icons';

export const Portfolio = () => {
    return (
        <>
            <div className='Portfolio-HeadingBlock'>
                <TerminalIcon />
                <h1 className='Portfolio-PageHeading'>Portfolio</h1>
                <CodeIcon />
            </div>
            <div className='Portfolio-TextDescription'>
                Please visit{' '}
                <a href='https://github.com/Mark33Mark' target='_blank' rel='noreferrer'>
                    my Github
                </a>
                , selected sample:
            </div>

            <div className='Portfolio-GalleryDisplay'>
                {AppsData.map((project, index) => (
                    <div key={index} className='Portfolio-ProjectContainer'>
                        <img
                            alt={`screengrab of portfolio project with title ${project.title}`}
                            className='Portfolio-ProjectScreengrab'
                            src={project.image}
                        />

                        <div className='Portfolio-ProjectDescriptionContainer'>
                            <h2 className='Portfolio-ProjectDescriptionTitle'>{project.title}</h2>

                            <h2 className='Portfolio-ProjectDescriptionSubtitle'>{project.subtitle}</h2>

                            <p className='Portfolio-ProjectDescription'>{project.description}</p>
                            <div className='Portfolio-ProjectLinksContainer'>
                                <a href={project.github} className='Portfolio-Link' target='_blank' rel='noreferrer'>
                                    <GitHubLogoIcon />
                                    <span className='Portfolio-GithubLink'>repo</span>
                                </a>
                                <a href={project.link} className='Portfolio-Link' target='_blank' rel='noreferrer'>
                                    <WebpageIcon />
                                    <span className='Portfolio-WebsiteLink'> website</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

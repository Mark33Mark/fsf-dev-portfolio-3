import { useState } from 'react';
import { DocDownloadIcon } from '../Icons';
import { ResumeDoc } from '../ResumeDoc';

export const Resume = () => {
    const [active, setActive] = useState(true);

    const handleChangeActive = () => {
        setActive(previousPage => {
            return !previousPage;
        });
    };

    return (
        <>
            <div className='Resume-Container'>
                <h1 className='Resume-PageHeading'>Resumé</h1>
                <p className='Resume-Description'>
                    Click the download icon to get a copy on your device:
                    <a
                        href='../assets/resume_MarkWatson.pdf'
                        target='_blank'
                        className='Resume-DownloadLink'
                        aria-label='download a copy of the resumé for Mark Watson'
                        alt='download a copy of the resumé for Mark Watson'
                    >
                        <DocDownloadIcon />
                    </a>
                </p>
            </div>

            <ResumeDoc />
        </>
    );
};

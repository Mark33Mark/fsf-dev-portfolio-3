import { PDFDownloadLink } from '@react-pdf/renderer';
import { DocDownloadIcon } from '../Icons';
import { ResumeDocHtml, ResumePdfRenderer } from '../../components';
import { getLocalFileName } from '../../utilities';

export const Resume = () => {
    return (
        <>
            <div className='Resume-Container'>
                <h1 className='Resume-PageHeading'>Resumé</h1>
                <p className='Resume-Description'>
                    Click to get a copy of my resume on your device:

                    <PDFDownloadLink
                        document={<ResumePdfRenderer />}
                        fileName={getLocalFileName('resume_MarkWatson', 'pdf')}
                        className='Resume-DownloadLink'
                        aria-label='download a copy of the resumé for Mark Watson'
                        alt='download a copy of the resumé for Mark Watson'
                    >
                        {({ loading }) => (loading ? 'Compiling PDF Vector Asset...' : <DocDownloadIcon />)}
                    </PDFDownloadLink>
                </p>
            </div>

            <ResumeDocHtml />
        </>
    );
};

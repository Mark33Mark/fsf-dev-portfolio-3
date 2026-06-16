import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { ResumeDocJsx } from './ResumeDocJsx';
import { getLocalFileName } from '../utilities';
import { pdfStyles } from '../styling/pdf-renderer';

export const ResumePdfRenderer = () => (
    <Document>
        <Page size="A4" style={pdfStyles.page} wrap>
            <ResumeDocJsx />

            <View style={pdfStyles.pageNumberContainer} fixed>
                <Text
                    style={pdfStyles.pageNumberText}
                    render={({ pageNumber, totalPages }) =>
                        `page ${pageNumber} of ${totalPages}
                        ${getLocalFileName('resume_MarkWatson', 'pdf')}`
                    }
                />
            </View>

        </Page>
    </Document>
);

import { StyleSheet } from '@react-pdf/renderer';
import { tokens } from './pdf-renderer-tokens';

// PDF-Specific Layout Styles (Translating Grid/Rem to Flex/Points)
// Note: React-PDF does not support CSS Grid or 'rem' units.
export const pdfStyles = StyleSheet.create({
    page: {
        padding: 30,
        paddingBottom: 60,
        fontSize: tokens.fontSizes.md,
        color: tokens.colors.primary,
        fontFamily: tokens.fonts.body,
    },
    // Handles the absolute coordinates and your green border
    pageNumberContainer: {
        position: 'absolute',
        bottom: 10,
        left: 40,
        right: 40,
        height: 30,
        borderTopWidth: 1,
        borderTopColor: tokens.colors.primary,
        paddingTop: 5,
    },
    pageNumberText: {
        textAlign: 'right',
        color: '#4b5563',
        fontSize: tokens.fontSizes.xs,
        fontFamily: tokens.fonts.body,
    },
    header: {
        borderBottomWidth: 2,
        borderBottomColor: tokens.colors.primary,
        paddingBottom: 8,
        marginBottom: 12,
        alignItems: 'center',
    },
    title: {
        fontSize: tokens.fontSizes.xl,
        fontFamily: tokens.fonts.bold,
        color: tokens.colors.primary,
        letterSpacing: -0.5,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: tokens.fontSizes.md,
        color: '#4b5563',
    },
    linksRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
        marginTop: 6,
    },
    linkBullet: {
        color: '#2563eb',
        textDecoration: 'none',
        fontFamily: tokens.fonts.bold,
        fontSize: tokens.fontSizes.sm,
    },
    pdfLink: {
        color: '#2563eb',
        textDecoration: 'underline',
        fontFamily: tokens.fonts.bold,
        fontSize: tokens.fontSizes.sm,
    },
    section: {
        marginBottom: 14,
    },
    sectionTitle: {
        fontSize: tokens.fontSizes.lg,
        fontFamily: tokens.fonts.bold,
        textTransform: 'uppercase',
        color: tokens.colors.primary,
        borderBottomWidth: 1,
        borderBottomColor: '#d1d5db',
        paddingBottom: 2,
        marginBottom: 6,
    },
    text: {
        color: '#374151',
        textAlign: 'justify',
        fontSize: tokens.fontSizes.md,
    },
    // Simulate grid columns via flexbox for the PDF layout
    skillsFlexRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    skillsColumn: {
        width: '31%',
    },
    columnHeading: {
        fontFamily: tokens.fonts.bold,
        color: tokens.colors.primary,
        marginBottom: 2,
        fontSize: tokens.fontSizes.md,
    },
    skillsRow: {
        color: '#374151',
        textAlign: 'justify',
        fontSize: tokens.fontSizes.md,
    },
    experienceItem: {
        marginBottom: 10,
    },
    experienceHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: tokens.fonts.bold,
        color: tokens.colors.primary,
        marginBottom: 2,
    },
    roleTitle: {
        fontFamily: tokens.fonts.bold,
        width: '75%',
        fontSize: tokens.fontSizes.md,
    },
    companySpan: {
        fontWeight: 'normal',
        color: '#4b5563',
    },
    dateSpan: {
        color: '#4b5563',
        fontSize: tokens.fontSizes.sm,
    },
    experienceSummary: {
        color: '#374151',
        marginBottom: 3,
        fontSize: tokens.fontSizes.md,
    },
    listItemRow: {
        flexDirection: 'row',
        marginBottom: 2,
        paddingLeft: 4,
    },
    bulletPoint: {
        marginRight: 4,
        color: '#374151',
    },
    listItemText: {
        flex: 1,
        color: '#374151',
        fontSize: tokens.fontSizes.md,
    },
    projectsFlexContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 8,
    },
    projectCard: {
        width: '48%',
        borderWidth: 1,
        borderColor: '#e5e7eb',
        padding: 8,
        borderRadius: 4,
    },
    cardHeading: {
        fontSize: tokens.fontSizes.md,
        fontFamily: tokens.fonts.bold,
    },
    cardContent: {
        fontSize: tokens.fontSizes.sm,
        marginTop: 2,
        color: '#374151',
    },
    projectLinksRow: {
        flexDirection: 'row',
        gap: 8,
        marginTop: 4,
        fontSize: tokens.fontSizes.sm,
    },
    educationHeading: {
        fontSize: tokens.fontSizes.md,
        fontFamily: tokens.fonts.bold,
    },
});

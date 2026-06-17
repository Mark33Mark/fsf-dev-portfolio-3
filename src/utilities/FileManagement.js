export const getLocalFileName = (baseName, extension) => {
    const localDate = new Intl.DateTimeFormat('en-AU', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }).format(new Date());

    // Replace file system unsafe characters (like '/' and ':') and spaces with hyphens
    const safeDate = localDate.replace(/[/:,]/g, '').replace(/\s/g, '-');

        console.log('localDate = ', safeDate)

    return `${safeDate}_${baseName}.${extension}`;
};

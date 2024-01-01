// dateUtils.js

export const formatDate = ( timestamp ) => {
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    }
    const formattedDate = new Date(timestamp).toLocaleDateString( 'en-US', options );
    return formattedDate;
}
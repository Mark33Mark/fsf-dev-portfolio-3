import { encodedData, decodeData } from '../utilities';

// added to test and style the loading screen, set the delay to 600000 for 10-minutes
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const FORCED_DELAY = 0; //set to 600000 to give yourself 10-minutes working time.

const getRandomQuote = quotes => {
    if (!quotes || quotes.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
};

export const fetchQuote = async (url, setDelay=FORCED_DELAY) => {
    try {
        await delay(setDelay);
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        return await res.json();
    } catch (error) {
        // console.warn(`Fetch failed. Switching to local backup.`, error);

        const backupQuotes = await decodeData(encodedData);
        const selectedQuote = getRandomQuote(backupQuotes.cachedQuotes);

        return selectedQuote || { quote: 'No quotes available', credited: '-' };
    }
};

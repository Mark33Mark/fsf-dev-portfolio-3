import * as jose from 'jose';
import { dbCouchClient } from './db/dbCouch';

let cachedQuotes = null;

export default async (req, context) => {
    const db = await dbCouchClient();

    /**
     *  Fetch the entire quotes database and cache it into the cacheQuotes variable.
     */

    if (!cachedQuotes) {
        // the startkey option 0 sorts lexicographically after the _ symbol, 
        // skipping everything starting with an underscore, like the defined view object.
        const list = await db.list({ include_docs: true, startkey: '0' });
        
        cachedQuotes = list.rows.filter(row=>!row.id.startsWith('_design')).map(obj => obj.doc);
    }

    const getRandomQuote = quotes => {
        if (!quotes || quotes.length === 0) return null;

        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    };

    // ENCRYPT THE FILE
    // Load the private key from the environment variable and
    // strip any accidental leading/trailing single or double quotes

    // let publicKeyPem = process.env.JWE_PUBLIC_KEY.replace(/^['"\s]+|['"\s]+$/g, '');

    // then safely normalise line breaks to what jose expects
    // publicKeyPem = publicKeyPem.replace(/\\n/g, '\n');

    // Convert the PEM string into a jose KeyLike object
    // const publicKey = await jose.importSPKI(publicKeyPem, 'RSA-OAEP-256');

    // encrypt the payload using JWE (A256GCM algorithm used as standard)
    // const jwe_encrypted_docs = await new jose.EncryptJWT(docs_converted)
    //     .setProtectedHeader({ alg: 'RSA-OAEP-256', enc: 'A256GCM' })
    //     .setIssuedAt()
    //     .encrypt(publicKey);

    /**
     *  Process for using CouchDB to randomly select a quote.
     */

    // const quote_db_size = await db.view("quotes", "count-documents");
    // const [database_size] = quote_db_size.rows.map((obj) => obj.value);

    // const random_number = Math.floor(Math.random() * database_size);

    // const quote_db_random = await db.view("quotes", "count-documents", {
    // 	reduce: false,
    // 	limit: 1,
    // 	skip: random_number,
    // });

    // const random_quote = await db.view("quotes", "doc-selected-by-id", {
    // 	key: quote_db_random.rows[0].id,
    // 	include_docs: true,
    // });

    // const db_response_position = random_quote.offset + 1;

    // const randomQuoteMap = random_quote.rows.map((obj) => {
    // 	const { quote, credited, category } = obj.doc;
    // 	return { quote, credited, category, database_size, db_response_position };
    // });

    /**
     *  Filter for quotes wtih 'wisdom' category.
     */

    // const life = await db.view("quotes", "category-filter-selector", {
    // 	key: "wisdom",
    // 	include_docs: true,
    // });

    // const viewLifeQuotesMap = life.rows.map((obj) => obj.doc);

    /**
     *  Filter for quotes wtih 'motivation' category.
     */

    // const attitude = await db.view("quotes", "category-filter-selector", {
    // 	key: "motivation",
    // 	include_docs: true,
    // });
    // const viewAttitudeQuotesMap = attitude.rows.map((obj) => obj.doc);

    // ===================================================================

    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json; charset=UTF-8');

    const myOptions = {
        status: 200,
        statusText: "you've got a randomly selected quote!",
        headers: myHeaders,
    };

    return new Response(
        JSON.stringify(
            getRandomQuote(cachedQuotes)
            //{
            //      test: "request successful - 😊.",
            //      database_size,
            //      cachedQuotes,
            //	    token: jwe_encrypted_docs
            //      randomQuoteMap,
            //      viewLifeQuotesMap,
            //      viewAttitudeQuotesMap,
            //    }
        ),
        myOptions
    );
};

export const config = {
    path: '/quotes',
};

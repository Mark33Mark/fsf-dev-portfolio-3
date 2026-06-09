import nano from 'nano';

export const dbCouchClient = async () => {
    const AUTH_USER = process.env.USERNAME_DB;
    const AUTH_PASS = process.env.PASSWORD_DB;
    const DB = process.env.NAME_DB;
    const URL = process.env.URL_DB;

    const couch = nano({
        url: URL,
    });

    await couch.auth(AUTH_USER, AUTH_PASS);

    const db = couch.use(DB);

    return db;
};

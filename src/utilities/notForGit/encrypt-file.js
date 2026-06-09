import fs from 'node:fs';
import { importSPKI, EncryptJWT } from 'jose';
// import { fallbackQuotes } from './quotes-data.js';

// const fallbackQuotes = {
//     cachedQuotes: [
//         {
//             quote: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
//             credited: 'Thomas Edison',
//         },
//         {
//             quote: 'You can observe a lot just by watching.',
//             credited: 'Yogi Berra',
//         },
//         {
//             quote: 'A house divided against itself cannot stand.',
//             credited: 'Abraham Lincoln',
//         },
//         {
//             quote: 'Difficulties increase the nearer we get to the goal.',
//             credited: 'Johann Wolfgang von Goethe',
//         },
//         {
//             quote: 'Fate is in your hands and no one elses',
//             credited: 'Byron Pulsifer',
//         },
//         {
//             quote: 'Be the chief but never the lord.',
//             credited: 'Lao Tzu',
//         },
//     ],
// };

const publicKey =
    '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAseTI8Gh5Pq7f2Wsrv13t\nYu9jl9MfgR4/9y4zKTjZ4eoK/LzY7y9eL0d7ZJ8ZBWPv4TQMgv5izJTs7vl9xD8s\ng35TnBiNtTndGW80leJzkOY8PdhrsoUOLhc3U73wflTm89YfANbaZ8g7AhLPBcYP\n5XV2fjhn6Vrxk2zqijtKgY6p+xzkPhXm6nG/cFweXUa1VKVpKBKoAjMLHYFiRXZf\nqheGAAye/j9FjkAhgbCZgOOj1aSgOH1SUifhPN/XnhgEnSbuVFHMYB1+wz2yG9oI\nc3GlIwHMWM9+HPs9d/N2YziRW4eZLHR/GikqA/gR2tFVy/VSPwrPmgeGpLGvEdPc\nQQIDAQAB\n-----END PUBLIC KEY-----\n';

// const docs_converted = fallbackQuotes.toObject ? docs.toObject() : { ...fallbackQuotes };

let publicKeyPem = publicKey.replace(/^['"\s]+|['"\s]+$/g, '');

// then safely normalise line breaks to what jose expects
publicKeyPem = publicKeyPem.replace(/\\n/g, '\n');

// Convert the PEM string into a jose KeyLike object
const publicKeyJose = await importSPKI(publicKeyPem, 'RSA-OAEP-256');

// encrypt the payload using JWE (A256GCM algorithm used as standard)
const jwe_encrypted_docs = await new EncryptJWT(fallbackQuotes)
    .setProtectedHeader({ alg: 'RSA-OAEP-256', enc: 'A256GCM' })
    .setIssuedAt()
    .encrypt(publicKeyJose);

const content =
    typeof jwe_encrypted_docs === 'object' ? JSON.stringify(jwe_encrypted_docs, null, 2) : jwe_encrypted_docs;
fs.writeFileSync('encryptedQuotes.txt', content, 'utf8');

console.log('\n##########\nFile written successfully!\n##########\n');

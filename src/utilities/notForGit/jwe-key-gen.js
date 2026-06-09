import * as crypto from 'crypto';

// open terminal at the location of this file, and run: 
// node jwe-key-gen.js

// Generate a 2048-bit RSA key pair
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki', // Required format for jose.importSPKI
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8', // Required format for jose.importPKCS8
        format: 'pem',
    },
});




console.log("\n>>>> COPY TO JWE_PUBLIC_KEY <<<<\n");
console.log(publicKey.split(/\r?\n/).join('\\n'));

console.log("\n\n>>>> COPY TO JWE_PRIVATE_KEY <<<<\n");
console.log(privateKey.split(/\r?\n/).join('\\n'));

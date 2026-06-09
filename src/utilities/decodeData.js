import { jwtDecrypt, importPKCS8 } from 'jose';

export const decodeData = async (data) => {
        const privateKeyPem = import.meta.env.VITE_JWE_PRIVATE_KEY.replace(/\\n/g, '\n');
        const clientKey = await importPKCS8(privateKeyPem, 'RSA-OAEP-256');
        const token = data.token;        
        const { payload } = await jwtDecrypt(token, clientKey);

        return payload
}
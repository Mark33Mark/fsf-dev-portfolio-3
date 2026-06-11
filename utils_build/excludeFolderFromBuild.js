import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Node.js ESM helper to replace __dirname safely
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * 
 * Deletes specified folders and their contents from the production build
 * 
 * @param {string[]} folderNames - array of folders in the 'public' folder to be excluded from the build (/dist) 
 * 
 */
export const excludeFolderFromBuild = folderNames => {
    return {
        name: 'exclude-public-folder',
        // this function runs after the bundle has been written to disk
        closeBundle() {
            try {
                folderNames.forEach(folderName => {
                    const targetPath = path.resolve(__dirname, '../dist', folderName);

                    // throw new TypeError('Test Error')

                    if (fs.existsSync(targetPath)) {
                        fs.rmSync(targetPath, { recursive: true, force: true });
                        console.log(
                            `\n\n>>>>\n  \x1b[1;34;45m  ${folderName} \x1b[0m  folder and contents have been removed from your build (/dist). \n<<<<\n`
                        );
                    } else {
                        // optional warning if the folder wasn't found in dist
                        console.warn(
                            `\n\n>>>>\n   \x1b[1;34;45m  Warning: "${folderName}"  \x1b[0m  folder was not found.  \n<<<<\n`
                        );
                    }
                });

            } catch (error) {
                console.error(
                    `\n\n>>>>\n   Failed to exclude \x1b[1;34;45m "${folderName}" \x1b[0m from build: \n`,
                    error.message,
                    `\n<<<<\n`
                );
            }
        },
    };
};

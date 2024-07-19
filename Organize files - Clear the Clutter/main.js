// QUESTION:

// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// For example, these files become:

// 1. cat.jpg
// 2. cat.pdf
// 3. max.pdf
// 4. max.zip
// 5. name.jpg
// 6. name.png
// 7. radin.png
// 8. radin.zip

// This: 
// JPG / cat.jpg, name.jpg
// PNG / name.png, radin.png
// PDF / abuzar.pdf, cat.pdf
// ZIP / abuzar.zip, radin.zip


// SOLUTION:

// Import necessary modules.
import fsp from "fs/promises";
import fs, {mkdirSync} from "fs";
import path, {dirname} from "path";
import {fileURLToPath} from 'url';

// organizeFile function move clutter files to organized folders.
const organizeFile = (oldPath, newPath) => {
    // Rename file's parent folder.
    fs.renameSync(oldPath, newPath);
    // Show a message that file is organized.
    console.log("File has been organized");
};

// Make __dirname variable that tells parent dirctory.
const __dirname = dirname(fileURLToPath(import.meta.url));
// Path of clutter files.
let filesPath = "clutter files";
// Get all clutter files.
let files = fs.readdirSync(filesPath);

// If organized files folder is not exists then create it.
if (fs.existsSync(`${__dirname}/organized files`) == false) {
    // Make organized files folder.
    await fsp.mkdir(`${__dirname}/organized files`);
}

// forEach loop for getting files one by one.
files.forEach(element => {
    // Old path of files.
    let oldPath = `${__dirname}/clutter files/${element}`;
    // New path of files.
    let newPath = `${__dirname}/organized files/${path.extname(element).slice(1).toUpperCase()}/${element}`;

    // If (format name) folder is not exists then run if block code otherwise run else block code.
    if (fs.existsSync(`${__dirname}/organized files/${path.extname(element).slice(1).toUpperCase()}`) == false) {
        // Make (format name) folder.
        mkdirSync(`${__dirname}/organized files/${path.extname(element).slice(1).toUpperCase()}`);

        // Move file from clutter files folder to (format name) folder with organizedFile function.
        organizeFile(oldPath, newPath);
    } else {
        // Move file from clutter files folder to (format name) folder with organizedFile function.
        organizeFile(oldPath, newPath);
    }
});
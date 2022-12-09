"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixFiles = void 0;
function fixFiles(files) {
    const numberFiles = {};
    const fixedFiles = [];
    files.forEach((file) => {
        if (numberFiles.hasOwnProperty(file)) {
            numberFiles[file] += 1;
        }
        else {
            numberFiles[file] = 1;
        }
        if (numberFiles[file] === 1) {
            fixedFiles.push(file);
        }
        else {
            fixedFiles.push(`${file}(${numberFiles[file] - 1})`);
        }
    });
    return fixedFiles;
}
exports.fixFiles = fixFiles;

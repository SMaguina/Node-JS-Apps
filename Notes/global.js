var path = require("path");

//pull and print actual filename 
console.log(`Rock on World from ${path.basename(__filename)}`);

//full directory path printed out of where the file is located
console.log(__dirname);

//full directory path printed out WITH the file name included
console.log(__filename);
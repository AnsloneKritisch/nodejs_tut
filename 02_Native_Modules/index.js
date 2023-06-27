// File System Module 

const fs = require("fs");

// err means error 

fs.writeFile("note.txt", "Hello world!", (err) => {
    if(err) throw err;

    console.log("File has been saved");
        
});




const fs = require("fs");

fs.mkdir('new_directory', (err) => {
  if (err) {
    console.error(err);
    return;
  } 
  console.log("Directory created successfully");
})